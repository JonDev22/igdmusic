import {
    MusicalNoteIcon,
    LinkIcon,
    PencilIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import type { ISong } from "../../../interfaces/ISong";

interface SongItemProps {
    song: ISong;
    pickSong: (id: string) => void;
}

function SongItem({ song, pickSong }: SongItemProps) {
    const navigate = useNavigate();

    const createBadge = (text: string, link: string, color: "red" | "blue") => {
        const bgColor = color === "red" ? "bg-red-500" : "bg-blue-300";
        const hoverColor =
            color === "red" ? "hover:bg-red-600" : "hover:bg-blue-400";

        return (
            <div
                className={`rounded-xl ${bgColor} p-2 flex items-center gap-2 text-white hover:cursor-pointer ${hoverColor}`}
                onClick={() => navigate(link)}
            >
                <LinkIcon className="w-4 h-4" />
                <p>{text}</p>
            </div>
        );
    };

    return (
        <div
            key={song.id}
            className="rounded-lg py-4 px-4 flex flex-col gap-4 hover:shadow-2xl shadow-lg"
        >
            <div className="flex gap-4 items-center">
                <MusicalNoteIcon className="w-10 h-10 p-2 bg-linear-90 from-blue-950 to-blue-600 text-white rounded-xl" />
                <p className="font-bold text-xl">{song.title}</p>
                <PencilIcon
                    className="w-6 h-6 text-gray-500 p-1 hover:cursor-pointer"
                    onClick={() => pickSong(song.id)}
                />
            </div>

            <div className="flex gap-2 items-center">
                {createBadge("YouTube", song.youTubeLink, "red")}
                {createBadge("SongSelect", song.songSelectLink, "blue")}
            </div>
        </div>
    );
}

export default SongItem;
