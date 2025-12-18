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
        <div className="max-w-1/2 mx-auto pt-2">
            <p className="text-2xl py-2">Welcome, {user.name}!</p>
            <Button onClick={logOutFunc}>Log Out</Button>
        </div>
    );
}

export default LoggedInComponent;
