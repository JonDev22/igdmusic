import type { ReactNode } from "react";
import useAuthContext from "../hooks/useAuthContext";
import LoginComponent from "../sites/Login/components/LoginComponent";

interface AuthComponentsProps {
    children: ReactNode;
}

function AuthComponents({ children }: AuthComponentsProps) {
    const { user } = useAuthContext();

    if (!user) {
        return <LoginComponent />;
    }

    return <>{children}</>;
}

export default AuthComponents;
