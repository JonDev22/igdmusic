import { Fieldset, Input, Label } from "@headlessui/react";
import { Link } from "react-router-dom";

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

    let displayComp = <Label>{defaultValue}</Label>;

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
    } else if (isLink) {
        displayComp = <Link to={defaultValue ?? ""}>{header}</Link>;
    }

    return (
        <Fieldset>
            <Label className="font-bold text-lg">{compHeader}</Label>
            {displayComp}
        </Fieldset>
    );
}

export default SongFieldSet;
