import { useReducer, useState } from "react";
import SongList from "./components/SongList";
import useAuthContext from "../../hooks/useAuthContext";
import { MusicalNoteIcon, PlusIcon } from "@heroicons/react/24/solid";

import type { ISong } from "../../interfaces/ISong";
import CreateSongDialog from "./components/CreateSongDialog";
import type { SongFilterProps } from "./interfaces/SongFilterProps";
import { Input } from "@headlessui/react";

function musicReducer(
    state: {
        isAdd: boolean;
        isEdit: boolean;
        isDetails: boolean;
        song?: ISong | null;
    },
    action: { type: string; song?: ISong | null },
) {
    switch (action.type) {
        case "ADD_SONG":
            return {
                isAdd: true,
                isDetails: false,
                isEdit: false,
                song: null,
            };
        case "SHOW_SONG":
            return {
                isAdd: true,
                isDetails: false,
                isEdit: false,
                song: action.song,
            };
        case "EDIT_SONG":
            return {
                isAdd: false,
                isDetails: false,
                isEdit: true,
                song: action.song,
            };
        case "CLOSE_DIALOG":
            return {
                isAdd: false,
                isDetails: false,
                isEdit: false,
                song: null,
            };
        default:
            return state;
    }
}

function MusicPage() {
    const { songs, user } = useAuthContext();

    const [filters, setFilters] = useState<SongFilterProps>({
        name: "",
        date: "",
    });

    const filterSongs = (songs: ISong[], filter: SongFilterProps): ISong[] => {
        return songs.filter((song) => song.title.includes(filter.name));
    };

    const [musicState, dispatch] = useReducer(musicReducer, {
        isAdd: false,
        isDetails: false,
        isEdit: false,
        song: null,
    });

    const pickSong = (songId: string) => {
        const song = songs.find((s) => s.id === songId) || null;
        dispatch({ type: "SHOW_SONG", song });
    };

    return (
        <div>
            <div className="bg-blue-950 py-12 flex gap-4 items-center mx-auto justify-center">
                <MusicalNoteIcon className="w-12 h-12 bg-blue-800 p-2 rounded-2xl border-blue-50" />
                <h1 className="text-white text-center text-4xl font-bold">
                    Music
                </h1>
            </div>

            <div className="max-w-7xl mx-auto p-4 text-black">
                <div className="flex gap-5 flex-col sm:flex-row">
                    <div className="border flex items-center p-2 gap-2 rounded-2xl">
                        <MusicalNoteIcon className="w-6 h-6" /> {songs.length}{" "}
                        songs
                    </div>

                    <Input
                        className="border px-2 rounded-lg flex-1"
                        placeholder="Search song by title..."
                        onChange={(e) =>
                            setFilters({ ...filters, name: e.target.value })
                        }
                    />

                    {user && (
                        <div
                            className={`flex items-center p-2 gap-2 border rounded-2xl ${
                                user
                                    ? "hover:cursor-pointer bg-blue-900 text-white"
                                    : "bg-gray-400 text-gray-600 cursor-not-allowed opacity-50"
                            }`}
                            onClick={() =>
                                user &&
                                dispatch({ type: "ADD_SONG", song: null })
                            }
                        >
                            <PlusIcon className="w-6 h-6" />
                            <p>Add Song</p>
                        </div>
                    )}
                </div>

                <div className="h-5 border-b-2 border-blue-500" />

                <SongList
                    songs={filterSongs(songs, filters)}
                    pickSong={pickSong}
                />

                <CreateSongDialog
                    isOpen={musicState.isAdd}
                    onClose={() => dispatch({ type: "CLOSE_DIALOG" })}
                    song={musicState.song}
                />
            </div>
        </div>
    );
}

export default MusicPage;
