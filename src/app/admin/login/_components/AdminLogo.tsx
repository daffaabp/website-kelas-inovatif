import React from "react";
import { cn } from "@/lib/utils"; // Assuming utils is standard in shadcn setup, will verify or use basic className

export function AdminLogo({ className }: { className?: string }) {
    return (
        <div className={cn("flex flex-col items-center", className)}>
            <div className="flex items-center space-x-3">
                <div
                    className="text-white rounded-full w-10 h-10 flex items-center justify-center font-serif font-bold text-xl shadow-lg"
                    style={{ backgroundColor: "#2F4F4F" }}
                >
                    K
                </div>
                <span className="font-serif text-2xl font-bold text-gray-800 dark:text-gray-100 tracking-tight">
                    Kelas Inovatif
                </span>
            </div>
        </div>
    );
}
