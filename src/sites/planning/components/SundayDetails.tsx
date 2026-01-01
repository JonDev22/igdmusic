import { Timestamp } from "firebase/firestore";
import type { ISong } from "../../../interfaces/ISong";
import useAuthContext from "../../../hooks/useAuthContext";
import type { Sunday } from "../../../interfaces/ISundays";

interface SundayDetailsProps {
    sundays: Sunday[];
    selectedSunday: string | null;
    onAddSong: (sundayId: string, song: ISong) => void;
    onRemoveSong: (sundayId: string, songId: string) => void;
    onReorderSongs: (sundayId: string, fromIndex: number, toIndex: number) => void;
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

function SundayDetails({
    sundays,
    selectedSunday,
    onAddSong,
    onRemoveSong,
    onReorderSongs,
}: SundayDetailsProps) {
    const context = useAuthContext();

    if (!selectedSunday) {
        return (
            <div className="lg:col-span-2 bg-linear-to-br from-slate-800 to-slate-900 rounded-xl p-12 shadow-lg border border-blue-800/30 text-center">
                <p className="text-gray-400 text-lg">
                    Wählen Sie einen Sonntag, um die Planung zu bearbeiten
                </p>
            </div>
        );
    }

    const sunday = sundays.find((s) => s.id === selectedSunday);
    if (!sunday) return null;

    const sortedItems = [...sunday.items].sort((a, b) => a.order - b.order);

    return (
        <div className="lg:col-span-2 bg-linear-to-br from-slate-800 to-slate-900 rounded-xl p-6 shadow-lg border border-blue-800/30">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-blue-200 mb-2">
                    {formatDate(sunday.date)}
                </h2>
                <p className="text-gray-400">
                    Geplante Lieder: {sortedItems.length}
                </p>
            </div>

            {/* Songs List */}
            <div className="space-y-2 mb-6">
                {sortedItems.length === 0 ? (
                    <p className="text-gray-400 text-center py-8">
                        Noch keine Lieder hinzugefügt
                    </p>
                ) : (
                    sortedItems.map((item, index) => (
                        <div
                            key={item.id}
                            className="bg-slate-700 rounded-lg p-4 flex items-center justify-between hover:bg-slate-650 transition-all"
                        >
                            <div className="flex items-center gap-4 flex-1">
                                <div className="flex items-center gap-2">
                                    <span className="font-bold text-blue-300 min-w-8">
                                        {item.order}.
                                    </span>
                                    <span className="text-gray-100">
                                        {item.title}
                                    </span>
                                </div>
                            </div>

                            <div className="flex gap-1">
                                {index > 0 && (
                                    <button
                                        onClick={() =>
                                            onReorderSongs(
                                                sunday.id,
                                                index,
                                                index - 1,
                                            )
                                        }
                                        className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded transition-all"
                                        title="Nach oben"
                                    >
                                        ↑
                                    </button>
                                )}
                                {index < sortedItems.length - 1 && (
                                    <button
                                        onClick={() =>
                                            onReorderSongs(
                                                sunday.id,
                                                index,
                                                index + 1,
                                            )
                                        }
                                        className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded transition-all"
                                        title="Nach unten"
                                    >
                                        ↓
                                    </button>
                                )}
                                <button
                                    onClick={() =>
                                        onRemoveSong(sunday.id, item.id)
                                    }
                                    className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded transition-all"
                                    title="Entfernen"
                                >
                                    ✕
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Add Song Section */}
            <div className="border-t border-blue-800/30 pt-6">
                <h3 className="text-lg font-bold text-blue-200 mb-4">
                    Lied hinzufügen
                </h3>
                <div className="bg-slate-700 rounded-lg p-4 max-h-64 overflow-y-auto">
                    {context.songs && context.songs.length > 0 ? (
                        <div className="space-y-2">
                            {context.songs.map((song) => {
                                const alreadyAdded = sunday.items.some(
                                    (item) => item.id === song.id,
                                );
                                return (
                                    <button
                                        key={song.id}
                                        onClick={() =>
                                            !alreadyAdded &&
                                            onAddSong(sunday.id, song)
                                        }
                                        disabled={alreadyAdded}
                                        className={`w-full text-left p-3 rounded transition-all ${
                                            alreadyAdded
                                                ? "bg-gray-600 text-gray-400 cursor-not-allowed opacity-50"
                                                : "bg-slate-600 hover:bg-blue-600 text-gray-100 hover:text-white"
                                        }`}
                                    >
                                        <div className="font-semibold">
                                            {song.title}
                                        </div>
                                        <div className="text-xs opacity-75">
                                            {song.key || "Keine Tonart"}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    ) : (
                        <p className="text-gray-400 text-center py-8">
                            Keine Lieder verfügbar
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SundayDetails;
