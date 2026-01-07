import { use } from "react";
import { AuthContext } from "../contexts/AuthContext";

function useAuthContext() {
    const context = use(AuthContext);
    if (!context) {
        throw new Error("useAuthContext must be used within an AuthProvider");
    }
    return context;
}

export default useAuthContext;
