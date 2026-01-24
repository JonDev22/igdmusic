import type { IMusician } from "../../../interfaces/IMusician";
import MusicianItem from "./MusicianItem";

interface MusicianListProps {
    musicians: IMusician[];
    isAdmin: boolean;
    onEdit: (musician: IMusician) => void;
    onDelete: (musicianId: string) => void;
}

function MusicianList({
    musicians,
    isAdmin,
    onEdit,
    onDelete,
}: MusicianListProps) {
    if (musicians.length === 0) {
        return (
            <div className="text-center py-12 text-gray-500">
                <p className="text-lg">No musicians yet</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {musicians.map((musician) => (
                <MusicianItem
                    key={musician.id}
                    musician={musician}
                    isAdmin={isAdmin}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default MusicianList;
