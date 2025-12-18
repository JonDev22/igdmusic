import { MusicalNoteIcon } from "@heroicons/react/24/outline";
import type { ISong } from "../../../interfaces/ISong";

interface SongItemProps {
    song: ISong;
    pickSong: (id: string) => void;
}

function SongItem({ song, pickSong }: SongItemProps) {
    return (
        <div
            key={song.id}
            className="border rounded-2xl py-2 px-4 flex justify-between gap-4 hover:cursor-pointer hover:bg-blue-900"
            onClick={() => pickSong(song.id)}
        >
            <div className="flex gap-4">
                <MusicalNoteIcon className="w-6 h-6" />
                <p className="font-bold">{song.title}</p>
            </div>
        </div>
    );
}

export default SongItem;
