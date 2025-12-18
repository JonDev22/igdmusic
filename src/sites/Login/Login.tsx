import useAuthContext from "../../hooks/useAuthContext";
import LoggedInComponent from "./components/LoggedInComponent";
import LoginComponent from "./components/LoginComponent";

function Login() {
    const { user } = useAuthContext();

    return <>{user ? <LoggedInComponent user={user} /> : <LoginComponent />}</>;
}

export default Login;
