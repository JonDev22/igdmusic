import SongItem from "./SongItem";
import type { ISong } from "../../../interfaces/ISong";

interface SongListProps {
    songs: ISong[];
    pickSong: (id: string) => void;
}

function SongList({ songs, pickSong }: SongListProps) {
    const sortedSongs = [...songs].sort((a, b) => a.title.localeCompare(b.title));

    return (
        <div className="py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sortedSongs.map((item) => (
                <SongItem key={item.id} song={item} pickSong={pickSong} />
            ))}
        </div>
    );
}

export default SongList;
