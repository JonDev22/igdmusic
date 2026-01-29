import { Timestamp } from "firebase/firestore";
import type { ISong } from "../../../interfaces/ISong";
import useAuthContext from "../../../hooks/useAuthContext";
import type { Sunday } from "../../../interfaces/ISundays";
import { Button } from "@headlessui/react";
import deleteSunday from "../function/deleteSunday";
import updateSunday from "../function/updateSunday";
import { useState, useEffect } from "react";
import SundayDetailsSongsList from "./SundayDetailsSongsList";
import SundayDetailsAddSongs from "./SundayDetailsAddSongs";
import SundayDetailsMusicians from "./SundayDetailsMusicians";

interface SundayDetailsProps {
    sundays: Sunday[];
    selectedSunday: string | null;
    clearSundaySelection: () => void;
}

const formatDate = (timestamp: Timestamp) => {
    const date = timestamp.toDate();
    const dateStr = date.toLocaleDateString("de-DE", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    const timeStr = date.toLocaleTimeString("de-DE", {
        hour: "2-digit",
        minute: "2-digit",
    });
    return `${dateStr} um ${timeStr} Uhr`;
};

function SundayDetails({
    sundays,
    selectedSunday,
    clearSundaySelection,
}: SundayDetailsProps) {
    const context = useAuthContext();
    const { user } = useAuthContext();
    const [sunday, setSunday] = useState<Sunday | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [hasChanges, setHasChanges] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [showSongs, setShowSongs] = useState(false);
    const [showMusicians, setShowMusicians] = useState(false);

    // Update sunday state when selectedSunday changes
    useEffect(() => {
        const selected = sundays.find((s) => s.id === selectedSunday);
        if (selected) {
            // Create a deep copy of the selected Sunday to avoid mutating the original
            setSunday({
                ...selected,
                items: selected.items ? [...selected.items] : [],
                musicians: selected.musicians ? [...selected.musicians] : [],
            });
            setHasChanges(false);
        }
    }, [selectedSunday, sundays]);

    // Check if changes have been made
    useEffect(() => {
        if (!sunday) return;

        const originalSunday = sundays.find((s) => s.id === selectedSunday);
        if (!originalSunday) return;

        // Compare items arrays
        const itemsChanged =
            JSON.stringify(sunday.items) !==
            JSON.stringify(originalSunday.items);

        // Compare musicians arrays
        const musiciansChanged =
            JSON.stringify(sunday.musicians || []) !==
            JSON.stringify(originalSunday.musicians || []);

        setHasChanges(itemsChanged || musiciansChanged);
    }, [sunday, sundays, selectedSunday]);

    const handleKeyChange = (itemId: string, newKey: string) => {
        if (!sunday || !sunday.items) return;

        const updatedSunday = {
            ...sunday,
            items: sunday.items.map((item) =>
                item.id === itemId ? { ...item, key: newKey } : item,
            ),
        };
        setSunday(updatedSunday);
    };

    const sortedItems = sunday
        ? [...(sunday.items ? sunday.items : [])].sort(
              (a, b) => a.order - b.order,
          )
        : [];

    const deleteSundayEntry = async (id: string) => {
        await deleteSunday(id);
        context.deleteSunday(id);
        clearSundaySelection();
    };

    const handleAddSong = (song: ISong) => {
        if (!sunday) return;

        const updatedSunday = { ...sunday };
        if (!updatedSunday.items) {
            updatedSunday.items = [];
        }

        const newOrder = updatedSunday.items.length + 1;
        const newItem = {
            id: song.id,
            title: song.title,
            order: newOrder,
            key: song.key || "",
        };

        updatedSunday.items.push(newItem);
        setSunday(updatedSunday);
    };

    const handleRemoveSong = (songId: string) => {
        if (!sunday || !sunday.items) return;

        const updatedSunday = { ...sunday };
        if (!updatedSunday.items) return;

        const itemIndex = updatedSunday.items.findIndex(
            (item) => item.id === songId,
        );
        if (itemIndex > -1) {
            updatedSunday.items.splice(itemIndex, 1);

            // Reorder remaining items
            updatedSunday.items.forEach((item, index) => {
                item.order = index + 1;
            });

            setSunday(updatedSunday);
        }
    };

    const handleReorderSongs = (fromIndex: number, toIndex: number) => {
        if (!sunday || !sunday.items) return;

        const updatedSunday = { ...sunday };
        if (!updatedSunday.items) return;

        const newItems = [...updatedSunday.items];
        const [movedItem] = newItems.splice(fromIndex, 1);
        newItems.splice(toIndex, 0, movedItem);

        // Reassign order numbers
        const reorderedItems = newItems.map((item, index) => ({
            ...item,
            order: index + 1,
        }));

        updatedSunday.items = reorderedItems;
        setSunday(updatedSunday);
    };

    const handleAddMusician = (musicianId: string) => {
        if (!sunday) return;

        const updatedSunday = { ...sunday };
        if (!updatedSunday.musicians) {
            updatedSunday.musicians = [];
        }

        if (!updatedSunday.musicians.includes(musicianId)) {
            updatedSunday.musicians.push(musicianId);
            setSunday(updatedSunday);
        }
    };

    const handleRemoveMusician = (musicianId: string) => {
        if (!sunday || !sunday.musicians) return;

        const updatedSunday = { ...sunday };
        if (!updatedSunday.musicians) return;

        const musicianIndex = updatedSunday.musicians.indexOf(musicianId);
        if (musicianIndex > -1) {
            updatedSunday.musicians.splice(musicianIndex, 1);
            setSunday(updatedSunday);
        }
    };

    const handleUpdate = async () => {
        if (!sunday) return;

        setIsLoading(true);
        try {
            // Clean up empty keys before saving
            const sundayToSave = { ...sunday };
            if (sundayToSave.items) {
                sundayToSave.items = sundayToSave.items.map((item) => ({
                    ...item,
                    key: item.key || "", // Keep empty string for unset keys
                }));
            }

            await updateSunday(sundayToSave);
            context.updateSunday(sundayToSave);
            setHasChanges(false);
        } catch (error) {
            console.error("Error updating sunday:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const getSelectedSong = (
        songs: ISong[],
        songTitle: string,
    ): ISong | null => {
        return songs.find((song) => song.title === songTitle) ?? null;
    };

    // This function is kept for reference but may be used in future enhancements
    void getSelectedSong;

    return (
        <>
            {!selectedSunday || !sunday ? (
                <div className="lg:col-span-2 bg-linear-to-br from-slate-800 to-slate-900 rounded-xl p-12 shadow-lg border border-blue-800/30 text-center">
                    <p className="text-gray-400 text-lg">
                        Wählen Sie einen Sonntag, um die Planung zu bearbeiten
                    </p>
                </div>
            ) : (
                <div className="lg:col-span-2 bg-linear-to-br from-slate-800 to-slate-900 rounded-xl p-6 shadow-lg border border-blue-800/30">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-blue-200 mb-2">
                            {formatDate(sunday.date)}
                        </h2>
                        <p className="text-gray-400">
                            Geplante Lieder: {sortedItems.length}
                        </p>
                    </div>

                    {/* Songs List */}
                    <SundayDetailsSongsList
                        sortedItems={sortedItems}
                        user={user}
                        isOpen={showSongs}
                        onToggle={() => setShowSongs(!showSongs)}
                        onKeyChange={handleKeyChange}
                        onRemoveSong={handleRemoveSong}
                        onReorderSongs={handleReorderSongs}
                    />

                    {user?.admin && (
                        <div className="flex justify-end gap-2 py-4">
                            <Button
                                onClick={handleUpdate}
                                disabled={!hasChanges || isLoading}
                                className={`px-6 py-2 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl ${
                                    hasChanges && !isLoading
                                        ? "bg-linear-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600"
                                        : "bg-linear-to-r from-gray-500 to-gray-600 cursor-not-allowed"
                                }`}
                            >
                                {isLoading ? "Wird aktualisiert..." : "Update"}
                            </Button>

                            <Button
                                onClick={() => deleteSundayEntry(sunday.id)}
                                disabled={isLoading}
                                className="px-6 py-2 bg-linear-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                            >
                                Delete
                            </Button>
                        </div>
                    )}

                    {/* Add Song Section */}
                    {user?.admin && (
                        <SundayDetailsAddSongs
                            songs={context.songs || []}
                            sunday={sunday}
                            searchQuery={searchQuery}
                            isOpen={showSongs}
                            onSearchChange={setSearchQuery}
                            onToggle={() => setShowSongs(!showSongs)}
                            onAddSong={handleAddSong}
                        />
                    )}

                    {/* Musicians Sections */}
                    <SundayDetailsMusicians
                        sunday={sunday}
                        musicians={context.musicians || []}
                        user={user}
                        isOpen={showMusicians}
                        onToggle={() => setShowMusicians(!showMusicians)}
                        onAddMusician={handleAddMusician}
                        onRemoveMusician={handleRemoveMusician}
                    />
                </div>
            )}
        </>
    );
}

export default SundayDetails;
