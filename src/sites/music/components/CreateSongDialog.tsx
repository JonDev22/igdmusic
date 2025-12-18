import {
    Button,
    CloseButton,
    Dialog,
    DialogPanel,
    Fieldset,
    Input,
    Label,
} from "@headlessui/react";
import { useActionState, useState } from "react";
import addSong from "../functions/addSong";
import type { ISong } from "../../../interfaces/ISong";
import useAuthContext from "../../../hooks/useAuthContext";
import editSong from "../functions/editSong";
import deleteSong from "../functions/deleteSong";

interface CreateSongDialogProps {
    isOpen: boolean;
    onClose: () => void;
    song: ISong | null;
}

const createFieldset = (
    header: string,
    name: string,
    isPending: boolean,
    required: boolean,
    isEdit: boolean,
    defaultValue?: string,
) => {
    const compHeader = required ? `${header}*` : header;

    return (
        <Fieldset>
            <Label>{compHeader}</Label>
            {!isEdit ? (
                <Label>{defaultValue}</Label>
            ) : (
                <Input
                    className="border rounded-2xl w-full px-3 py-1"
                    disabled={isPending}
                    name={name}
                    required
                    defaultValue={defaultValue}
                />
            )}
        </Fieldset>
    );
};

function CreateSongDialog({ isOpen, onClose, song }: CreateSongDialogProps) {
    const context = useAuthContext();

    const [isEdit, setIsEdit] = useState<boolean>(false);

    const addSongButtonFunction = async (
        stateSong: ISong | null,
        formData: FormData,
    ) => {
        // If state song exist, we are editing, and therefore updating an existing song
        if (stateSong) {
            const updatedSong: ISong = {
                id: stateSong.id,
                title: formData.get("title") as string,
                youTubeLink: formData.get("youTubeLink") as string,
                songSelectLink: formData.get("songSelectLink") as string,
            };
            const songResponse = await editSong(updatedSong);
            context.updateSong(songResponse);
            onClose();
            return songResponse;
        }

        // Otherwise, we are adding a new song
        const newSong: Omit<ISong, "id"> = {
            title: formData.get("title") as string,
            youTubeLink: formData.get("youTubeLink") as string,
            songSelectLink: formData.get("songSelectLink") as string,
        };
        const songResponse = await addSong(newSong);
        context.addSong(songResponse);
        onClose();
        return null;
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
        <Dialog open={isOpen} onClose={onClose} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4 backdrop-blur-xs">
                <DialogPanel className="max-w-lg space-y-4 border rounded-2xl bg-blue-950/20 p-12 min-w-2xl">
                    <form className="flex flex-col gap-4" action={formAction}>
                        {createFieldset(
                            "Title",
                            "title",
                            isPending,
                            true,
                            song ? isEdit : true,
                            song ? song.title : "",
                        )}

                        {createFieldset(
                            "SongSelect Link",
                            "songSelectLink",
                            isPending,
                            true,
                            song ? isEdit : true,
                            song ? song.songSelectLink : "",
                        )}

                        {createFieldset(
                            "YouTube Link",
                            "youTubeLink",
                            isPending,
                            true,
                            song ? isEdit : true,
                            song ? song.youTubeLink : "",
                        )}

                        {createFieldset(
                            "Order of song",
                            "order",
                            isPending,
                            false,
                            song ? isEdit : true,
                            song ? song.order : "",
                        )}

                        {createFieldset(
                            "Standard Key",
                            "key",
                            isPending,
                            false,
                            song ? isEdit : true,
                            song ? song.key : "",
                        )}

                        <div className="flex gap-2 justify-end">
                            {!song && (
                                <Button disabled={isPending} type="submit">
                                    Add Song
                                </Button>
                            )}
                            {song && isEdit && (
                                <Button disabled={isPending} type="submit">
                                    Update Song
                                </Button>
                            )}
                            {song && (
                                <Button onClick={() => setIsEdit(!isEdit)}>
                                    {isEdit ? "Cancel Edit" : "Edit"}
                                </Button>
                            )}
                            {song && !isEdit && (
                                <Button onClick={deleteSongFunction}>
                                    Delete
                                </Button>
                            )}
                            {!isEdit && (
                                <CloseButton disabled={isPending}>
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
