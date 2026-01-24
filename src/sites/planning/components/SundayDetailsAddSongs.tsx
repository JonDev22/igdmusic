import type { ISong } from "../../../interfaces/ISong";
import type { Sunday } from "../../../interfaces/ISundays";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface SundayDetailsAddSongsProps {
    songs: ISong[];
    sunday: Sunday;
    searchQuery: string;
    isOpen: boolean;
    onSearchChange: (query: string) => void;
    onToggle: () => void;
    onAddSong: (song: ISong) => void;
}

function SundayDetailsAddSongs({
    songs,
    sunday,
    searchQuery,
    isOpen,
    onSearchChange,
    onToggle,
    onAddSong,
}: SundayDetailsAddSongsProps) {
    return (
        <div className="border-t border-blue-800/30 pt-6">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between p-3 bg-slate-700 hover:bg-slate-650 rounded-lg transition-all"
            >
                <h3 className="text-lg font-bold text-blue-200">
                    Lied hinzufügen
                </h3>
                <ChevronDownIcon
                    className={`w-5 h-5 text-blue-200 transition-transform ${
                        isOpen ? "rotate-180" : ""
                    }`}
                />
            </button>

            {isOpen && (
                <>
                    <div className="mt-4">
                        <input
                            type="text"
                            placeholder="Nach Lied suchen..."
                            value={searchQuery}
                            onChange={(e) => onSearchChange(e.target.value)}
                            className="w-full px-4 py-2 bg-slate-600 text-gray-100 placeholder-gray-400 rounded-lg border border-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        />
                    </div>

                    <div className="bg-slate-700 rounded-lg p-4 max-h-64 overflow-y-auto">
                        {songs && songs.length > 0 ? (
                            (() => {
                                const filteredSongs = songs
                                    .filter((song) =>
                                        song.title
                                            .toLowerCase()
                                            .includes(
                                                searchQuery.toLowerCase(),
                                            ),
                                    )
                                    .sort((a, b) =>
                                        a.title.localeCompare(b.title),
                                    );
                                return filteredSongs.length > 0 ? (
                                    <div className="space-y-2">
                                        {filteredSongs.map((song) => {
                                            const alreadyAdded =
                                                sunday.items?.some(
                                                    (item) =>
                                                        item.id === song.id,
                                                );
                                            return (
                                                <button
                                                    key={song.id}
                                                    onClick={() =>
                                                        !alreadyAdded &&
                                                        onAddSong(song)
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
                                                    <div className="flex justify-between items-center">
                                                        <div className="text-xs opacity-75">
                                                            {song.key ||
                                                                "Keine Tonart"}
                                                        </div>
                                                        <div className="text-xs opacity-75">
                                                            Zuletzt gespielt:
                                                            N/A
                                                        </div>
                                                    </div>
                                                </button>
                                            );
                                        })}
                                    </div>
                                ) : (
                                    <p className="text-gray-400 text-center py-8">
                                        Keine Lieder gefunden
                                    </p>
                                );
                            })()
                        ) : (
                            <p className="text-gray-400 text-center py-8">
                                Keine Lieder verfügbar
                            </p>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

export default SundayDetailsAddSongs;
