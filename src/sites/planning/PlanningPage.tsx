import { useState } from "react";
import type { ISong } from "../../interfaces/ISong";
import useAuthContext from "../../hooks/useAuthContext";
import type { Sunday } from "../../interfaces/ISundays";
import SundaysList from "./components/SundaysList";
import SundayDetails from "./components/SundayDetails";

function PlanningPage() {
    const context = useAuthContext();
    const [sundays, setSundays] = useState<Sunday[]>(context.sundays);

    const [selectedSunday, setSelectedSunday] = useState<string | null>(null);

    const addSongToSunday = (sundayId: string, song: ISong) => {
        setSundays((prev) =>
            prev.map((sunday) => {
                if (sunday.id === sundayId) {
                    const maxOrder =
                        sunday.items.length > 0
                            ? Math.max(
                                  ...sunday.items.map((item) => item.order),
                              )
                            : 0;
                    return {
                        ...sunday,
                        items: [
                            ...sunday.items,
                            { ...song, order: maxOrder + 1 },
                        ],
                    };
                }
                return sunday;
            }),
        );
    };

    const removeSongFromSunday = (sundayId: string, songId: string) => {
        setSundays((prev) =>
            prev.map((sunday) => {
                if (sunday.id === sundayId) {
                    return {
                        ...sunday,
                        items: sunday.items.filter(
                            (item) => item.id !== songId,
                        ),
                    };
                }
                return sunday;
            }),
        );
    };

    const reorderSongs = (
        sundayId: string,
        fromIndex: number,
        toIndex: number,
    ) => {
        setSundays((prev) =>
            prev.map((sunday) => {
                if (sunday.id === sundayId) {
                    const newItems = [...sunday.items];
                    const [movedItem] = newItems.splice(fromIndex, 1);
                    newItems.splice(toIndex, 0, movedItem);

                    // Reassign order numbers
                    const reorderedItems = newItems.map((item, index) => ({
                        ...item,
                        order: index + 1,
                    }));

                    return {
                        ...sunday,
                        items: reorderedItems,
                    };
                }
                return sunday;
            }),
        );
    };

    return (
        <div>
            <div className="bg-blue-950 py-12 flex gap-4 items-center mx-auto justify-center">
                <h1 className="text-white text-center text-4xl font-bold">
                    Planung
                </h1>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <SundaysList
                        sundays={sundays}
                        selectedSunday={selectedSunday}
                        onSelectSunday={setSelectedSunday}
                    />

                    <SundayDetails
                        sundays={sundays}
                        selectedSunday={selectedSunday}
                        onAddSong={addSongToSunday}
                        onRemoveSong={removeSongFromSunday}
                        onReorderSongs={reorderSongs}
                    />
                </div>
            </div>
        </div>
    );
}

export default PlanningPage;
