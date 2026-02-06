import type { IUser } from "../../../interfaces/IUser";
import { useState } from "react";
import SongDetailButtons from "./songDetails/SongDetailButtons";
import SongDetailInformation from "./songDetails/SongDetailInformation";
import type { ISong } from "../../../interfaces/ISong";

interface SundayDetailsSongsListProps {
    sortedItems: ISong[];
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
                            <SongDetailInformation
                                index={index + 1}
                                user={user}
                                onKeyChange={onKeyChange}
                                item={item}
                                isEdit={isEdit}
                            />

                            {user?.admin && (
                                <SongDetailButtons
                                    index={index}
                                    onReorderSongs={onReorderSongs}
                                    onRemoveSong={onRemoveSong}
                                    item={item}
                                    songListlength={sortedItems.length}
                                    isEdit={isEdit}
                                    setIsEdit={(value: boolean) =>
                                        setIsEdit(value)
                                    }
                                />
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default SundayDetailsSongsList;
