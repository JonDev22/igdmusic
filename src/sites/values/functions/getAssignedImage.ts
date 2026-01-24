import {
    EyeIcon,
    LightBulbIcon,
    ArrowTrendingUpIcon,
    GiftIcon,
    NumberedListIcon,
    UserGroupIcon,
    RectangleGroupIcon,
} from "@heroicons/react/24/outline";
import type { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

export type imageType = ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, "ref"> & {
        title?: string | undefined;
        titleId?: string | undefined;
    } & RefAttributes<SVGSVGElement>
>;

function getAssignedImage(id: string): imageType {
    switch (id) {
        case "mission":
            return ArrowTrendingUpIcon;
        case "vision":
            return EyeIcon;
        case "philosophy":
            return LightBulbIcon;
        case "values":
            return GiftIcon;
        case "requirements":
            return NumberedListIcon;
        case "discipleship":
            return UserGroupIcon;
        case "responsibility":
            return RectangleGroupIcon;
        default:
            return ArrowTrendingUpIcon;
    }
}

export default getAssignedImage;
