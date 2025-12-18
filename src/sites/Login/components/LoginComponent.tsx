import { Button, Field, Input, Label } from "@headlessui/react";
import { auth } from "../../../lib/firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useActionState } from "react";

function LoginComponent() {
    const loginFunc = async (_: null, formData: FormData) => {
        try {
            await signInWithEmailAndPassword(
                auth,
                formData.get("email") as string,
                formData.get("password") as string,
            );
        } catch {
            alert("Login failed. Please check your credentials and try again.");
        }
        return null;
    };

    const [, formAction, isPending] = useActionState(loginFunc, null);

    return (
        <form
            className="flex flex-col gap-6 max-w-1/2 mx-auto py-20"
            action={formAction}
        >
            <Field className={styles.fieldStyle}>
                <Label htmlFor="email" className={styles.labelStyle}>
                    Email
                </Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    name="email"
                    className={styles.inputStyle}
                    disabled={isPending}
                />
            </Field>
            <Field className={styles.fieldStyle}>
                <Label htmlFor="password" className={styles.labelStyle}>
                    Password
                </Label>
                <Input
                    id="password"
                    type="password"
                    placeholder="***********"
                    name="password"
                    className={styles.inputStyle}
                    disabled={isPending}
                />
            </Field>
            <Button
                type="submit"
                className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                disabled={isPending}
            >
                {isPending ? "Logging in..." : "Login to your account"}
            </Button>
        </form>
    );
}

export default LoginComponent;

const styles = {
    fieldStyle: "flex flex-col",
    labelStyle: "mb-2 block text-sm font-medium text-gray-900 dark:text-white",
    inputStyle:
        "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",
};
