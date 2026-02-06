import { LinkIcon } from "@heroicons/react/24/outline";
import type { IUser } from "../../../../interfaces/IUser";
import { availableKeys } from "../../../../lib/availableKeys";
import type { ISong } from "../../../../interfaces/ISong";

interface SongDetailsInformationProps {
    index: number;
    user: IUser | null;
    onKeyChange: (itemId: string, newKey: string) => void;
    item: ISong;
    isEdit: boolean;
}

function SongDetailInformation({
    index,
    user,
    onKeyChange,
    item,
    isEdit,
}: SongDetailsInformationProps) {
    return (
        <div className="flex items-center gap-4 flex-1">
            <div className="flex items-center gap-2">
                <span className="font-bold text-blue-300 min-w-8">
                    {index}.
                </span>
                <div className="flex flex-col flex-1">
                    <span className="text-gray-100">{item.title}</span>
                    <div className="flex items-center gap-2 mt-2">
                        <span className="text-sm text-gray-400">Tonart:</span>
                        {user?.admin && (
                            <>
                                {isEdit ? (
                                    <select
                                        value={item.key || ""}
                                        onChange={(e) =>
                                            onKeyChange(item.id, e.target.value)
                                        }
                                        defaultValue={item.key}
                                        className="px-3 py-1 bg-slate-600 text-gray-100 border border-slate-500 rounded hover:bg-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                    >
                                        {availableKeys.map((key) => (
                                            <option key={key} value={key}>
                                                {key}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    <span className="text-sm text-gray-300">
                                        {item.key || "Keine Tonart"}
                                    </span>
                                )}
                            </>
                        )}
                        {!user?.admin && (
                            <span className="text-sm text-gray-300">
                                {item.key || "Keine Tonart"}
                            </span>
                        )}
                        <p className="text-sm text-gray-300">|</p>
                    </div>
                    <div className="flex gap-2 pt-2">
                        <div
                            className="rounded-xl bg-red-500 p-2 flex items-center gap-2 text-white hover:cursor-pointer hover:bg-red-300"
                            onClick={() => window.open(item.youTubeLink)}
                        >
                            <LinkIcon className="w-2 h-2" />
                            <p className="text-sm">YouTube</p>
                        </div>
                        <div
                            className="rounded-xl bg-blue-500 p-2 flex items-center gap-2 text-white hover:cursor-pointer hover:bg-blue-300"
                            onClick={() => window.open(item.songSelectLink)}
                        >
                            <LinkIcon className="w-2 h-2" />
                            <p className="text-sm">SongSelect</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SongDetailInformation;
