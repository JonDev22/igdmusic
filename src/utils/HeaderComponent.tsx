import { type ReactNode } from "react";

// Images imports
import teamImage from "../assets/team.jpeg";
import musicImage from "../assets/music.jpeg";
import planningImage from "../assets/planning.jpeg";

// Icons imports
import {
    UserGroupIcon,
    DocumentCheckIcon,
    MusicalNoteIcon,
} from "@heroicons/react/24/solid";

// Types
type imageSourceType = "music" | "planning" | "team";

// Common properties
const ICON_COMMON_CLASS =
    "w-16 h-16 bg-blue-800 p-3 rounded-2xl border border-blue-50 text-white shadow-xl";

// Records
const imageSourceRecord: Record<
    imageSourceType,
    { imageSource: string; iconSource: ReactNode }
> = {
    music: {
        imageSource: musicImage,
        iconSource: <MusicalNoteIcon className={ICON_COMMON_CLASS} />,
    },
    planning: {
        imageSource: planningImage,
        iconSource: <DocumentCheckIcon className={ICON_COMMON_CLASS} />,
    },
    team: {
        imageSource: teamImage,
        iconSource: <UserGroupIcon className={ICON_COMMON_CLASS} />,
    },
};

interface HeaderComponentProps {
    image: imageSourceType;
    header: string;
}

function HeaderComponent({ image, header }: HeaderComponentProps) {
    const imageSourceData = imageSourceRecord[image];

    return (
        <div
            className="relative py-40 flex gap-4 items-center justify-center overflow-hidden bg-cover bg-center"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${imageSourceData.imageSource})`,
            }}
        >
            <div className="relative z-10 flex flex-col items-center gap-4">
                {imageSourceData.iconSource}
                <h1 className="text-white text-center text-5xl font-bold tracking-tight">
                    {header}
                </h1>
            </div>
        </div>
    );
}

export default HeaderComponent;
