import { Button, CloseButton, Dialog, DialogPanel } from "@headlessui/react";
import { useActionState, useState } from "react";
import addSong from "../functions/addSong";
import type { ISong } from "../../../interfaces/ISong";
import useAuthContext from "../../../hooks/useAuthContext";
import editSong from "../functions/editSong";
import deleteSong from "../functions/deleteSong";
import { Timestamp } from "firebase/firestore";
import SongFieldSet from "./SongFieldSet";

interface CreateSongDialogProps {
    isOpen: boolean;
    onClose: () => void;
    song?: ISong | null;
}

function CreateSongDialog({ isOpen, onClose, song }: CreateSongDialogProps) {
    const context = useAuthContext();

    const [isEdit, setIsEdit] = useState<boolean>(false);

    const addSongButtonFunction = async (
        _: ISong | null | undefined,
        formData: FormData,
    ) => {
        let returnValue: ISong | null = null;
        // If state song exist, we are editing, and therefore updating an existing song
        const songFromInput: Omit<ISong, "id" | "createdAt"> = {
            title: formData.get("title") as string,
            youTubeLink: formData.get("youTubeLink") as string,
            songSelectLink: formData.get("songSelectLink") as string,
            key: formData.get("key") as string,
            order: formData.get("order") as string,
        };

        if (song) {
            const updatedSong: ISong = {
                ...song,
                ...songFromInput,
            };
            const songResponse = await editSong(updatedSong);
            context.updateSong(songResponse);
            returnValue = songResponse;
        } else {
            // Otherwise, we are adding a new song
            const newSong: Omit<ISong, "id"> = {
                ...songFromInput,
                createdAt: Timestamp.fromDate(new Date()),
            };
            const songResponse = await addSong(newSong);
            context.addSong(songResponse);
        }

        setIsEdit(false);
        onClose();
        return returnValue;
    };

    const [, formAction, isPending] = useActionState(
        addSongButtonFunction,
        song,
    );

    const deleteSongFunction = () => {
        if (song) {
            deleteSong(song.id);
            context.deleteSong(song.id);
            onClose();
        }
    };

    return (
        <Dialog
            open={isOpen}
            onClose={() => {
                setIsEdit(false);
                onClose();
            }}
            className="relative z-50"
        >
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4 backdrop-blur-xs bg-black/50">
                <DialogPanel className="max-w-lg space-y-6 rounded-3xl bg-linear-to-br from-slate-900 to-blue-950 p-8 w-3/4 overflow-auto shadow-2xl border border-blue-800/50">
                    <form className="flex flex-col gap-4" action={formAction}>
                        <SongFieldSet
                            header="Title"
                            name="title"
                            defaultValue={song ? song.title : ""}
                            required
                            isPending={isPending}
                            isEdit={song ? isEdit : true}
                        />

                        <SongFieldSet
                            header="SongSelect Link"
                            name="songSelectLink"
                            defaultValue={song ? song.songSelectLink : ""}
                            required
                            isPending={isPending}
                            isEdit={song ? isEdit : true}
                            isLink
                        />

                        <SongFieldSet
                            header="YouTube Link"
                            name="youTubeLink"
                            defaultValue={song ? song.youTubeLink : ""}
                            required
                            isPending={isPending}
                            isEdit={song ? isEdit : true}
                            isLink
                        />

                        <SongFieldSet
                            header="Order of song"
                            name="order"
                            defaultValue={song ? song.order : ""}
                            isPending={isPending}
                            isEdit={song ? isEdit : true}
                        />

                        <SongFieldSet
                            header="Standard Key"
                            name="key"
                            defaultValue={song ? song.key : ""}
                            isPending={isPending}
                            isEdit={song ? isEdit : true}
                        />

                        <div className="flex gap-3 justify-end flex-col md:flex-row pt-4">
                            {context.user && !song && (
                                <Button
                                    disabled={isPending}
                                    type="submit"
                                    className="px-6 py-2 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                                >
                                    Add Song
                                </Button>
                            )}
                            {context.user && song && isEdit && (
                                <Button
                                    disabled={isPending}
                                    type="submit"
                                    className="px-6 py-2 bg-linear-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                                >
                                    Update Song
                                </Button>
                            )}
                            {context.user && song && (
                                <Button
                                    onClick={() => setIsEdit(!isEdit)}
                                    className="px-6 py-2 bg-linear-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                                >
                                    {isEdit ? "Cancel Edit" : "Edit"}
                                </Button>
                            )}
                            {context.user && song && !isEdit && (
                                <Button
                                    onClick={deleteSongFunction}
                                    className="px-6 py-2 bg-linear-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                                >
                                    Delete
                                </Button>
                            )}
                            {!isEdit && (
                                <CloseButton
                                    disabled={isPending}
                                    className="px-6 py-2 bg-linear-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 disabled:from-gray-700 disabled:to-gray-800 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                                >
                                    Cancel
                                </CloseButton>
                            )}
                        </div>
                    </form>
                </DialogPanel>
            </div>
        </Dialog>
    );
}

export default CreateSongDialog;
