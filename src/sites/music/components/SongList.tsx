import SongItem from "./SongItem";
import type { ISong } from "../../../interfaces/ISong";

interface SongListProps {
    songs: ISong[];
    pickSong: (id: string) => void;
}

function SongList({ songs, pickSong }: SongListProps) {
    return (
        <div className="py-12 flex flex-col gap-4">
            {songs.map((item) => (
                <SongItem key={item.id} song={item} pickSong={pickSong} />
            ))}
        </div>
    );
}

export default SongList;
