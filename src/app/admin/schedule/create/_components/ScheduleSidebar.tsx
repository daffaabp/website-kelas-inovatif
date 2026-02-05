"use client";

import React, { useState, useRef } from "react";
import { Calendar, Tag, Image as ImageIcon, Plus, X, UploadCloud } from "lucide-react";

interface ScheduleSidebarProps {
    initialData?: {
        date?: string;
        start_time?: string;
        end_time?: string;
        type?: string;
        image?: string;
    };
}

export function ScheduleSidebar({ initialData }: ScheduleSidebarProps) {
    // Format date for default input value (YYYY-MM-DD)
    const defaultDate = initialData?.date
        ? new Date(initialData.date).toISOString().split('T')[0]
        : "";

    const [preview, setPreview] = useState(initialData?.image || null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setPreview(url);
        }
    };

    const handleClearImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setPreview(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    return (
        <div className="w-full lg:w-80 shrink-0 space-y-6">
            <div className="bg-white dark:bg-[#1C2624] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30">
                    <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                        <Calendar className="text-[#D4A373] w-4 h-4" />
                        Date & Time
                    </h3>
                </div>
                <div className="p-5 space-y-4">
                    <div>
                        <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1.5">
                            Date
                        </label>
                        <input
                            className="w-full px-3 py-2 bg-white dark:bg-[#1C2624] border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:ring-1 focus:ring-[#263c32] focus:border-[#263c32] dark:text-gray-200"
                            type="date"
                            name="date"
                            defaultValue={defaultDate}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1.5">
                                Start Time
                            </label>
                            <input
                                className="w-full px-3 py-2 bg-white dark:bg-[#1C2624] border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:ring-1 focus:ring-[#263c32] focus:border-[#263c32] dark:text-gray-200"
                                type="time"
                                name="start_time"
                                defaultValue={initialData?.start_time || ""}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1.5">
                                End Time
                            </label>
                            <input
                                className="w-full px-3 py-2 bg-white dark:bg-[#1C2624] border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:ring-1 focus:ring-[#263c32] focus:border-[#263c32] dark:text-gray-200"
                                type="time"
                                name="end_time"
                                defaultValue={initialData?.end_time || ""}
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-2 pt-2">
                        <input
                            className="rounded border-gray-300 text-[#263c32] focus:ring-[#263c32]"
                            id="all-day"
                            type="checkbox"
                        />
                        <label
                            className="text-sm text-gray-600 dark:text-gray-400"
                            htmlFor="all-day"
                        >
                            All day event
                        </label>
                    </div>
                </div>
            </div>
            <div className="bg-white dark:bg-[#1C2624] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30 flex justify-between items-center">
                    <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                        <Tag className="text-[#D4A373] w-4 h-4" />
                        Category
                    </h3>
                    <button type="button" className="text-xs font-medium text-[#263c32] hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 flex items-center gap-1 transition-colors">
                        <Plus className="w-3 h-3" />
                        Add
                    </button>
                </div>
                <div className="p-5">
                    <select name="type" defaultValue={initialData?.type} className="w-full px-3 py-2 bg-white dark:bg-[#1C2624] border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:ring-1 focus:ring-[#263c32] focus:border-[#263c32] dark:text-gray-200 mb-3">
                        <option value="FREE WEBINAR">FREE WEBINAR</option>
                        <option value="KELAS INTENSIF: CURSOR">KELAS INTENSIF: CURSOR</option>
                        <option value="WORKSHOP REGULAR: SCISPACE">WORKSHOP REGULAR: SCISPACE</option>
                        <option value="WORKSHOP REGULAR: NOTEBOOKLM">WORKSHOP REGULAR: NOTEBOOKLM</option>
                        <option value="PERTEMUAN ALUMNI">PERTEMUAN ALUMNI</option>
                    </select>
                </div>
            </div>
            {/* Featured Image Section */}
            <div className="bg-white dark:bg-[#1C2624] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30">
                    <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                        <ImageIcon className="text-[#D4A373] w-4 h-4" />
                        Featured Image
                    </h3>
                </div>
                <div className="p-5">
                    <div
                        className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer group relative overflow-hidden"
                        onClick={() => fileInputRef.current?.click()}
                    >
                        {preview ? (
                            <>
                                <img src={preview} alt="Featured Preview" className="absolute inset-0 w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <UploadCloud className="text-white w-8 h-8" />
                                </div>
                                <button
                                    onClick={handleClearImage}
                                    className="absolute top-2 right-2 p-1 bg-red-500 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </>
                        ) : (
                            <>
                                <UploadCloud className="text-gray-400 group-hover:text-[#263c32] transition-colors w-8 h-8 mb-2" />
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    Click to upload or drag & drop
                                </p>
                            </>
                        )}
                        <input
                            type="file"
                            name="featured_image_file"
                            ref={fileInputRef}
                            className="hidden"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                        <input type="hidden" name="image" value={preview || ""} />
                    </div>
                </div>
            </div>
        </div>
    );
}
