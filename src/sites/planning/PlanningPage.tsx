import { useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import SundaysList from "./components/SundaysList";
import SundayDetails from "./components/SundayDetails";
import CreateEditSunday from "./components/CreateEditSunday";
import HeaderComponent from "../../utils/HeaderComponent";

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

            <HeaderComponent image="planning" header="Planung" />

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
