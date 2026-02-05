import React from "react";
import { AdminLogo } from "./_components/AdminLogo";
import { AdminLoginForm } from "./_components/AdminLoginForm";
import { ThemeToggle } from "../_components/ThemeToggle";

export default function AdminLoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 transition-colors duration-300 font-sans bg-[#EAE7DE] dark:bg-[#1a202c]">
            <div className="w-full max-w-md">
                <div className="flex justify-center mb-8">
                    <AdminLogo />
                </div>
                <div className="bg-white dark:bg-[#2d3748] rounded-xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
                    <div className="p-8 sm:p-10">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-1 font-serif">
                            Selamat Datang Kembali
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
                            Masuk ke panel admin untuk mengelola konten.
                        </p>
                        <AdminLoginForm />

                        <div className="mt-8 relative">
                            <div aria-hidden="true" className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200 dark:border-gray-600"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white dark:bg-[#2d3748] text-gray-500 dark:text-gray-400">
                                    Butuh bantuan akses?
                                </span>
                            </div>
                        </div>
                        <div className="mt-4 text-center">
                            <a
                                className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-[#2F4F4F] dark:hover:text-white transition-colors"
                                href="#"
                            >
                                Hubungi Tim IT
                            </a>
                        </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 px-8 py-4 border-t border-gray-100 dark:border-gray-700 flex justify-center items-center">
                        <p className="text-xs text-gray-400 dark:text-gray-500 font-sans">
                            © 2026 Komunitas Kelas Inovatif. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
            <ThemeToggle />
        </div>
    );
}

