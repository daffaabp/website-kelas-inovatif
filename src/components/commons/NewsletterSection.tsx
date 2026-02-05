"use client";

import { useActionState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { subscribeToNewsletter } from "@/app/actions/subscribe";
import { toast } from "sonner";

const initialState = {
    success: false,
    message: "",
};

export function NewsletterSection() {
    const bgPattern = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='none' stroke='%231F3D35' stroke-width='0.5' stroke-linecap='round' stroke-linejoin='round' opacity='0.08'%3E%3Cpath d='M22 10v6M2 10l10-5 10 5-10 5z'/%3E%3Cpath d='M6 12v5c3 3 9 3 12 0v-5'/%3E%3C/svg%3E")`;

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

    return (
        <section className="bg-white pb-8">
            <div className="container mx-auto px-4 md:px-8">
                <div className="mb-12 p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 flex flex-col lg:flex-row justify-between items-center gap-8 relative overflow-hidden" style={{ backgroundColor: '#F9FAFB' }}>
                    <div className="absolute inset-0 opacity-100" style={{ backgroundImage: bgPattern }}></div>

                    <div className="relative z-10 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-eduzin-dark flex items-center justify-center text-white font-serif font-bold italic text-xl shadow-lg shadow-eduzin-dark/20">K</div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold tracking-tight text-eduzin-dark leading-none">KelasInovatif</span>
                            <span className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Komunitas AI</span>
                        </div>
                    </div>

                    <div className="relative z-10 text-center lg:text-left">
                        <h3 className="text-2xl font-serif font-medium text-gray-900">
                            Newsletter Komunitas
                        </h3>
                    </div>

                    <form action={action} className="relative z-10 flex w-full max-w-md bg-white border border-gray-200 rounded-full p-1.5 pl-5 focus-within:ring-2 focus-within:ring-eduzin-dark/20 focus-within:border-eduzin-dark transition-all">
                        <Input
                            name="email"
                            type="email"
                            placeholder="Masukkan email Anda..."
                            className="flex-1 border-0 shadow-none text-sm bg-transparent placeholder-gray-400 text-gray-800 focus-visible:ring-0"
                            required
                        />
                        <Button
                            type="submit"
                            disabled={isPending}
                            className="bg-eduzin-dark text-white text-[10px] font-bold px-8 py-3 rounded-full hover:bg-opacity-90 shadow-md disabled:opacity-70"
                        >
                            {isPending ? "MEMPROSES..." : "BERLANGGANAN"}
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}
