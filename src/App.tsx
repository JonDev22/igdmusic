import Navbar from "./navigation/Navbar";
import Login from "./sites/Login/Login";
import AuthProvider from "./contexts/AuthProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./clients/queryClient";
import MusicPage from "./sites/music/MusicPage";
import { Suspense, useState } from "react";
import LoadingComponent from "./utils/LoadingComponent";
import Home from "./sites/home/Home";
// import ContactPage from "./sites/contact/ContactPage";
import ValuesPage from "./sites/values/ValuesPage";
import PlanningPage from "./sites/planning/PlanningPage";
import { TabGroup, TabPanel, TabPanels } from "@headlessui/react";

function App() {
    const [selectedPanel, setSelectedPanel] = useState<number>(0);

    const tabs = [
        {
            name: "Home",
            component: (
                <Home onChange={(num: number) => setSelectedPanel(num)} />
            ),
        },
        {
            name: "Musik",
            component: <MusicPage />,
        },
        {
            name: "Planung",
            component: <PlanningPage />,
        },
        {
            name: "Werte",
            component: <ValuesPage />,
        },
    ];

    return (
        <QueryClientProvider client={queryClient}>
            <Suspense fallback={<LoadingComponent />}>
                <AuthProvider>
                    <TabGroup
                        onChange={(e: number) => setSelectedPanel(e)}
                        selectedIndex={selectedPanel}
                    >
                        <Navbar
                            tabs={tabs.map((tab) => ({ name: tab.name }))}
                        />

                        <TabPanels>
                            {tabs.map((tab) => (
                                <TabPanel key={`Tab-${tab.name}`}>
                                    {tab.component}
                                </TabPanel>
                            ))}
                            <TabPanel>
                                <Login />
                            </TabPanel>
                        </TabPanels>
                    </TabGroup>
                </AuthProvider>
            </Suspense>
        </QueryClientProvider>
    );
}

export default App;
