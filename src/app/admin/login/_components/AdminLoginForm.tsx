"use client";

import React, { useActionState, useState } from "react";
import { Lock, Mail, Eye, EyeOff, Loader2 } from "lucide-react";
import { login } from "@/app/actions/auth";

type FormState = {
    errors?: {
        email?: string[];
        password?: string[];
    };
}

const initialState: FormState = {
    errors: {},
};

export function AdminLoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [state, formAction, isPending] = useActionState(login, initialState);

    return (
        <form action={formAction} className="space-y-6">
            <div>
                <label
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    htmlFor="email"
                >
                    Email
                </label>
                <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="text-gray-400 h-5 w-5" />
                    </div>
                    <input
                        className={`focus:ring-[#2F4F4F] focus:border-[#2F4F4F] block w-full pl-10 sm:text-sm border-gray-300 dark:border-gray-600 rounded-md py-2.5 bg-gray-50 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 transition-colors focus:outline-none focus:ring-1 ${state?.errors?.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''
                            }`}
                        id="email"
                        name="email"
                        placeholder="admin@kelasinovatif.com"
                        type="email"
                        defaultValue={""}
                    />
                </div>
                {state?.errors?.email && (
                    <p className="mt-1 text-sm text-red-600">{state.errors.email}</p>
                )}
            </div>
            <div>
                <label
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    htmlFor="password"
                >
                    Kata Sandi
                </label>
                <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="text-gray-400 h-5 w-5" />
                    </div>
                    <input
                        className={`focus:ring-[#2F4F4F] focus:border-[#2F4F4F] block w-full pl-10 pr-10 sm:text-sm border-gray-300 dark:border-gray-600 rounded-md py-2.5 bg-gray-50 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500 transition-colors focus:outline-none focus:ring-1 ${state?.errors?.password ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''
                            }`}
                        id="password"
                        name="password"
                        placeholder="••••••••"
                        type={showPassword ? "text" : "password"}
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="text-gray-400 hover:text-gray-500 focus:outline-none"
                        >
                            {showPassword ? (
                                <EyeOff className="h-5 w-5" />
                            ) : (
                                <Eye className="h-5 w-5" />
                            )}
                        </button>
                    </div>
                </div>
                {state?.errors?.password && (
                    <p className="mt-1 text-sm text-red-600">{state.errors.password}</p>
                )}
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <input
                        className="h-4 w-4 text-[#2F4F4F] focus:ring-[#2F4F4F] border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600 cursor-pointer"
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                    />
                    <label className="ml-2 block text-sm text-gray-600 dark:text-gray-400 cursor-pointer" htmlFor="remember-me">
                        Ingat saya
                    </label>
                </div>
                <div className="text-sm">
                    <a
                        className="font-medium text-[#2F4F4F] hover:text-green-800 dark:hover:text-green-400 transition-colors opacity-80 hover:opacity-100"
                        href="#"
                    >
                        Lupa kata sandi?
                    </a>
                </div>
            </div>
            <div>
                <button
                    className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#2F4F4F] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2F4F4F] transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    type="submit"
                    disabled={isPending}
                >
                    {isPending ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Masuk...
                        </>
                    ) : (
                        "Masuk"
                    )}
                </button>
            </div>
        </form>
    );
}
