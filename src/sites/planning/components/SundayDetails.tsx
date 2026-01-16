import { Timestamp } from "firebase/firestore";
import type { ISong } from "../../../interfaces/ISong";
import useAuthContext from "../../../hooks/useAuthContext";
import type { Sunday } from "../../../interfaces/ISundays";
import { Button } from "@headlessui/react";
import deleteSunday from "../function/deleteSunday";
import updateSunday from "../function/updateSunday";
import { useState, useEffect } from "react";
import { availableKeys } from "../../../lib/availableKeys";

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

    // Update sunday state when selectedSunday changes
    useEffect(() => {
        const selected = sundays.find((s) => s.id === selectedSunday);
        if (selected) {
            // Create a deep copy of the selected Sunday to avoid mutating the original
            setSunday({
                ...selected,
                items: selected.items ? [...selected.items] : [],
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

        setHasChanges(itemsChanged);
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

    const createDefaultOption = (song: ISong | null) => {
        if (song && song.key) {
            return <option value={song.key || ""}>Default {song.key}</option>;
        }
        return null;
    };

    const getLastPlayed = (song: ISong): string => {
        // Placeholder implementation
        const selectedSunday = sundays.find((s) =>
            s.items?.some((item) => item.id === song.id),
        );
        return (
            selectedSunday?.date.toDate().toLocaleDateString("de-DE") || "N/A"
        );
    };

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
                    <div className="space-y-2 mb-6">
                        {sortedItems.length === 0 ? (
                            <p className="text-gray-400 text-center py-8">
                                Noch keine Lieder hinzugefügt
                            </p>
                        ) : (
                            sortedItems.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="bg-slate-700 rounded-lg p-4 flex flex-col md:flex-row lg:items-center lg:justify-between hover:bg-slate-650 transition-all"
                                >
                                    <div className="flex items-center gap-4 flex-1">
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold text-blue-300 min-w-8">
                                                {item.order}.
                                            </span>
                                            <div className="flex flex-col flex-1">
                                                <span className="text-gray-100">
                                                    {item.title}
                                                </span>
                                                <div className="flex items-center gap-2 mt-2">
                                                    <span className="text-sm text-gray-400">
                                                        Tonart:
                                                    </span>
                                                    {user && (
                                                        <select
                                                            value={
                                                                item.key || ""
                                                            }
                                                            onChange={(e) =>
                                                                handleKeyChange(
                                                                    item.id,
                                                                    e.target
                                                                        .value,
                                                                )
                                                            }
                                                            className="px-3 py-1 bg-slate-600 text-gray-100 border border-slate-500 rounded hover:bg-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                                        >
                                                            {createDefaultOption(
                                                                getSelectedSong(
                                                                    context.songs ||
                                                                        [],
                                                                    item.title,
                                                                ),
                                                            )}
                                                            {availableKeys.map(
                                                                (key) => (
                                                                    <option
                                                                        key={
                                                                            key
                                                                        }
                                                                        value={
                                                                            key
                                                                        }
                                                                    >
                                                                        {key}
                                                                    </option>
                                                                ),
                                                            )}
                                                        </select>
                                                    )}
                                                    {!user && (
                                                        <span className="text-sm text-gray-300">
                                                            {item.key ||
                                                                "Keine Tonart"}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {user && (
                                        <div className="flex gap-1 mt-3 md:mt-0">
                                            {index > 0 && (
                                                <button
                                                    onClick={() =>
                                                        handleReorderSongs(
                                                            index,
                                                            index - 1,
                                                        )
                                                    }
                                                    className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded transition-all"
                                                    title="Nach oben"
                                                >
                                                    ↑
                                                </button>
                                            )}
                                            {index < sortedItems.length - 1 && (
                                                <button
                                                    onClick={() =>
                                                        handleReorderSongs(
                                                            index,
                                                            index + 1,
                                                        )
                                                    }
                                                    className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded transition-all"
                                                    title="Nach unten"
                                                >
                                                    ↓
                                                </button>
                                            )}
                                            <button
                                                onClick={() =>
                                                    handleRemoveSong(item.id)
                                                }
                                                className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded transition-all"
                                                title="Entfernen"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ))
                        )}
                    </div>

                    {user && (
                        <div className="flex justify-end gap-2 pb-4">
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
                    {user && (
                        <div className="border-t border-blue-800/30 pt-6">
                            <h3 className="text-lg font-bold text-blue-200 mb-4">
                                Lied hinzufügen
                            </h3>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Nach Lied suchen..."
                                    value={searchQuery}
                                    onChange={(e) =>
                                        setSearchQuery(e.target.value)
                                    }
                                    className="w-full px-4 py-2 bg-slate-600 text-gray-100 placeholder-gray-400 rounded-lg border border-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                />
                            </div>
                            <div className="bg-slate-700 rounded-lg p-4 max-h-64 overflow-y-auto">
                                {context.songs && context.songs.length > 0 ? (
                                    (() => {
                                        const filteredSongs = context.songs
                                            .filter((song) =>
                                                song.title
                                                    .toLowerCase()
                                                    .includes(
                                                        searchQuery.toLowerCase(),
                                                    ),
                                            )
                                            .sort((a, b) =>
                                                a.title.localeCompare(b.title),
                                            );
                                        return filteredSongs.length > 0 ? (
                                            <div className="space-y-2">
                                                {filteredSongs.map((song) => {
                                                    const alreadyAdded =
                                                        sunday.items?.some(
                                                            (item) =>
                                                                item.id ===
                                                                song.id,
                                                        );
                                                    return (
                                                        <button
                                                            key={song.id}
                                                            onClick={() =>
                                                                !alreadyAdded &&
                                                                handleAddSong(
                                                                    song,
                                                                )
                                                            }
                                                            disabled={
                                                                alreadyAdded
                                                            }
                                                            className={`w-full text-left p-3 rounded transition-all ${
                                                                alreadyAdded
                                                                    ? "bg-gray-600 text-gray-400 cursor-not-allowed opacity-50"
                                                                    : "bg-slate-600 hover:bg-blue-600 text-gray-100 hover:text-white"
                                                            }`}
                                                        >
                                                            <div className="font-semibold">
                                                                {song.title}
                                                            </div>
                                                            <div className="flex justify-between items-center">
                                                                <div className="text-xs opacity-75">
                                                                    {song.key ||
                                                                        "Keine Tonart"}
                                                                </div>
                                                                <div className="text-xs opacity-75">
                                                                    Zuletzt
                                                                    gespielt:
                                                                    {getLastPlayed(
                                                                        song,
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        ) : (
                                            <p className="text-gray-400 text-center py-8">
                                                Keine Lieder gefunden
                                            </p>
                                        );
                                    })()
                                ) : (
                                    <p className="text-gray-400 text-center py-8">
                                        Keine Lieder verfügbar
                                    </p>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    );
}

export default SundayDetails;
