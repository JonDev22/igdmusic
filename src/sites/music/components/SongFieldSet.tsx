import { Fieldset, Input, Label } from "@headlessui/react";

interface SongFieldSetProps {
    header: string;
    name: string;
    required?: boolean;
    defaultValue?: string;
    isPending?: boolean;
    isEdit?: boolean;
    isLink?: boolean;
}

function SongFieldSet({
    header,
    required,
    isEdit,
    defaultValue,
    isPending,
    name,
    isLink,
}: SongFieldSetProps) {
    const compHeader = required && isEdit ? `${header}*` : header;

    let displayComp = (
        <Label
            className={
                isLink
                    ? "hover:text-blue-400 hover:underline hover:cursor-pointer"
                    : ""
            }
            onClick={() =>
                isLink ? window.open(defaultValue, "_blank") : null
            }
        >
            {defaultValue}
        </Label>
    );

    if (isEdit) {
        displayComp = (
            <Input
                className="border rounded-2xl w-full px-3 py-1"
                disabled={isPending}
                name={name}
                required={required ?? false}
                defaultValue={defaultValue}
            />
        );
    }

    return (
        <Fieldset>
            <Label className="font-bold text-lg">{compHeader}</Label>
            {displayComp}
        </Fieldset>
    );
}

export default SongFieldSet;
