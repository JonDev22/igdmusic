import { useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";
// import type { Sunday } from "../../interfaces/ISundays";
import SundaysList from "./components/SundaysList";
import SundayDetails from "./components/SundayDetails";
import CreateEditSunday from "./components/CreateEditSunday";

function PlanningPage() {
    const context = useAuthContext();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const [selectedSunday, setSelectedSunday] = useState<string | null>(null);

    return (
        <div>
            <CreateEditSunday
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />

            <div className="bg-blue-950 py-12 flex gap-4 items-center mx-auto justify-center">
                <h1 className="text-white text-center text-4xl font-bold">
                    Planung
                </h1>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <SundaysList
                        sundays={context.sundays}
                        selectedSunday={selectedSunday}
                        onSelectSunday={setSelectedSunday}
                        openDialog={() => setIsOpen(true)}
                    />

                    <SundayDetails
                        key={selectedSunday ?? "no-selection"}
                        sundays={context.sundays}
                        selectedSunday={selectedSunday}
                        clearSundaySelection={() => setSelectedSunday(null)}
                    />
                </div>
            </div>
        </div>
    );
}

export default PlanningPage;
