import React from "react";
import { Download } from "lucide-react";

export function AnalyticsChart() {
    return (
        <div className="bg-white dark:bg-[#1C2624] p-6 md:p-8 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                    <h2 className="text-xl font-serif font-bold text-gray-800 dark:text-white">
                        Website Analytics
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Traffic trends over the last 30 days
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <select className="bg-transparent border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-600 dark:text-gray-300 px-3 py-2 focus:ring-[#263c32] focus:border-[#263c32] cursor-pointer outline-none">
                        <option>Last 30 Days</option>
                        <option>Last 7 Days</option>
                        <option>Last Year</option>
                    </select>
                    <button className="p-2 text-gray-400 hover:text-[#263c32] transition-colors rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                        <Download className="w-5 h-5" />
                    </button>
                </div>
            </div>
            <div className="relative w-full h-72 md:h-80">
                <svg
                    className="w-full h-full overflow-visible"
                    preserveAspectRatio="none"
                    viewBox="0 0 1200 300"
                >
                    <line
                        className="dark:stroke-gray-800"
                        stroke="#F1F5F9"
                        strokeWidth="1"
                        x1="0"
                        x2="1200"
                        y1="250"
                        y2="250"
                    ></line>
                    <line
                        className="dark:stroke-gray-800"
                        stroke="#F1F5F9"
                        strokeWidth="1"
                        x1="0"
                        x2="1200"
                        y1="150"
                        y2="150"
                    ></line>
                    <line
                        className="dark:stroke-gray-800"
                        stroke="#F1F5F9"
                        strokeWidth="1"
                        x1="0"
                        x2="1200"
                        y1="50"
                        y2="50"
                    ></line>
                    <defs>
                        <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                            <stop
                                offset="0%"
                                stopColor="#263c32"
                                stopOpacity="0.1"
                            ></stop>
                            <stop
                                offset="100%"
                                stopColor="#263c32"
                                stopOpacity="0"
                            ></stop>
                        </linearGradient>
                    </defs>
                    <path
                        className="dark:opacity-30"
                        d="M0,250 C100,200 200,280 300,150 C400,50 500,100 600,80 C700,60 800,120 900,100 C1000,80 1100,20 1200,60 V 300 H 0 Z"
                        fill="url(#chartGradient)"
                    ></path>
                    <path
                        className="dark:stroke-[#D4A373]"
                        d="M0,250 C100,200 200,280 300,150 C400,50 500,100 600,80 C700,60 800,120 900,100 C1000,80 1100,20 1200,60"
                        fill="none"
                        stroke="#263c32"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                    ></path>
                    <circle
                        className="fill-white dark:fill-[#1C2624] stroke-[#263c32] dark:stroke-[#D4A373]"
                        cx="300"
                        cy="150"
                        r="5"
                        strokeWidth="3"
                    ></circle>
                    <circle
                        className="fill-white dark:fill-[#1C2624] stroke-[#263c32] dark:stroke-[#D4A373]"
                        cx="600"
                        cy="80"
                        r="5"
                        strokeWidth="3"
                    ></circle>
                    <circle
                        className="fill-white dark:fill-[#1C2624] stroke-[#263c32] dark:stroke-[#D4A373]"
                        cx="900"
                        cy="100"
                        r="5"
                        strokeWidth="3"
                    ></circle>
                </svg>
                <div className="flex justify-between mt-2 text-xs text-gray-400 font-medium">
                    <span>Oct 1</span>
                    <span>Oct 8</span>
                    <span>Oct 15</span>
                    <span>Oct 22</span>
                    <span>Oct 29</span>
                </div>
            </div>
        </div>
    );
}
