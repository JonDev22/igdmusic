import { Timestamp } from "firebase/firestore";
import type { Sunday } from "../../../interfaces/ISundays";
import { Button } from "@headlessui/react";
import useAuthContext from "../../../hooks/useAuthContext";
import { useState } from "react";

import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";

interface SundaysListProps {
    sundays: Sunday[];
    selectedSunday: string | null;
    onSelectSunday: (sundayId: string) => void;
    openDialog: () => void;
}

const formatDate = (timestamp: Timestamp) => {
    const date = timestamp.toDate();
    return date.toLocaleDateString("de-DE", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};

function SundaysList({
    sundays,
    selectedSunday,
    onSelectSunday,
    openDialog,
}: SundaysListProps) {
    const { user } = useAuthContext();

    const [showOldSundays, setShowOldSundays] = useState(false);

    const today = new Date();

    const passedSundays = sundays.filter((sunday) => {
        const sundayDate = sunday.date.toDate();
        return sundayDate < today;
    });

    const comingSundays = sundays.filter((sunday) => {
        const sundayDate = sunday.date.toDate();
        return sundayDate >= today;
    });

    const displaysSundayList = (sundays: Sunday[]) => {
        return sundays
            .sort((a, b) => a.date.seconds - b.date.seconds)
            .map((sunday) => (
                <div
                    key={sunday.id}
                    onClick={() => onSelectSunday(sunday.id)}
                    className={`w-full text-left p-3 rounded-lg transition-all hover:cursor-pointer ${
                        selectedSunday === sunday.id
                            ? "bg-blue-600 text-white shadow-lg"
                            : "bg-slate-700 text-gray-100 hover:bg-slate-600"
                    }`}
                >
                    <div className="font-semibold">
                        {formatDate(sunday.date)}
                    </div>
                    <div className="text-sm opacity-75">
                        {sunday.items ? sunday.items.length : 0} Lieder
                    </div>
                </div>
            ));
    };

    return (
        <div className="lg:col-span-1 bg-linear-to-br from-slate-800 to-slate-900 rounded-xl p-6 shadow-lg border border-blue-800/30 h-fit">
            <div className="flex justify-between pb-4 items-center">
                <h2 className="text-2xl font-bold text-blue-200">
                    Gottesdienste
                </h2>
                {user && (
                    <Button
                        onClick={openDialog}
                        className="px-6 py-2 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                        Hinzufügen
                    </Button>
                )}
            </div>
            <div className="space-y-2">
                <div className="flex items-center gap-1 justify-between">
                    <h3>Vergangene Gottesdienste:</h3>
                    <Button onClick={() => setShowOldSundays(!showOldSundays)}>
                        {showOldSundays ? (
                            <EyeSlashIcon className="w-5 h-5" />
                        ) : (
                            <EyeIcon className="w-5 h-5" />
                        )}
                    </Button>
                </div>
                {showOldSundays ? (
                    <div>{displaysSundayList(passedSundays)}</div>
                ) : (
                    <div>{passedSundays.length} Vergangene Gottesdienste</div>
                )}

                <div className="border-b" />

                <h3>Kommende Gottesdienste:</h3>
                {displaysSundayList(comingSundays)}
            </div>
        </div>
    );
}

export default SundaysList;
