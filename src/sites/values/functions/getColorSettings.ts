import {
    valueColorSettingsConst,
    type ValueColorSetting,
} from "../data/valueColorSettingsConst";

function getColorSettings(valueId: string): ValueColorSetting {
    switch (valueId) {
        case "blue":
            return valueColorSettingsConst.blue;
        case "green":
            return valueColorSettingsConst.green;
        case "purple":
            return valueColorSettingsConst.purple;
        case "amber":
            return valueColorSettingsConst.amber;
        case "rose":
            return valueColorSettingsConst.rose;
        case "cyan":
            return valueColorSettingsConst.cyan;
        case "emerald":
            return valueColorSettingsConst.emerald;
        case "fuchsia":
            return valueColorSettingsConst.fuchsia;
        default:
            return valueColorSettingsConst.blue;
    }
}

export default getColorSettings;
