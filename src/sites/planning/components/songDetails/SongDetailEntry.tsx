import { useState } from "react";
import SongDetailButtons from "./SongDetailButtons";
import SongDetailInformation from "./SongDetailInformation";
import type { IUser } from "../../../../interfaces/IUser";
import type { ISong } from "../../../../interfaces/ISong";

interface SongDetailEntryProps {
    user: IUser | null;
    song: ISong;
    index: number;
    onKeyChange: (itemId: string, newKey: string) => void;
    onRemoveSong: (songId: string) => void;
    onReorderSongs: (fromIndex: number, toIndex: number) => void;
    numOfSongs: number;
}

function SongDetailEntry({
    user,
    song,
    index,
    onKeyChange,
    onRemoveSong,
    onReorderSongs,
    numOfSongs,
}: SongDetailEntryProps) {
    const [isEdit, setIsEdit] = useState<boolean>(false);

    return (
        <div className="bg-slate-700 rounded-lg p-4 flex flex-col md:flex-row lg:items-center lg:justify-between hover:bg-slate-650 transition-all">
            <SongDetailInformation
                index={index + 1}
                user={user}
                onKeyChange={onKeyChange}
                item={song}
                isEdit={isEdit}
            />

            {user?.admin && (
                <SongDetailButtons
                    index={index}
                    onReorderSongs={onReorderSongs}
                    onRemoveSong={onRemoveSong}
                    item={song}
                    songListlength={numOfSongs}
                    isEdit={isEdit}
                    setIsEdit={(value: boolean) => setIsEdit(value)}
                />
            )}
        </div>
    );
}

export default SongDetailEntry;
