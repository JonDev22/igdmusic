import { Button, CloseButton, Dialog, DialogPanel } from "@headlessui/react";
import type { ISong } from "../../../interfaces/ISong";
import useAuthContext from "../../../hooks/useAuthContext";
import deleteSong from "../functions/deleteSong";
import SongFieldSet from "./SongFieldSet";

interface SongDetailsProps {
    isOpen: boolean;
    onClose: () => void;
    song: ISong;
}

function SongDetails({ isOpen, onClose, song }: SongDetailsProps) {
    const context = useAuthContext();

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
                    <div className="flex flex-col gap-4">
                        <SongFieldSet
                            header="Title"
                            name="title"
                            defaultValue={song.title}
                        />

                        <SongFieldSet
                            header="SongSelect Link"
                            name="songSelectLink"
                            defaultValue={song.songSelectLink}
                            isLink
                        />

                        <SongFieldSet
                            header="YouTube Link"
                            name="youTubeLink"
                            defaultValue={song.youTubeLink}
                            isLink
                        />

                        <SongFieldSet
                            header="Order of songs"
                            name="order"
                            defaultValue={song.order}
                        />

                        <SongFieldSet
                            header="Standar key"
                            name="key"
                            defaultValue={song.key}
                        />

                        <div className="flex gap-2 justify-end">
                            <Button>Edit</Button>
                            <Button onClick={deleteSongFunction}>Delete</Button>
                            <CloseButton>Close</CloseButton>
                        </div>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
}

export default SongDetails;
