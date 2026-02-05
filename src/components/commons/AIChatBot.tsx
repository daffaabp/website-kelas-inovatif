"use client";

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChatMessage } from '@/app/homepage/types';

// Stub function to simulate AI response (UI-only mode)
async function sendMessageStub(): Promise<string> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    return "Maaf, AI assistant belum aktif saat ini. Hubungi admin untuk konfigurasi API. Sementara itu, silakan jelajahi halaman kami atau hubungi tim admissions langsung!";
}

export function AIChatBot() {
    const [isOpen, setIsOpen] = useState(false);

    // Initialize messages from localStorage if available
    const [messages, setMessages] = useState<ChatMessage[]>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('kelasinovatif_chat_history');
            if (saved) {
                try {
                    return JSON.parse(saved);
                } catch (e) {
                    console.error("Failed to parse chat history", e);
                }
            }
        }
        return [{ role: 'model', text: 'Halo! Saya adalah asisten virtual KelasInovatif. Tanyakan kepada saya tentang kursus kami, kehidupan kampus, atau penerimaan mahasiswa baru.' }];
    });

    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // Save messages to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('kelasinovatif_chat_history', JSON.stringify(messages));
    }, [messages]);

    // Scroll to bottom when messages change or loading state changes
    useEffect(() => {
        scrollToBottom();
    }, [messages, loading, isOpen]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg: ChatMessage = { role: 'user', text: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setLoading(true);

        const responseText = await sendMessageStub();

        const modelMsg: ChatMessage = { role: 'model', text: responseText };
        setMessages(prev => [...prev, modelMsg]);
        setLoading(false);
    };

    const clearChat = () => {
        const initialMsg: ChatMessage = { role: 'model', text: 'Halo! Saya adalah asisten virtual KelasInovatif. Tanyakan kepada saya tentang kursus kami, kehidupan kampus, atau penerimaan mahasiswa baru.' };
        setMessages([initialMsg]);
        localStorage.removeItem('kelasinovatif_chat_history');
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 font-sans">
            {!isOpen && (
                <Button
                    onClick={() => setIsOpen(true)}
                    size="icon-lg"
                    className="bg-eduzin-dark text-white w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform hover:bg-emerald-900"
                >
                    <MessageCircle size={28} />
                </Button>
            )}

            {isOpen && (
                <div className="bg-white w-80 md:w-96 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col h-[500px]">
                    {/* Header */}
                    <div className="bg-eduzin-dark text-white p-4 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <Sparkles size={16} />
                            <h3 className="font-bold text-sm">KelasInovatif AI Assistant</h3>
                        </div>
                        <div className="flex items-center gap-3">
                            <Button variant="ghost" size="icon-sm" onClick={clearChat} className="hover:text-gray-300 hover:bg-transparent text-white h-8 w-8" title="Clear Chat">
                                <Trash2 size={16} />
                            </Button>
                            <Button variant="ghost" size="icon-sm" onClick={() => setIsOpen(false)} className="hover:text-gray-300 hover:bg-transparent text-white h-8 w-8">
                                <X size={18} />
                            </Button>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-3 rounded-lg text-sm ${msg.role === 'user'
                                        ? 'bg-eduzin-dark text-white rounded-br-none'
                                        : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
                                    }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {loading && (
                            <div className="flex justify-start">
                                <div className="bg-white border border-gray-200 p-4 rounded-2xl rounded-bl-none shadow-sm flex gap-1 items-center">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
                        <Input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Ask about courses..."
                            className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm border-0 focus-visible:ring-1 focus-visible:ring-eduzin-dark"
                        />
                        <Button
                            onClick={handleSend}
                            disabled={loading || !input.trim()}
                            size="icon"
                            className="w-9 h-9 bg-eduzin-dark text-white rounded-full hover:bg-emerald-900"
                        >
                            <Send size={16} />
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
