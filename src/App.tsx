import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./navigation/Navbar";
import Login from "./sites/Login/Login";
import AuthProvider from "./contexts/AuthProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./clients/queryClient";
import MusicPage from "./sites/music/MusicPage";
import { Suspense } from "react";
import LoadingComponent from "./utils/LoadingComponent";
import Home from "./sites/home/Home";
import AuthComponents from "./utils/AuthComponents";

const routes = [
    {
        path: "/",
        element: <Home />,
        authOnly: false,
    },
    {
        path: "/music",
        element: <MusicPage />,
        authOnly: true,
    },
    {
        path: "/login",
        element: <Login />,
        authOnly: false,
    },
];

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Suspense fallback={<LoadingComponent />}>
                    <AuthProvider>
                        <Navbar />
                        <Routes>
                            {routes.map((route) => (
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    element={
                                        route.authOnly ? (
                                            <AuthComponents>
                                                {route.element}
                                            </AuthComponents>
                                        ) : (
                                            route.element
                                        )
                                    }
                                />
                            ))}
                        </Routes>
                    </AuthProvider>
                </Suspense>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
