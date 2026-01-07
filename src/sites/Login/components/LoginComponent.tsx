import { Button, Field, Input, Label } from "@headlessui/react";
import { auth } from "../../../lib/firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useActionState } from "react";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/solid";

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
        <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center px-4 py-20">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                <div
                    className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
                    style={{ animationDelay: "2s" }}
                ></div>
            </div>

            {/* Login Card */}
            <div className="relative w-full max-w-md">
                <div className="bg-linear-to-br from-slate-800/50 to-slate-900/50 rounded-2xl shadow-2xl border border-blue-500/20 backdrop-blur-xl p-8">
                    {/* Header */}
                    <div className="mb-8 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-br from-blue-500 to-blue-600 mb-4 shadow-lg">
                            <span className="text-white text-2xl font-bold">
                                ♪
                            </span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">
                            Welcome Back
                        </h1>
                        <p className="text-gray-400">
                            Sign in to manage your music
                        </p>
                    </div>

                    {/* Form */}
                    <form className="space-y-5" action={formAction}>
                        {/* Email Field */}
                        <Field className="group">
                            <Label
                                htmlFor="email"
                                className="mb-2 block text-sm font-medium text-gray-300 group-focus-within:text-blue-400 transition-colors"
                            >
                                Email Address
                            </Label>
                            <div className="relative">
                                <EnvelopeIcon className="absolute left-3.5 top-3.5 h-5 w-5 text-gray-400 group-focus-within:text-blue-400 transition-colors pointer-events-none" />
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    name="email"
                                    required
                                    disabled={isPending}
                                    className="w-full pl-11 pr-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 hover:border-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 text-white placeholder-gray-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                />
                            </div>
                        </Field>

                        {/* Password Field */}
                        <Field className="group">
                            <Label
                                htmlFor="password"
                                className="mb-2 block text-sm font-medium text-gray-300 group-focus-within:text-blue-400 transition-colors"
                            >
                                Password
                            </Label>
                            <div className="relative">
                                <LockClosedIcon className="absolute left-3.5 top-3.5 h-5 w-5 text-gray-400 group-focus-within:text-blue-400 transition-colors pointer-events-none" />
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••••"
                                    name="password"
                                    required
                                    disabled={isPending}
                                    className="w-full pl-11 pr-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 hover:border-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 text-white placeholder-gray-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                />
                            </div>
                        </Field>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            disabled={isPending}
                            className="w-full mt-6 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-blue-500/50 disabled:shadow-none disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:translate-y-0"
                        >
                            {isPending ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg
                                        className="w-5 h-5 animate-spin"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                    Signing in...
                                </span>
                            ) : (
                                "Sign In"
                            )}
                        </Button>
                    </form>

                    {/* Divider */}
                    <div className="relative mt-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-600"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-3 bg-linear-to-br from-slate-800/50 to-slate-900/50 text-gray-400">
                                Need an account?
                            </span>
                        </div>
                    </div>

                    {/* Footer */}
                    <p className="mt-6 text-center text-sm text-gray-400">
                        Contact your administrator to create an account
                    </p>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
            </div>
        </div>
    );
}

export default LoginComponent;
