import { useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import MusicianList from "./components/MusicianList";
import CreateEditMusician from "./components/CreateEditMusician";
import { UserGroupIcon, PlusIcon } from "@heroicons/react/24/solid";
import type { IMusician } from "../../interfaces/IMusician";

function Team() {
    const { musicians, user } = useAuthContext();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedMusician, setSelectedMusician] = useState<IMusician | null>(
        null,
    );

    const isAdmin = user?.admin ?? false;

    const handleAddMusician = () => {
        setSelectedMusician(null);
        setIsDialogOpen(true);
    };

    const handleEditMusician = (musician: IMusician) => {
        setSelectedMusician(musician);
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
        setSelectedMusician(null);
    };

    const handleDeleteMusician = async (musicianId: string) => {
        if (
            window.confirm(
                "Are you sure you want to delete this musician?",
            )
        ) {
            // The delete is handled in the dialog component
            // But we need to close the dialog here if the musician matches
            if (selectedMusician?.id === musicianId) {
                handleCloseDialog();
            }
        }
    };

    return (
        <div>
            {/* Header */}
            <div className="bg-blue-950 py-12 flex gap-4 items-center mx-auto justify-center">
                <UserGroupIcon className="w-12 h-12 bg-blue-800 p-2 rounded-2xl border-blue-50" />
                <h1 className="text-white text-center text-4xl font-bold">
                    Team
                </h1>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto p-4 text-black">
                {/* Top Section with Count and Add Button */}
                <div className="flex gap-5 flex-col sm:flex-row items-center justify-between mb-6">
                    <div className="border flex items-center p-2 gap-2 rounded-2xl">
                        <UserGroupIcon className="w-6 h-6" />{" "}
                        <span>
                            {musicians.length}{" "}
                            {musicians.length === 1 ? "musician" : "musicians"}
                        </span>
                    </div>

                    {isAdmin && user && (
                        <div
                            className="flex items-center p-2 gap-2 border rounded-2xl hover:cursor-pointer bg-blue-900 text-white transition-all duration-200 hover:bg-blue-800 shadow-md"
                            onClick={handleAddMusician}
                        >
                            <PlusIcon className="w-6 h-6" />
                            <p>Add Musician</p>
                        </div>
                    )}
                </div>

                {/* Divider */}
                <div className="h-5 border-b-2 border-blue-500 mb-6" />

                {/* Musicians List */}
                <MusicianList
                    musicians={musicians}
                    isAdmin={isAdmin}
                    onEdit={handleEditMusician}
                    onDelete={handleDeleteMusician}
                />

                {/* Dialog */}
                <CreateEditMusician
                    isOpen={isDialogOpen}
                    onClose={handleCloseDialog}
                    musician={selectedMusician}
                />
            </div>
        </div>
    );
}

export default Team;
