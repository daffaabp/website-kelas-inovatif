"use client";

import { useActionState, useEffect } from "react";
import { subscribeToNewsletter } from "@/app/actions/subscribe";
import { toast } from "sonner";

const initialState = {
    success: false,
    message: "",
};

export function NewsletterSection() {
    const [state, action, isPending] = useActionState(subscribeToNewsletter, initialState);

    useEffect(() => {
        if (state.message) {
            if (state.success) {
                toast.success(state.message);
            } else {
                toast.error(state.message);
            }
        }
    }, [state]);

    const patternLight = `data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;
    const patternDark = `data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;

    return (
        <section className="bg-gray-100 dark:bg-gray-950 p-4 font-sans antialiased">
            <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-3xl border border-[#E5E7EB] dark:border-[#3F3F46] shadow-xl bg-[#FAFAFA] dark:bg-[#27272A] transition-colors duration-300">
                <div
                    className="absolute inset-0 z-0 opacity-100 pointer-events-none"
                    style={{ backgroundImage: `url("${patternLight}")` }}
                />
                <div
                    className="absolute inset-0 z-0 opacity-100 pointer-events-none dark:block hidden"
                    style={{ backgroundImage: `url("${patternDark}")` }}
                />

                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12 gap-10">
                    <div className="flex flex-col md:flex-row items-center md:items-start lg:items-center gap-6 lg:w-5/12 w-full text-center md:text-left">
                        <div className="flex items-center gap-4 flex-shrink-0">
                            <div className="h-16 w-16 rounded-2xl bg-[#1A4134] flex items-center justify-center shadow-xl shadow-[#1A4134]/20">
                                <span className="font-serif italic text-white text-3xl font-bold">K</span>
                            </div>
                            <div className="flex flex-col items-start">
                                <h2 className="text-xl font-bold text-[#1F2937] dark:text-[#E5E7EB] tracking-tight leading-none">
                                    KelasInovatif
                                </h2>
                                <span className="text-xs font-bold tracking-widest text-[#6B7280] dark:text-[#9CA3AF] uppercase mt-1">
                                    Komunitas AI
                                </span>
                            </div>
                        </div>
                        <div className="hidden lg:block h-16 w-px bg-[#E5E7EB] dark:bg-[#3F3F46] mx-2"></div>
                        <h1 className="text-3xl lg:text-5xl font-serif text-[#1A4134] dark:text-white leading-tight font-bold">
                            Newsletter Komunitas
                        </h1>
                    </div>
                    <div className="w-full lg:w-6/12">
                        <form action={action} className="flex flex-col gap-4 w-full">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex-1">
                                    <label className="sr-only" htmlFor="first-name">Nama Depan</label>
                                    <input
                                        name="firstName"
                                        className="w-full px-5 py-4 rounded-xl border border-[#E5E7EB] dark:border-[#3F3F46] bg-white dark:bg-[#18181B] text-[#1F2937] dark:text-[#E5E7EB] focus:ring-2 focus:ring-[#1A4134] focus:border-[#1A4134] outline-none transition-all placeholder-[#6B7280] dark:placeholder-[#9CA3AF] shadow-sm"
                                        id="first-name"
                                        placeholder="Nama Depan"
                                        type="text"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="sr-only" htmlFor="last-name">Nama Belakang</label>
                                    <input
                                        name="lastName"
                                        className="w-full px-5 py-4 rounded-xl border border-[#E5E7EB] dark:border-[#3F3F46] bg-white dark:bg-[#18181B] text-[#1F2937] dark:text-[#E5E7EB] focus:ring-2 focus:ring-[#1A4134] focus:border-[#1A4134] outline-none transition-all placeholder-[#6B7280] dark:placeholder-[#9CA3AF] shadow-sm"
                                        id="last-name"
                                        placeholder="Nama Belakang"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="w-full">
                                <label className="sr-only" htmlFor="email">Masukkan email Anda...</label>
                                <input
                                    name="email"
                                    className="w-full px-5 py-4 rounded-xl border border-[#E5E7EB] dark:border-[#3F3F46] bg-white dark:bg-[#18181B] text-[#1F2937] dark:text-[#E5E7EB] focus:ring-2 focus:ring-[#1A4134] focus:border-[#1A4134] outline-none transition-all placeholder-[#6B7280] dark:placeholder-[#9CA3AF] shadow-sm"
                                    id="email"
                                    placeholder="Masukkan email Anda..."
                                    type="email"
                                    required
                                />
                            </div>
                            <button
                                className="w-full bg-[#1A4134] hover:bg-[#143329] text-white font-bold text-sm tracking-widest uppercase py-4 rounded-xl transition-all duration-200 flex items-center justify-center shadow-lg shadow-[#1A4134]/10 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                                type="submit"
                                disabled={isPending}
                            >
                                {isPending ? "MEMPROSES..." : "BERLANGGANAN"}
                            </button>
                            <p className="text-[10px] text-center text-[#6B7280] dark:text-[#9CA3AF] uppercase tracking-widest mt-1">
                                Dapatkan update mingguan langsung ke inbox Anda
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
