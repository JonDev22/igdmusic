import type { IMusician } from "../../../interfaces/IMusician";
import type { Sunday } from "../../../interfaces/ISundays";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface SundayDetailsMusiciansProps {
    sunday: Sunday;
    musicians: IMusician[];
    user: any;
    isOpen: boolean;
    onToggle: () => void;
    onAddMusician: (musicianId: string) => void;
    onRemoveMusician: (musicianId: string) => void;
}

function SundayDetailsMusicians({
    sunday,
    musicians,
    user,
    isOpen,
    onToggle,
    onAddMusician,
    onRemoveMusician,
}: SundayDetailsMusiciansProps) {
    return (
        <>
            {/* Musicians Section */}
            <div className="mt-6 border-t border-blue-800/30 pt-6">
                <button
                    onClick={onToggle}
                    className="w-full flex items-center justify-between p-3 bg-slate-700 hover:bg-slate-650 rounded-lg transition-all"
                >
                    <h3 className="text-lg font-bold text-blue-200">
                        Musiker ({sunday?.musicians?.length || 0})
                    </h3>
                    <ChevronDownIcon
                        className={`w-5 h-5 text-blue-200 transition-transform ${
                            isOpen ? "rotate-180" : ""
                        }`}
                    />
                </button>

                {isOpen && (
                    <div className="mt-4 space-y-2">
                        {sunday?.musicians && sunday.musicians.length > 0 ? (
                            <>
                                <h4 className="text-sm font-semibold text-blue-300 mb-2">
                                    Zugewiesene Musiker
                                </h4>
                                {sunday.musicians.map((musicianId) => {
                                    const musician = musicians?.find(
                                        (m) => m.id === musicianId,
                                    );
                                    return musician ? (
                                        <div
                                            key={musicianId}
                                            className="bg-slate-700 rounded-lg p-4 flex items-center justify-between hover:bg-slate-650 transition-all"
                                        >
                                            <div className="flex flex-col">
                                                <span className="text-gray-100 font-semibold">
                                                    {musician.name}
                                                </span>
                                                <span className="text-sm text-gray-400">
                                                    {musician.instrument?.join(
                                                        ", ",
                                                    ) || "Kein Instrument"}
                                                </span>
                                                {musician.role && (
                                                    <span className="text-sm text-gray-400">
                                                        {musician.role}
                                                    </span>
                                                )}
                                            </div>
                                            {user && (
                                                <button
                                                    onClick={() =>
                                                        onRemoveMusician(
                                                            musicianId,
                                                        )
                                                    }
                                                    className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded transition-all"
                                                    title="Entfernen"
                                                >
                                                    ✕
                                                </button>
                                            )}
                                        </div>
                                    ) : null;
                                })}
                            </>
                        ) : (
                            <p className="text-gray-400 text-center py-4">
                                Noch keine Musiker zugewiesen
                            </p>
                        )}

                        {/* Add Musicians Section */}
                        {user && (
                            <>
                                <div className="border-t border-blue-800/30 pt-4 mt-4">
                                    <h4 className="text-sm font-semibold text-blue-300 mb-2">
                                        Musiker hinzufügen
                                    </h4>
                                    <div className="bg-slate-700 rounded-lg p-4 max-h-64 overflow-y-auto">
                                        {musicians && musicians.length > 0 ? (
                                            <div className="space-y-2">
                                                {musicians.map((musician) => {
                                                    const alreadyAdded =
                                                        sunday?.musicians?.includes(
                                                            musician.id,
                                                        );
                                                    return (
                                                        <button
                                                            key={musician.id}
                                                            onClick={() =>
                                                                !alreadyAdded &&
                                                                onAddMusician(
                                                                    musician.id,
                                                                )
                                                            }
                                                            disabled={
                                                                alreadyAdded
                                                            }
                                                            className={`w-full text-left p-3 rounded transition-all ${
                                                                alreadyAdded
                                                                    ? "bg-gray-600 text-gray-400 cursor-not-allowed opacity-50"
                                                                    : "bg-slate-600 hover:bg-blue-600 text-gray-100 hover:text-white"
                                                            }`}
                                                        >
                                                            <div className="font-semibold">
                                                                {musician.name}
                                                            </div>
                                                            <div className="flex justify-between items-center">
                                                                <div className="text-xs opacity-75">
                                                                    {musician.instrument?.join(
                                                                        ", ",
                                                                    ) ||
                                                                        "Kein Instrument"}
                                                                </div>
                                                                {musician.role && (
                                                                    <div className="text-xs opacity-75">
                                                                        {
                                                                            musician.role
                                                                        }
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        ) : (
                                            <p className="text-gray-400 text-center py-8">
                                                Keine Musiker verfügbar
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}

export default SundayDetailsMusicians;
