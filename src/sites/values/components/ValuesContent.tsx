import ValueSection from "./ValueSection";
import useAuthContext from "../../../hooks/useAuthContext";

function ValuesContent() {
    const { values } = useAuthContext();

    return (
        <div className="flex flex-col gap-20">
            {values
                .sort((a, b) => a.order - b.order)
                .map((value) => (
                    <ValueSection key={value.id} {...value} />
                ))}
        </div>
    );
}

export default ValuesContent;
