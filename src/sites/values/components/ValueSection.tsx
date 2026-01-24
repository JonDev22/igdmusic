import type { IValuesContent } from "../../../interfaces/IValuesContent";
import getAssignedImage, {
    type imageType,
} from "../functions/getAssignedImage";
import getColorSettings from "../functions/getColorSettings";

function ValueSection(props: IValuesContent) {
    const colorSettings = getColorSettings(props.colorSettings);

    const imageColors = `${colorSettings.from} ${colorSettings.to}`;
    const imageHoverColors = `${colorSettings.hoverFrom} ${colorSettings.hoverTo}`;

    const ImageComponent: imageType = getAssignedImage(props.image);

    return (
        <section
            id="mission"
            className="group scroll-mt-20 bg-linear-to-br from-blue-900/20 to-purple-900/20 rounded-2xl border border-blue-500/20 p-8 md:p-12 backdrop-blur-sm hover:border-blue-400/40 transition-all hover:shadow-2xl hover:shadow-blue-500/10"
        >
            <div className="flex flex-col items-center gap-6 text-justify">
                <div
                    className={`flex items-center justify-center h-20 w-20 rounded-xl bg-linear-to-br ${imageColors} group-hover:${imageHoverColors} transition-all transform group-hover:scale-110`}
                >
                    <ImageComponent className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-blue-100">
                    {props.title}
                </h1>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-300">
                    {props.subtitle}
                </h2>
                {props.content.map((item, index) => {
                    if (item.type === "paragraph") {
                        return (
                            <p className="space-y-4 text-gray-300 leading-relaxed">
                                {item.text}
                            </p>
                        );
                    }
                    if (item.type === "list") {
                        return (
                            <ul
                                className="list-outside list-disc space-y-4 text-left max-w-3xl mx-auto"
                                key={index}
                            >
                                {item.items.map((listItem, listIndex) => (
                                    <li key={listIndex}>
                                        {listItem.list.map(
                                            (text, textIndex) => (
                                                <div key={textIndex}>
                                                    <p>{text}</p>
                                                    {textIndex !==
                                                        listItem.list.length -
                                                            1 && (
                                                        <div className="py-2" />
                                                    )}
                                                </div>
                                            ),
                                        )}
                                    </li>
                                ))}
                            </ul>
                        );
                    }
                    return null;
                })}
            </div>
        </section>
    );
}

export default ValueSection;
