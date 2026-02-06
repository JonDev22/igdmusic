import { TrashIcon, PaperClipIcon } from "@heroicons/react/24/outline";
import type { ISong } from "../../../../interfaces/ISong";

interface SongDetailButtonsProps {
    index: number;
    onReorderSongs: (fromIndex: number, toIndex: number) => void;
    onRemoveSong: (songId: string) => void;
    songListlength: number;
    item: ISong;
    isEdit: boolean;
    setIsEdit: (value: boolean) => void;
}

function SongDetailButtons({
    index,
    onReorderSongs,
    onRemoveSong,
    songListlength,
    item,
    isEdit,
    setIsEdit,
}: SongDetailButtonsProps) {
    return (
        <div className="flex gap-1 mt-3 md:mt-0">
            {index > 0 && (
                <button
                    onClick={() => onReorderSongs(index, index - 1)}
                    className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded transition-all"
                    title="Nach oben"
                >
                    ↑
                </button>
            )}
            {index < songListlength - 1 && (
                <button
                    onClick={() => onReorderSongs(index, index + 1)}
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
    );
}

export default SongDetailButtons;
