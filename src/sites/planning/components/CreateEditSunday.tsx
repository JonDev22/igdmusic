import {
    Button,
    CloseButton,
    Dialog,
    DialogPanel,
    Fieldset,
    Input,
    Label,
} from "@headlessui/react";
import type { Sunday } from "../../../interfaces/ISundays";
import addSunday from "../function/addSunday";
import { useActionState } from "react";
import { Timestamp } from "firebase/firestore";
import useAuthContext from "../../../hooks/useAuthContext";

interface CreateEditSundayProps {
    isOpen: boolean;
    onClose: () => void;
    sunday?: Sunday | null;
}

function CreateEditSunday({ isOpen, onClose, sunday }: CreateEditSundayProps) {
    const context = useAuthContext();
    const { user } = useAuthContext();

    const addSundayButtonFunction = async (
        _: Sunday | null | undefined,
        formData: FormData,
    ) => {
        let returnValue: Sunday | null = null;
        const date = formData.get("date") as string;
        const time = formData.get("time") as string;

        // Combine date and time into a single datetime string
        const dateTimeString = `${date}T${time}:00`;

        // If state sunday exist, we are editing, and therefore updating an existing sunday
        const sundayFromInput: Omit<Sunday, "id" | "items"> = {
            date: Timestamp.fromDate(new Date(dateTimeString)),
        };

        // Otherwise, we are adding a new song
        const songResponse = await addSunday(sundayFromInput);
        context.addSunday(songResponse);

        // setIsEdit(false);
        onClose();
        return returnValue;
    };

    const [, formAction, isPending] = useActionState(
        addSundayButtonFunction,
        sunday,
    );

    return (
        <Dialog
            open={isOpen}
            onClose={() => {
                // setIsEdit(false);
                onClose();
            }}
            className="relative z-50"
        >
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4 backdrop-blur-xs bg-black/50">
                <DialogPanel className="max-w-lg space-y-6 rounded-3xl bg-linear-to-br from-slate-900 to-blue-950 p-8 w-3/4 overflow-auto shadow-2xl border border-blue-800/50">
                    <form className="flex flex-col gap-4" action={formAction}>
                        <Fieldset>
                            <Label className="block text-sm font-medium text-gray-200 mb-2">
                                Datum des Sonntags
                            </Label>
                            <Input
                                type="date"
                                className="px-4 py-2 border rounded-2xl"
                                name="date"
                            />
                        </Fieldset>

                        <Fieldset>
                            <Label className="block text-sm font-medium text-gray-200 mb-2">
                                Uhrzeit
                            </Label>
                            <Input
                                type="time"
                                className="px-4 py-2 border rounded-2xl"
                                name="time"
                                defaultValue="10:00"
                            />
                        </Fieldset>

                        <div className="flex gap-3 justify-end flex-col md:flex-row pt-4">
                            {user && (
                                <Button
                                    disabled={isPending}
                                    type="submit"
                                    className="px-6 py-2 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                                >
                                    {sunday ? "Update" : "Erstellen"}
                                </Button>
                            )}
                            <CloseButton className="px-6 py-2 bg-linear-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                                Close
                            </CloseButton>
                        </div>
                    </form>
                </DialogPanel>
            </div>
        </Dialog>
    );
}

export default CreateEditSunday;
