import React from 'react';
import Image from 'next/image';
import { Users } from 'lucide-react';

export function ClubShowcase() {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="max-w-2xl">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Grup Riset & Fokus</h2>
                        <p className="text-gray-600 dark:text-gray-400">Temukan rekan kolaborasi satu frekuensi. Dari fokus publikasi Scopus hingga eksplorasi tools AI terbaru.</p>
                    </div>
                    <div className="mt-6 md:mt-0">
                        <button className="bg-white dark:bg-community-card-dark text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition cursor-pointer">
                            Lihat Semua Grup Riset
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <a className="group block overflow-hidden rounded-xl bg-white dark:bg-community-card-dark shadow hover:shadow-lg transition-all" href="#">
                        <div className="relative h-48 overflow-hidden">
                            <Image alt="Publikasi Ilmiah" className="object-cover transform group-hover:scale-110 transition duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXKowsKhp3fLnHlnCzBjiQmZs_zOeHotnMvGjIEdXSYOaII1AQ1dQbT5q1QK6UbNmmelguHcWedsMWy1L6W4jfaYoojWvSv3gUFDPzydCcOq95MALerMVxkK6U0dmyLqE6lhOwVrvZVcDe8FKUZX4GvZ3TPrxuU_KWEaBYImK8YQBMXFzCZuUzSjEXCxD3M6WtlHpgA4_zWv2l_r3HfeZgFyz8gjIDaYMYwhFsZYiTf7g4Dc05QEVRjM9oIgLuJzi2VvMBLqn13Hg" fill />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                            <span className="absolute top-4 left-4 bg-community-primary text-white text-xs font-bold px-2 py-1 rounded">Publikasi</span>
                        </div>
                        <div className="p-5">
                            <h3 className="font-serif text-lg font-bold text-gray-900 dark:text-white mb-2">Klinik Jurnal</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">Sharing session strategi menembus Jurnal Internasional Bereputasi (Scopus/WoS).</p>
                            <div className="mt-4 flex items-center text-xs text-gray-500 dark:text-gray-400">
                                <Users className="h-4 w-4 mr-1" /> 1.2k Anggota
                            </div>
                        </div>
                    </a>
                    <a className="group block overflow-hidden rounded-xl bg-white dark:bg-community-card-dark shadow hover:shadow-lg transition-all" href="#">
                        <div className="relative h-48 overflow-hidden">
                            <Image alt="AI Research" className="object-cover transform group-hover:scale-110 transition duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg8g2f0HOZvnmrqB447oXzXxPpILLwwn6f6ZzC6rgvpXheKBnRy89eBkaaksXGVCELV8tKDuABG3IwILkklbCxVWIokNdLk_G9_pmfsf6D8rq82KuP4vDw8fQ9kOEfic4IsqZYnJ9z6vvgMEE2vagTnE3C9kB2FldBtlBy9wItfwHXvBL9nBIAbb2Vpq-aWLnSAJ_eR1ZU2AIt8OrkpA7JYBL0UdZdAD3XWVgK8E813RMM-MIjwIV6TeoYUWZY9Bh1Y3mHVhSZpTA" fill />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                            <span className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded">Teknologi</span>
                        </div>
                        <div className="p-5">
                            <h3 className="font-serif text-lg font-bold text-gray-900 dark:text-white mb-2">AI for Academic</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">Eksplorasi penggunaan tools AI terbaru untuk efisiensi riset dan penulisan.</p>
                            <div className="mt-4 flex items-center text-xs text-gray-500 dark:text-gray-400">
                                <Users className="h-4 w-4 mr-1" /> 2.5k Anggota
                            </div>
                        </div>
                    </a>
                    <a className="group block overflow-hidden rounded-xl bg-white dark:bg-community-card-dark shadow hover:shadow-lg transition-all" href="#">
                        <div className="relative h-48 overflow-hidden">
                            <Image alt="Social Science" className="object-cover transform group-hover:scale-110 transition duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrqeZF7Qi7pAi144VGIU_G34Vn94uIGCGAZEabQsUjbsM0ZwQklaVDPAN3rbB6HuxGLYEvJsPu1uE7R9cRr3j5Ryftpbwk5g9zPHrzkaESyVweX7l5dYHKUYVSCMl-PSm606dXht6hjffrzF5Hx9b4cg9KgOW82_Xuz-SXViaYAkPi30qo4migyZTMbb_NDwGUaFes-p7AXtWkhm5Q9RVXwLBh83KhdMBsuCJtLS47gBrh_UkWndmec6-iBbu779mpKXf1XkG26_Y" fill />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                            <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">Sosial Humaniora</span>
                        </div>
                        <div className="p-5">
                            <h3 className="font-serif text-lg font-bold text-gray-900 dark:text-white mb-2">Social Hub</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">Diskusi is-isu sosial terkini dan metodologi kualitatif/kuantitatif.</p>
                            <div className="mt-4 flex items-center text-xs text-gray-500 dark:text-gray-400">
                                <Users className="h-4 w-4 mr-1" /> 850 Anggota
                            </div>
                        </div>
                    </a>
                    <a className="group block overflow-hidden rounded-xl bg-white dark:bg-community-card-dark shadow hover:shadow-lg transition-all" href="#">
                        <div className="relative h-48 overflow-hidden">
                            <Image alt="Health Science" className="object-cover transform group-hover:scale-110 transition duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi0_48Xtw0gEgCsL32rgj_nJ1871XPoQ0CQBBz8sKdkpe_oXrEzMecO1wyuxph-yWLb6OYJTQ_7lwlkdIlhVP_nolZ7oG5DKJ8tgrzlmtO29E7RY2R6MsWOtZuPNkaF3TSS0lr4xG3pPxCVYH1S8dypwmDCwIJ7KEq6kZpt8ireLnp5RBfRk6lhQbwT0h5LzYog_KXURN2ztcQwR_EXbRBVqze9P0V2-DO2K27cWznZqWLzUc1ND646cLx4m9JXNy-qIjcAKk6zI0" fill />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                            <span className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">Sains & Kesehatan</span>
                        </div>
                        <div className="p-5">
                            <h3 className="font-serif text-lg font-bold text-gray-900 dark:text-white mb-2">Science Connect</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">Kolaborasi riset bidang kesehatan, teknik, dan sains murni.</p>
                            <div className="mt-4 flex items-center text-xs text-gray-500 dark:text-gray-400">
                                <Users className="h-4 w-4 mr-1" /> 920 Anggota
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
