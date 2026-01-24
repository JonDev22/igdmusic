import { Button, CloseButton, Dialog, DialogPanel } from "@headlessui/react";
import { useActionState, useState } from "react";
import addMusician from "../functions/addMusician";
import editMusician from "../functions/editMusician";
import deleteMusician from "../functions/deleteMusician";
import type { IMusician } from "../../../interfaces/IMusician";
import useAuthContext from "../../../hooks/useAuthContext";
import { Input } from "@headlessui/react";

interface CreateEditMusicianProps {
    isOpen: boolean;
    onClose: () => void;
    musician?: IMusician | null;
}

function CreateEditMusician({
    isOpen,
    onClose,
    musician,
}: CreateEditMusicianProps) {
    const context = useAuthContext();
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [instruments, setInstruments] = useState<string>(
        musician?.instrument?.join(", ") || "",
    );

    const handleMusicianAction = async (
        _: IMusician | null | undefined,
        formData: FormData,
    ) => {
        const instrumentsArray = (formData.get("instrument") as string)
            .split(",")
            .map((i) => i.trim())
            .filter((i) => i);

        const musicianData = {
            name: formData.get("name") as string,
            instrument: instrumentsArray,
            role: (formData.get("role") as string) || undefined,
        };

        if (musician) {
            // Edit existing musician
            const updatedMusician = { id: musician.id, ...musicianData };
            const response = await editMusician(updatedMusician as IMusician);
            context.updateMusician(response);
        } else {
            // Add new musician
            const newMusician = await addMusician(
                musicianData as Omit<IMusician, "id">,
            );
            context.addMusician(newMusician);
        }

        setIsEdit(false);
        onClose();
        return musician || null;
    };

    const [, formAction, isPending] = useActionState(
        handleMusicianAction,
        musician,
    );

    const handleDelete = async () => {
        if (musician) {
            await deleteMusician(musician.id);
            context.removeMusician(musician.id);
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
                    <h2 className="text-white text-2xl font-bold">
                        {musician && !isEdit
                            ? "Musician Details"
                            : musician
                              ? "Edit Musician"
                              : "Add New Musician"}
                    </h2>

                    <form className="flex flex-col gap-4" action={formAction}>
                        {/* Name Field */}
                        <div className="flex flex-col gap-2">
                            <label className="text-white font-semibold">
                                Name
                            </label>
                            <Input
                                name="name"
                                type="text"
                                defaultValue={musician?.name || ""}
                                disabled={!!(musician && !isEdit)}
                                readOnly={!!(musician && !isEdit)}
                                className="px-4 py-2 rounded-lg border border-blue-600 bg-blue-50 text-gray-900 disabled:bg-gray-200 disabled:text-gray-600"
                                required
                            />
                        </div>

                        {/* Instruments Field */}
                        <div className="flex flex-col gap-2">
                            <label className="text-white font-semibold">
                                Instruments (comma-separated)
                            </label>
                            <Input
                                name="instrument"
                                type="text"
                                value={instruments}
                                onChange={(e) => setInstruments(e.target.value)}
                                disabled={!!(musician && !isEdit)}
                                readOnly={!!(musician && !isEdit)}
                                className="px-4 py-2 rounded-lg border border-blue-600 bg-blue-50 text-gray-900 disabled:bg-gray-200 disabled:text-gray-600"
                                placeholder="e.g., Guitar, Vocals, Drums"
                                required
                            />
                        </div>

                        {/* Role Field */}
                        <div className="flex flex-col gap-2">
                            <label className="text-white font-semibold">
                                Role (optional)
                            </label>
                            <Input
                                name="role"
                                type="text"
                                defaultValue={musician?.role || ""}
                                disabled={!!(musician && !isEdit)}
                                readOnly={!!(musician && !isEdit)}
                                className="px-4 py-2 rounded-lg border border-blue-600 bg-blue-50 text-gray-900 disabled:bg-gray-200 disabled:text-gray-600"
                                placeholder="e.g., Lead Singer, Drummer"
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-3 justify-end flex-col md:flex-row pt-4">
                            {!musician && (
                                <Button
                                    disabled={isPending}
                                    type="submit"
                                    className="px-6 py-2 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                                >
                                    Add Musician
                                </Button>
                            )}
                            {musician && isEdit && (
                                <Button
                                    disabled={isPending}
                                    type="submit"
                                    className="px-6 py-2 bg-linear-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                                >
                                    Update Musician
                                </Button>
                            )}
                            {musician && (
                                <Button
                                    onClick={() => setIsEdit(!isEdit)}
                                    className="px-6 py-2 bg-linear-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                                >
                                    {isEdit ? "Cancel Edit" : "Edit"}
                                </Button>
                            )}
                            {musician && !isEdit && (
                                <Button
                                    onClick={handleDelete}
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

export default CreateEditMusician;
