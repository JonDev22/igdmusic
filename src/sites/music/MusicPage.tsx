import { useReducer } from "react";
import SongList from "./components/SongList";
import useAuthContext from "../../hooks/useAuthContext";
import { MusicalNoteIcon, PlusIcon } from "@heroicons/react/24/solid";

import type { ISong } from "../../interfaces/ISong";
import CreateSongDialog from "./components/CreateSongDialog";
import SongDetails from "./components/SongDetails";

function musicReducer(
    state: {
        isAdd: boolean;
        isEdit: boolean;
        isDetails: boolean;
        song: ISong | null;
    },
    action: { type: string; song: ISong | null },
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
                isAdd: false,
                isDetails: true,
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
    const { songs } = useAuthContext();

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
        <div className="max-w-7xl mx-auto p-4">
            <div className="flex gap-5">
                <div className="border flex items-center p-2 gap-2 rounded-2xl">
                    <MusicalNoteIcon className="w-6 h-6" /> {songs.length} songs
                </div>
                <div
                    className="flex items-center p-2 gap-2 border bg-transparent rounded-2xl hover:cursor-pointer hover:bg-blue-900"
                    onClick={() => dispatch({ type: "ADD_SONG", song: null })}
                >
                    <PlusIcon className="w-6 h-6" />
                    <p>Add Song</p>
                </div>
            </div>
            <SongList songs={songs} pickSong={pickSong} />
            <CreateSongDialog
                isOpen={musicState.isAdd}
                onClose={() => dispatch({ type: "CLOSE_DIALOG", song: null })}
                song={musicState.song}
            />
            <SongDetails
                isOpen={musicState.isDetails}
                onClose={() => dispatch({ type: "CLOSE_DIALOG", song: null })}
                song={musicState.song ?? ({} as ISong)}
            />
        </div>
    );
}

export default MusicPage;
