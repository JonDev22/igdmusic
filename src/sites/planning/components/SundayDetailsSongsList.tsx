import { availableKeys } from "../../../lib/availableKeys";
import type { IUser } from "../../../interfaces/IUser";
import {
    TrashIcon,
    PaperClipIcon,
    LinkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import useAuthContext from "../../../hooks/useAuthContext";

interface SundayDetailsSongsListProps {
    sortedItems: Array<{
        order: number;
        id: string;
        title: string;
        key: string;
    }>;
    user: IUser | null;
    isOpen: boolean;
    onToggle: () => void;
    onKeyChange: (itemId: string, newKey: string) => void;
    onRemoveSong: (songId: string) => void;
    onReorderSongs: (fromIndex: number, toIndex: number) => void;
}

function SundayDetailsSongsList({
    sortedItems,
    user,
    onKeyChange,
    onRemoveSong,
    onReorderSongs,
}: SundayDetailsSongsListProps) {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const { songs } = useAuthContext();

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
                                            {user?.admin && (
                                                <>
                                                    {isEdit ? (
                                                        <select
                                                            value={
                                                                item.key || ""
                                                            }
                                                            onChange={(e) =>
                                                                onKeyChange(
                                                                    item.id,
                                                                    e.target
                                                                        .value,
                                                                )
                                                            }
                                                            defaultValue={
                                                                item.key
                                                            }
                                                            className="px-3 py-1 bg-slate-600 text-gray-100 border border-slate-500 rounded hover:bg-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                                        >
                                                            {availableKeys.map(
                                                                (key) => (
                                                                    <option
                                                                        key={
                                                                            key
                                                                        }
                                                                        value={
                                                                            key
                                                                        }
                                                                    >
                                                                        {key}
                                                                    </option>
                                                                ),
                                                            )}
                                                        </select>
                                                    ) : (
                                                        <span className="text-sm text-gray-300">
                                                            {item.key ||
                                                                "Keine Tonart"}
                                                        </span>
                                                    )}
                                                </>
                                            )}
                                            {!user?.admin && (
                                                <span className="text-sm text-gray-300">
                                                    {item.key || "Keine Tonart"}
                                                </span>
                                            )}
                                            <p className="text-sm text-gray-300">
                                                |
                                            </p>
                                        </div>
                                        <div className="flex gap-2 pt-2">
                                            <div
                                                className="rounded-xl bg-red-500 p-2 flex items-center gap-2 text-white hover:cursor-pointer hover:bg-red-300"
                                                onClick={() =>
                                                    window.open(
                                                        songs.find(
                                                            (song) =>
                                                                song.id ===
                                                                item.id,
                                                        )?.youTubeLink ||
                                                            item.id,
                                                        "_blank",
                                                    )
                                                }
                                            >
                                                <LinkIcon className="w-2 h-2" />
                                                <p className="text-sm">
                                                    YouTube
                                                </p>
                                            </div>
                                            <div
                                                className="rounded-xl bg-blue-500 p-2 flex items-center gap-2 text-white hover:cursor-pointer hover:bg-blue-300"
                                                onClick={() =>
                                                    window.open(
                                                        songs.find(
                                                            (song) =>
                                                                song.id ===
                                                                item.id,
                                                        )?.songSelectLink ||
                                                            item.id,
                                                        "_blank",
                                                    )
                                                }
                                            >
                                                <LinkIcon className="w-2 h-2" />
                                                <p className="text-sm">
                                                    SongSelect
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {user?.admin && (
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
                                        className="bg-red-600
                                        hover:bg-red-700 text-red-700 rounded
                                        transition-all"
                                        title="Entfernen"
                                    >
                                        <TrashIcon className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => setIsEdit(!isEdit)}
                                        className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded transition-all"
                                        title="Edit"
                                    >
                                        <PaperClipIcon className="w-4 h-4" />
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
