import { Timestamp } from "firebase/firestore";
import type { Sunday } from "../../../interfaces/ISundays";

interface SundaysListProps {
    sundays: Sunday[];
    selectedSunday: string | null;
    onSelectSunday: (sundayId: string) => void;
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
}: SundaysListProps) {
    return (
        <div className="lg:col-span-1 bg-linear-to-br from-slate-800 to-slate-900 rounded-xl p-6 shadow-lg border border-blue-800/30 h-fit">
            <h2 className="text-2xl font-bold mb-4 text-blue-200">Sonntage</h2>
            <div className="space-y-2">
                {sundays.map((sunday) => (
                    <button
                        key={sunday.id}
                        onClick={() => onSelectSunday(sunday.id)}
                        className={`w-full text-left p-3 rounded-lg transition-all ${
                            selectedSunday === sunday.id
                                ? "bg-blue-600 text-white shadow-lg"
                                : "bg-slate-700 text-gray-100 hover:bg-slate-600"
                        }`}
                    >
                        <div className="font-semibold">
                            {formatDate(sunday.date)}
                        </div>
                        <div className="text-sm opacity-75">
                            {/* {sunday.items.length} Lieder */}
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default SundaysList;
