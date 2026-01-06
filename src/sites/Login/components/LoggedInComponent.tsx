import { Button } from "@headlessui/react";
import type { IUser } from "../../../interfaces/IUser";

import { auth } from "../../../lib/firebase/firebase";
import { signOut } from "firebase/auth";

interface LoggedInComponentProps {
    user: IUser;
}

function LoggedInComponent({ user }: LoggedInComponentProps) {
    const logOutFunc = async () => {
        await signOut(auth);
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-blue-900 to-indigo-900 flex items-center justify-center p-4">
            <div className="bg-gray-300 rounded-2xl shadow-2xl p-8 max-w-md w-full">
                {/* Avatar Circle */}
                <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-linear-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        {user.name?.charAt(0).toUpperCase() || "U"}
                    </div>
                </div>

                {/* Welcome Message */}
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
                    Welcome Back!
                </h1>
                <p className="text-center text-gray-600 mb-8">{user.name}</p>

                {/* User Info */}
                <div className="bg-gray-50 rounded-lg p-4 mb-8">
                    <div className="flex items-center text-gray-700">
                        <span className="text-sm font-medium">
                            Logged in as
                        </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                        {user.email || "User"}
                    </p>
                </div>

                {/* Logout Button */}
                <Button
                    onClick={logOutFunc}
                    className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 active:scale-95"
                >
                    Log Out
                </Button>
            </div>
        </div>
    );
}

export default LoggedInComponent;
