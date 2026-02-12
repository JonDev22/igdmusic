import type { IUser } from "../../../interfaces/IUser";
import type { ISong } from "../../../interfaces/ISong";
import SongDetailEntry from "./songDetails/SongDetailEntry";

interface SundayDetailsSongsListProps {
    sortedItems: ISong[];
    user: IUser | null;
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
    return (
        <div className="border-t border-blue-800/30 pt-6">
            <div className="space-y-2 mt-4">
                {sortedItems.length === 0 ? (
                    <p className="text-gray-400 text-center py-8">
                        Noch keine Lieder hinzugefügt
                    </p>
                ) : (
                    sortedItems.map((item, index) => (
                        <SongDetailEntry
                            key={index}
                            song={item}
                            index={index}
                            user={user}
                            onKeyChange={onKeyChange}
                            onRemoveSong={onRemoveSong}
                            onReorderSongs={onReorderSongs}
                            numOfSongs={sortedItems.length}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default SundayDetailsSongsList;
