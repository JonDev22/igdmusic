import { availableKeys } from "../../../lib/availableKeys";
import type { ISong } from "../../../interfaces/ISong";

interface SundayDetailsSongsListProps {
    sortedItems: Array<{
        order: number;
        id: string;
        title: string;
        key: string;
    }>;
    songs: ISong[];
    user: any;
    isOpen: boolean;
    onToggle: () => void;
    onKeyChange: (itemId: string, newKey: string) => void;
    onRemoveSong: (songId: string) => void;
    onReorderSongs: (fromIndex: number, toIndex: number) => void;
}

function SundayDetailsSongsList({
    sortedItems,
    songs,
    user,
    onKeyChange,
    onRemoveSong,
    onReorderSongs,
}: SundayDetailsSongsListProps) {
    const getSelectedSong = (songTitle: string): ISong | null => {
        return songs.find((song) => song.title === songTitle) ?? null;
    };

    const createDefaultOption = (song: ISong | null) => {
        if (song && song.key) {
            return <option value={song.key || ""}>Default {song.key}</option>;
        }
        return null;
    };

    return (
        <div className="border-t border-blue-800/30 pt-6">
            <div className="space-y-2 mt-4">
                {sortedItems.length === 0 ? (
                    <p className="text-gray-400 text-center py-8">
                        Noch keine Lieder hinzugefügt
                    </p>
                ) : (
                    sortedItems.map((item, index) => (
                        <div
                            key={item.id}
                            className="bg-slate-700 rounded-lg p-4 flex flex-col md:flex-row lg:items-center lg:justify-between hover:bg-slate-650 transition-all"
                        >
                            <div className="flex items-center gap-4 flex-1">
                                <div className="flex items-center gap-2">
                                    <span className="font-bold text-blue-300 min-w-8">
                                        {item.order}.
                                    </span>
                                    <div className="flex flex-col flex-1">
                                        <span className="text-gray-100">
                                            {item.title}
                                        </span>
                                        <div className="flex items-center gap-2 mt-2">
                                            <span className="text-sm text-gray-400">
                                                Tonart:
                                            </span>
                                            {user && (
                                                <select
                                                    value={item.key || ""}
                                                    onChange={(e) =>
                                                        onKeyChange(
                                                            item.id,
                                                            e.target.value,
                                                        )
                                                    }
                                                    className="px-3 py-1 bg-slate-600 text-gray-100 border border-slate-500 rounded hover:bg-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                                >
                                                    {createDefaultOption(
                                                        getSelectedSong(
                                                            item.title,
                                                        ),
                                                    )}
                                                    {availableKeys.map(
                                                        (key) => (
                                                            <option
                                                                key={key}
                                                                value={key}
                                                            >
                                                                {key}
                                                            </option>
                                                        ),
                                                    )}
                                                </select>
                                            )}
                                            {!user && (
                                                <span className="text-sm text-gray-300">
                                                    {item.key || "Keine Tonart"}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {user && (
                                <div className="flex gap-1 mt-3 md:mt-0">
                                    {index > 0 && (
                                        <button
                                            onClick={() =>
                                                onReorderSongs(index, index - 1)
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
                                                onReorderSongs(index, index + 1)
                                            }
                                            className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded transition-all"
                                            title="Nach unten"
                                        >
                                            ↓
                                        </button>
                                    )}
                                    <button
                                        onClick={() => onRemoveSong(item.id)}
                                        className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded transition-all"
                                        title="Entfernen"
                                    >
                                        ✕
                                    </button>
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default SundayDetailsSongsList;
