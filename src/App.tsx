import Navbar from "./navigation/Navbar";
import Login from "./sites/Login/Login";
import AuthProvider from "./contexts/AuthProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./clients/queryClient";
import MusicPage from "./sites/music/MusicPage";
import { Fragment, Suspense, useState } from "react";
import LoadingComponent from "./utils/LoadingComponent";
import Home from "./sites/home/Home";
import AuthComponents from "./utils/AuthComponents";
import ContactPage from "./sites/contact/ContactPage";
import ValuesPage from "./sites/values/ValuesPage";
import PlanningPage from "./sites/planning/PlanningPage";
import type { PageType } from "./types/PageType";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

import {
    Bars3Icon,
    XMarkIcon,
    UserCircleIcon,
    MusicalNoteIcon,
} from "@heroicons/react/24/outline";

// interface RouteConfig {
//     path: PageType;
//     render: () => React.ReactNode;
//     authOnly: boolean;
// }

function App() {
    const [activePage, setActivePage] = useState<PageType>("home");

    // const routes: RouteConfig[] = [
    //     {
    //         path: "home",
    //         render: () => <Home />,
    //         authOnly: false,
    //     },
    //     {
    //         path: "music",
    //         render: () => <MusicPage />,
    //         authOnly: true,
    //     },
    //     {
    //         path: "contact",
    //         render: () => <ContactPage />,
    //         authOnly: false,
    //     },
    //     {
    //         path: "planning",
    //         render: () => <PlanningPage />,
    //         authOnly: true,
    //     },
    //     {
    //         path: "values",
    //         render: () => <ValuesPage />,
    //         authOnly: false,
    //     },
    //     {
    //         path: "login",
    //         render: () => <Login />,
    //         authOnly: false,
    //     },
    // ];

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
            component: (
                <AuthComponents>
                    <MusicPage />
                </AuthComponents>
            ),
        },
        {
            name: "Planung",
            component: (
                <AuthComponents>
                    <PlanningPage />
                </AuthComponents>
            ),
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
                        <TabList className="items-center flex gap-2 p-2">
                            {tabs.map((tab) => (
                                <Tab as={Fragment} key={tab.name}>
                                    {({ hover, selected }) => (
                                        <p
                                            className={`px-4 py-2 rounded-lg bg-blue-600 text-white ${hover && "hover:bg-blue-700 hover:cursor-pointer"} ${selected && "bg-blue-900"}`}
                                        >
                                            {tab.name}
                                        </p>
                                    )}
                                </Tab>
                            ))}
                            <Tab as={Fragment}>
                                {({ hover, selected }) => (
                                    <UserCircleIcon
                                        className={`rounded-lg text-black ${hover && "hover:text-gray-500 hover:cursor-pointer"} ${selected && "text-gray-500"} h-10 w-10`}
                                    />
                                )}
                            </Tab>
                        </TabList>

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
