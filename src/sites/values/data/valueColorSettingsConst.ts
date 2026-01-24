export type ValueColorSetting = {
    id: string;
    from: string;
    to: string;
    hoverFrom: string;
    hoverTo: string;
};

export const valueColorSettingsConst: Record<string, ValueColorSetting> = {
    blue: {
        id: "blue",
        from: "from-blue-500",
        to: "to-blue-600",
        hoverFrom: "from-blue-400",
        hoverTo: "to-blue-500",
    },
    green: {
        id: "green",
        from: "from-green-500",
        to: "to-green-600",
        hoverFrom: "from-green-400",
        hoverTo: "to-green-500",
    },
    purple: {
        id: "purple",
        from: "from-purple-500",
        to: "to-purple-600",
        hoverFrom: "from-purple-400",
        hoverTo: "to-purple-500",
    },
    amber: {
        id: "amber",
        from: "from-amber-500",
        to: "to-amber-600",
        hoverFrom: "from-amber-400",
        hoverTo: "to-amber-500",
    },
    rose: {
        id: "rose",
        from: "from-rose-500",
        to: "to-rose-600",
        hoverFrom: "from-rose-400",
        hoverTo: "to-rose-500",
    },
    cyan: {
        id: "cyan",
        from: "from-cyan-500",
        to: "to-cyan-600",
        hoverFrom: "from-cyan-400",
        hoverTo: "to-cyan-500",
    },
    emerald: {
        id: "emerald",
        from: "from-emerald-500",
        to: "to-emerald-600",
        hoverFrom: "from-emerald-400",
        hoverTo: "to-emerald-500",
    },
    fuchsia: {
        id: "fuchsia",
        from: "from-fuchsia-500",
        to: "to-fuchsia-600",
        hoverFrom: "from-fuchsia-400",
        hoverTo: "to-fuchsia-500",
    },
} as const;
