import {
    UserGroupIcon,
    PencilIcon,
    TrashIcon,
} from "@heroicons/react/24/outline";
import type { IMusician } from "../../../interfaces/IMusician";

interface MusicianItemProps {
    musician: IMusician;
    isAdmin: boolean;
    onEdit: (musician: IMusician) => void;
    onDelete: (musicianId: string) => void;
}

function MusicianItem({
    musician,
    isAdmin,
    onEdit,
    onDelete,
}: MusicianItemProps) {
    return (
        <div className="rounded-lg py-4 px-4 flex flex-col gap-4 hover:shadow-2xl shadow-lg bg-slate-50">
            <div className="flex gap-4 items-center justify-between">
                <div className="flex gap-4 items-center flex-1">
                    <UserGroupIcon className="w-10 h-10 p-2 bg-linear-to-br from-blue-950 to-blue-600 text-white rounded-xl shrink-0" />
                    <div className="flex-1 min-w-0">
                        <p className="font-bold text-xl text-gray-900">
                            {musician.name}
                        </p>
                        <p className="text-sm text-gray-600">
                            {musician.instrument.join(", ")}
                        </p>
                        {musician.role && (
                            <p className="text-sm text-gray-500 italic">
                                {musician.role}
                            </p>
                        )}
                    </div>
                </div>

                {isAdmin && (
                    <div className="flex gap-2 shrink-0">
                        <div
                            onClick={() => onEdit(musician)}
                            className="p-2 border text-blue-600 hover:bg-blue-100 hover:cursor-pointer rounded-lg transition-colors"
                            title="Edit musician"
                        >
                            <PencilIcon className="w-5 h-5" />
                        </div>
                        <div
                            onClick={() => onDelete(musician.id)}
                            className="p-2 border text-red-600 hover:bg-red-100 hover:cursor-pointer rounded-lg transition-colors"
                            title="Delete musician"
                        >
                            <TrashIcon className="w-5 h-5" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MusicianItem;
