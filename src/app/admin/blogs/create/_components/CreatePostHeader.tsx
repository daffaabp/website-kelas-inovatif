import React from "react";
import { Upload, Menu } from "lucide-react";

export function CreatePostHeader() {
    return (
        <>
            <div className="md:hidden flex items-center justify-between mb-8 sticky top-0 bg-[#F3F1EC] dark:bg-[#111816] z-10 py-4 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#263c32] flex items-center justify-center text-white font-serif font-bold italic text-lg">
                        K
                    </div>
                    <span className="font-serif font-bold text-lg text-[#263c32] dark:text-white">
                        Kelas Inovatif
                    </span>
                </div>
                <button className="text-gray-600 dark:text-gray-300 p-2">
                    <Menu className="w-6 h-6" />
                </button>
            </div>
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div>
                    {/* Breadcrumbs removed */}
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#263c32] dark:text-white leading-tight">
                        Create New Post
                    </h1>
                </div>
                <div className="flex items-center gap-3">
                    <button type="button" className="px-6 py-2.5 rounded-full border border-[#263c32]/30 text-[#263c32] dark:text-white dark:border-white/20 font-medium hover:bg-[#263c32]/5 dark:hover:bg-white/5 transition-colors cursor-pointer">
                        Save Draft
                    </button>
                    <button
                        type="submit"
                        className="bg-[#263c32] hover:bg-[#1e3028] text-white px-8 py-2.5 rounded-full font-medium shadow-lg hover:shadow-xl transition-all flex items-center gap-2 transform active:scale-95 cursor-pointer"
                    >
                        <Upload className="w-4 h-4" />
                        Publish
                    </button>
                </div>
            </header>
        </>
    );
}
