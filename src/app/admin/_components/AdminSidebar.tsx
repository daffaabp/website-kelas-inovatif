"use client";

import React from "react";
import { usePathname } from "next/navigation"; // Correct hook
import LinkComponent from "next/link"; // Specific import for component as Next.js recommends
import Image from "next/image";
import {
    LayoutDashboard,
    FileText,
    Calendar,
} from "lucide-react";

export function AdminSidebar() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === "/admin/dashboard" && pathname === "/admin/dashboard") {
            return true;
        }
        // Handle sub-routes for blogs, etc.
        if (path !== "/admin/dashboard" && pathname.startsWith(path)) {
            return true;
        }
        return false;
    };

    const navItems = [
        {
            name: "Dashboard",
            href: "/admin/dashboard",
            icon: LayoutDashboard,
        },
        {
            name: "Blogs",
            href: "/admin/blogs",
            icon: FileText,
        },
        {
            name: "Schedule",
            href: "/admin/schedule",
            icon: Calendar,
        },
    ];

    return (
        <aside className="hidden md:flex flex-col w-64 h-full bg-white dark:bg-[#1C2624] border-r border-gray-200 dark:border-gray-800 shrink-0 z-30 relative">
            <div className="p-8 flex items-center gap-3 shrink-0">
                <div className="w-10 h-10 rounded-full bg-[#263c32] flex items-center justify-center text-white font-serif font-bold italic text-xl shadow-md">
                    K
                </div>
                <span className="font-serif font-bold text-xl text-[#263c32] dark:text-white tracking-wide">
                    Kelas Inovatif
                </span>
            </div>
            <nav className="flex-1 px-4 space-y-2 overflow-y-auto custom-scrollbar">
                {navItems.map((item) => {
                    const active = isActive(item.href);
                    return (
                        <LinkComponent
                            key={item.name}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors group ${active
                                ? "bg-[#263c32]/10 dark:bg-[#263c32]/20 text-[#263c32] dark:text-white shadow-sm"
                                : "text-gray-500 dark:text-gray-400 hover:bg-[#F3F1EC] dark:hover:bg-gray-800"
                                }`}
                        >
                            <item.icon
                                className={`w-5 h-5 transition-colors ${active
                                    ? ""
                                    : "text-gray-400 group-hover:text-[#263c32] dark:group-hover:text-white"
                                    }`}
                            />
                            <span className="font-medium">{item.name}</span>
                        </LinkComponent>
                    );
                })}
            </nav>
            <div className="p-4 border-t border-gray-200 dark:border-gray-800 shrink-0">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F3F1EC] dark:hover:bg-gray-800 cursor-pointer transition-colors w-full mb-2">
                    <Image
                        alt="Admin Profile"
                        className="rounded-full object-cover border-2 border-[#263c32]/20"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmb0q5os0D3PyYecLz1Crk_uIdc73zDZO4NLRJ6aDrEMgq6VrN5BC4u_Eb387roJwfjwFF0dmHy_qaRgKJmrSFgtOUchq8Gbgc91o742zRRTDVpOA08T_PsEkgzBYtpIW_mHgAriBm6wVLLJJTsjlyM1FP9bz-EfEa1XPuohKSob1_QxEaDlGRGthZBvmZd1BuaNBpS9vICEcobeGW75SW2LJaaqoVoUXWDO-buuavviIqDXMfvXzwLJIpQ53GjNnqh5ihFWnfXHM8"
                        width={40}
                        height={40}
                    />
                    <div className="overflow-hidden">
                        <p className="text-sm font-semibold text-gray-800 dark:text-white truncate">
                            Admin User
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                            Editor in Chief
                        </p>
                    </div>
                </div>
                <button
                    type="button"
                    onClick={async () => {
                        await import("@/app/actions/auth").then((mod) => mod.logout());
                    }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/10 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-md transition-colors"
                >
                    Log Out
                </button>
            </div>
        </aside>
    );
}
