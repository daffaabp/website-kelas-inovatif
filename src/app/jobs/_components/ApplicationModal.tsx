"use client";

import { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Upload, FileText } from 'lucide-react';

interface ApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
    jobTitle: string;
    jobCategory: string;
}

export function ApplicationModal({ isOpen, onClose, jobTitle, jobCategory }: ApplicationModalProps) {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        linkedin: '',
        portfolio: '',
        coverLetter: '',
        resume: null as File | null
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        onClose();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData({ ...formData, resume: e.target.files[0] });
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-serif text-eduzin-dark dark:text-white">
                        Lamar Posisi {jobTitle}
                    </DialogTitle>
                    <DialogDescription asChild>
                        <div>
                            <span className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full mt-2">
                                {jobCategory}
                            </span>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                                Silakan lengkapi formulir di bawah ini untuk mengajukan lamaran Anda.
                            </p>
                        </div>
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                    <div className="space-y-4">
                        <h3 className="font-semibold text-eduzin-dark dark:text-white">Informasi Pribadi</h3>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Nama Lengkap <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                required
                                value={formData.fullName}
                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-eduzin-dark dark:bg-gray-800 dark:text-white focus:border-transparent transition-all"
                                placeholder="Masukkan nama lengkap Anda"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-eduzin-dark dark:bg-gray-800 dark:text-white focus:border-transparent transition-all"
                                    placeholder="Masukkan email Anda"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Nomor Telepon <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-eduzin-dark dark:bg-gray-800 dark:text-white focus:border-transparent transition-all"
                                    placeholder="081xxxxxxxxx"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold text-eduzin-dark dark:text-white">Tautan Profesional</h3>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Profil LinkedIn <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="url"
                                required
                                value={formData.linkedin}
                                onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                                className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-eduzin-dark dark:bg-gray-800 dark:text-white focus:border-transparent transition-all"
                                placeholder="https://linkedin.com/in/nama-anda"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Portofolio atau Situs Web <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="url"
                                required
                                value={formData.portfolio}
                                onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                                className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-eduzin-dark dark:bg-gray-800 dark:text-white focus:border-transparent transition-all"
                                placeholder="https://portofolio-anda.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold text-eduzin-dark dark:text-white">Dokumen</h3>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Resume / CV <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    type="file"
                                    required
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleFileChange}
                                    className="hidden"
                                    id="resume-upload"
                                />
                                <label
                                    htmlFor="resume-upload"
                                    className="flex items-center justify-center gap-2 w-full px-4 py-3 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg hover:border-eduzin-dark dark:hover:border-eduzin-dark cursor-pointer transition-all bg-gray-50 dark:bg-gray-800"
                                >
                                    {formData.resume ? (
                                        <>
                                            <FileText className="w-5 h-5 text-eduzin-dark" />
                                            <span className="text-sm text-gray-700 dark:text-gray-300">{formData.resume.name}</span>
                                        </>
                                    ) : (
                                        <>
                                            <Upload className="w-5 h-5 text-gray-400" />
                                            <span className="text-sm text-gray-500 dark:text-gray-400">Klik untuk mengunggah atau seret dan lepas</span>
                                        </>
                                    )}
                                </label>
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Format PDF, DOC, atau DOCX. Maksimal 5 MB.</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Surat Lamaran <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                required
                                value={formData.coverLetter}
                                onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                                rows={6}
                                className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-eduzin-dark dark:bg-gray-800 dark:text-white focus:border-transparent transition-all resize-none"
                                placeholder="Jelaskan kualifikasi dan motivasi Anda untuk posisi ini secara singkat."
                            />
                        </div>
                    </div>

                    <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                        >
                            Batal
                        </button>
                        <button
                            type="submit"
                            className="flex-1 px-6 py-3 bg-eduzin-dark hover:bg-eduzin-dark/90 text-white rounded-full font-medium transition-all shadow-lg shadow-eduzin-dark/20"
                        >
                            Kirim Lamaran
                        </button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
