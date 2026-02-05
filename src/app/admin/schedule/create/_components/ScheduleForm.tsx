"use client";

import React, { useState, useRef } from "react";
import { Edit, MapPin, Bold, Italic, Underline, List, Link as LinkIcon, Upload } from "lucide-react";

interface ScheduleFormProps {
    initialData?: {
        title?: string;
        speaker_name?: string;
        speaker_role?: string;
        speaker_image?: string;
        location?: string;
        register_url?: string;
        excerpt?: string;
        benefits?: string;
        description?: string;
        original_price?: number;
        discounted_price?: number;
    };
}

export function ScheduleForm({ initialData }: ScheduleFormProps) {
    const [preview, setPreview] = useState(initialData?.speaker_image || "https://lh3.googleusercontent.com/aida-public/AB6AXuA5DECcNwlr6XKaoC7QMMH9pRanwsdUswa3H1lPRzo6BB5B87vSwdhOo6KP1qqmWtI28EbqdoX0-4LQ4dDPSa2BTCRKkCZTOtenSbjyD6qqVrCacIFyRBoclWsT_0WcF8mY9-7tqsZF89YqlaI6hTZlXslXjU9h1B3zIBTGSqdtQsMHxe9xQeEmTGgwl-SuKJ_Wi4GWS9XM3OAq_32m6Bem7ezj4fvX7gr8B3Jnhkvfg9_OxxzTX7jNOsgrfCzucVA28RU5Nq6HDzSG");
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setPreview(url);
        }
    };

    return (
        <div className="flex-1 min-w-0">
            <div className="bg-white dark:bg-[#1C2624] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 md:p-8">
                <h2 className="text-lg font-serif font-bold text-[#263c32] dark:text-white mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
                    Event Details
                </h2>
                <div className="space-y-6">
                    <div>
                        <label
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                            htmlFor="event-title"
                        >
                            Event Title
                        </label>
                        <input
                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#263c32]/20 focus:border-[#263c32] text-lg font-serif font-medium placeholder-gray-400 dark:text-white transition-shadow"
                            id="event-title"
                            name="title"
                            placeholder="e.g. Introduction to Advanced Machine Learning"
                            type="text"
                            defaultValue={initialData?.title || ""}
                        />
                    </div>
                    <div>
                        <label
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                            htmlFor="event-excerpt"
                        >
                            Excerpt
                        </label>
                        <textarea
                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#263c32]/20 focus:border-[#263c32] text-sm text-gray-600 dark:text-gray-300 placeholder-gray-400 transition-shadow resize-y"
                            id="event-excerpt"
                            name="excerpt"
                            placeholder="Brief summary of the event (shown in cards)"
                            rows={3}
                            defaultValue={initialData?.excerpt || ""}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Speaker
                        </label>
                        <div className="flex items-start gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800/30">
                            <div
                                className="relative group cursor-pointer"
                                onClick={() => fileInputRef.current?.click()}
                            >
                                <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden flex items-center justify-center border-2 border-white dark:border-gray-600 shadow-sm group-hover:border-[#263c32] transition-colors">
                                    <img
                                        alt="Speaker"
                                        className="w-full h-full object-cover"
                                        src={preview}
                                    />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Upload className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                                {/* Hidden input for speaker image file */}
                                <input
                                    type="file"
                                    name="speaker_image_file"
                                    ref={fileInputRef}
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                                {/* Keep the existing hidden input for fallback/existing value */}
                                <input type="hidden" name="speaker_image" value={preview} />
                            </div>
                            <div className="flex-1 space-y-3">
                                <input
                                    className="w-full px-3 py-2 bg-white dark:bg-[#1C2624] border border-gray-200 dark:border-gray-700 rounded-md text-sm focus:ring-1 focus:ring-[#263c32] focus:border-[#263c32] dark:text-white"
                                    placeholder="Speaker Name"
                                    name="speaker_name"
                                    type="text"
                                    defaultValue={initialData?.speaker_name || ""}
                                />
                                <input
                                    className="w-full px-3 py-2 bg-white dark:bg-[#1C2624] border border-gray-200 dark:border-gray-700 rounded-md text-sm focus:ring-1 focus:ring-[#263c32] focus:border-[#263c32] dark:text-white"
                                    placeholder="Role / Title"
                                    name="speaker_role"
                                    type="text"
                                    defaultValue={initialData?.speaker_role || ""}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                            htmlFor="event-location"
                        >
                            Location / Platform Link
                        </label>
                        <div className="relative rounded-lg shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <MapPin className="text-gray-400 w-5 h-5" />
                            </div>
                            <input
                                className="block w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#263c32]/20 focus:border-[#263c32] sm:text-sm dark:text-white"
                                id="event-location"
                                name="location"
                                placeholder="Room 302 or https://zoom.us/..."
                                type="text"
                                defaultValue={initialData?.location || ""}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <label
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        htmlFor="register-url"
                    >
                        Registration URL
                    </label>
                    <div className="relative rounded-lg shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <LinkIcon className="text-gray-400 w-5 h-5" />
                        </div>
                        <input
                            className="block w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#263c32]/20 focus:border-[#263c32] sm:text-sm dark:text-white"
                            id="register-url"
                            name="register_url"
                            placeholder="https://..."
                            type="url"
                            defaultValue={initialData?.register_url || ""}
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Pricing (IDR)
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs text-gray-500 mb-1">Original Price</label>
                            <input
                                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#263c32]/20 focus:border-[#263c32] sm:text-sm dark:text-white"
                                type="number"
                                name="original_price"
                                placeholder="500000"
                                defaultValue={initialData?.original_price || ""}
                            />
                        </div>
                        <div>
                            <label className="block text-xs text-gray-500 mb-1">Discounted Price</label>
                            <input
                                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#263c32]/20 focus:border-[#263c32] sm:text-sm dark:text-white"
                                type="number"
                                name="discounted_price"
                                placeholder="249000"
                                defaultValue={initialData?.discounted_price || ""}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <label
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        htmlFor="event-benefits"
                    >
                        Benefits
                    </label>
                    <textarea
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-[#263c32]/20 focus:border-[#263c32] text-sm text-gray-600 dark:text-gray-300 placeholder-gray-400 transition-shadow resize-y"
                        id="event-benefits"
                        name="benefits"
                        placeholder="- List item 1&#10;- List item 2"
                        rows={4}
                        defaultValue={initialData?.benefits || ""}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Description
                    </label>
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-[#1C2624]">
                        {/* Toolbar intentionally kept static */}
                        <div className="flex items-center gap-1 p-2 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                            <button type="button" className="p-1.5 text-gray-500 hover:text-[#263c32] hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                                <Bold className="w-4 h-4" />
                            </button>
                            <button type="button" className="p-1.5 text-gray-500 hover:text-[#263c32] hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                                <Italic className="w-4 h-4" />
                            </button>
                            <button type="button" className="p-1.5 text-gray-500 hover:text-[#263c32] hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                                <Underline className="w-4 h-4" />
                            </button>
                            <div className="w-px h-4 bg-gray-300 dark:bg-gray-600 mx-1"></div>
                            <button type="button" className="p-1.5 text-gray-500 hover:text-[#263c32] hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                                <List className="w-4 h-4" />
                            </button>
                            <button type="button" className="p-1.5 text-gray-500 hover:text-[#263c32] hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                                <LinkIcon className="w-4 h-4" />
                            </button>
                        </div>
                        <textarea
                            className="w-full p-4 border-0 focus:ring-0 text-gray-700 dark:text-gray-300 bg-transparent resize-y"
                            placeholder="Write the event description here..."
                            name="description"
                            rows={6}
                            defaultValue={initialData?.description || ""}
                        ></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
}
