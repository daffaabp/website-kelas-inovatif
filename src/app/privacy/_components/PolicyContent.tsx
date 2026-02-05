import React from 'react';
import { CheckCircle, Info, Mail, Download } from 'lucide-react';

export function PolicyContent() {
    return (
        <div className="lg:w-3/4">
            <div className="prose prose-lg prose-headings:font-serif prose-headings:text-privacy-primary dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-li:text-gray-600 dark:prose-li:text-gray-300 prose-a:text-privacy-primary dark:prose-a:text-white prose-strong:text-privacy-primary dark:prose-strong:text-white max-w-none">

                {/* Introduction */}
                <div className="scroll-mt-32 mb-16 border-b border-gray-100 dark:border-gray-800 pb-16" id="introduction">
                    <h2>1. Pengantar</h2>
                    <p>Selamat datang di Kelas Inovatif ("kami," "milik kami," atau "kita"). Kami menghormati privasi mahasiswa, fakultas, staf, dan pengunjung situs web kami. Kebijakan Privasi ini menjelaskan siapa kami, bagaimana kami mengumpulkan, berbagi, dan menggunakan informasi pribadi tentang Anda, dan bagaimana Anda dapat menggunakan hak privasi Anda.</p>
                    <p>Kebijakan ini berlaku untuk semua informasi pribadi yang kami kumpulkan melalui situs web dan platform pembelajaran online kami. Dengan mengakses atau menggunakan Layanan kami, Anda menandakan bahwa Anda telah membaca, memahami, dan menyetujui pengumpulan, penyimpanan, penggunaan, dan pengungkapan informasi pribadi Anda seperti yang dijelaskan dalam Kebijakan Privasi ini.</p>
                </div>

                {/* Information Collection */}
                <div className="scroll-mt-32 mb-16 border-b border-gray-100 dark:border-gray-800 pb-16" id="collection">
                    <h2>2. Informasi yang Kami Kumpulkan</h2>
                    <p>Informasi pribadi yang mungkin kami kumpulkan tentang Anda secara luas terbagi menjadi kategori berikut:</p>

                    <div className="bg-privacy-bg-light dark:bg-privacy-surface-dark p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm my-8 not-prose">
                        <h3 className="font-serif text-xl font-bold text-privacy-primary dark:text-white mb-6">
                            Informasi yang Anda berikan secara sukarela
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-privacy-accent w-5 h-5 mt-0.5 shrink-0" />
                                <div className="text-sm text-gray-600 dark:text-gray-300">
                                    <strong>Data Identitas:</strong> Termasuk nama depan, nama belakang, nama pengguna atau pengenal serupa, dan tanggal lahir.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-privacy-accent w-5 h-5 mt-0.5 shrink-0" />
                                <div className="text-sm text-gray-600 dark:text-gray-300">
                                    <strong>Data Kontak:</strong> Termasuk alamat penagihan, alamat pengiriman, alamat email, dan nomor telepon.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-privacy-accent w-5 h-5 mt-0.5 shrink-0" />
                                <div className="text-sm text-gray-600 dark:text-gray-300">
                                    <strong>Data Akademik:</strong> Termasuk catatan pendidikan sebelumnya, transkrip, minat penelitian, dan pengajuan proyek selama kursus Anda.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-privacy-accent w-5 h-5 mt-0.5 shrink-0" />
                                <div className="text-sm text-gray-600 dark:text-gray-300">
                                    <strong>Data Keuangan:</strong> Termasuk detail rekening bank dan kartu pembayaran (diproses melalui gateway pembayaran pihak ketiga yang aman).
                                </div>
                            </li>
                        </ul>
                    </div>

                    <p>Kami juga secara otomatis mengumpulkan informasi tertentu ketika Anda mengunjungi, menggunakan, atau menavigasi Situs Web. Informasi ini tidak mengungkapkan identitas spesifik Anda (seperti nama atau informasi kontak Anda) tetapi mungkin termasuk informasi perangkat dan penggunaan, seperti alamat IP Anda, karakteristik browser dan perangkat, sistem operasi, preferensi bahasa, URL referrer, nama perangkat, negara, lokasi, informasi tentang bagaimana dan kapan Anda menggunakan Situs Web kami, dan informasi teknis lainnya.</p>
                </div>

                {/* How We Use Data */}
                <div className="scroll-mt-32 mb-16 border-b border-gray-100 dark:border-gray-800 pb-16" id="usage">
                    <h2>3. Bagaimana Kami Menggunakan Data Anda</h2>
                    <p>Kami menggunakan informasi pribadi yang dikumpulkan melalui Situs Web kami untuk berbagai tujuan bisnis yang dijelaskan di bawah ini. Kami memproses informasi pribadi Anda untuk tujuan ini berdasarkan kepentingan bisnis yang sah kami, untuk memasuki atau melaksanakan kontrak dengan Anda, dengan persetujuan Anda, dan/atau untuk kepatuhan dengan kewajiban hukum kami.</p>
                    <ul>
                        <li><strong>Untuk memfasilitasi pembuatan akun dan proses masuk:</strong> Jika Anda memilih untuk menghubungkan akun Anda dengan kami ke akun pihak ketiga (seperti akun Google atau Facebook Anda), kami menggunakan informasi yang Anda izinkan untuk kami kumpulkan dari pihak ketiga tersebut untuk memfasilitasi pembuatan akun dan proses masuk.</li>
                        <li><strong>Untuk memberikan layanan akademik:</strong> Kami menggunakan data Anda untuk menilai tugas, melacak kemajuan akademik, dan menerbitkan sertifikasi atau gelar.</li>
                        <li><strong>Untuk meminta umpan balik:</strong> Kami dapat menggunakan informasi Anda untuk meminta umpan balik dan menghubungi Anda tentang penggunaan Situs Web kami.</li>
                        <li><strong>Untuk melindungi Layanan kami:</strong> Kami dapat menggunakan informasi Anda sebagai bagian dari upaya kami untuk menjaga Situs Web kami tetap aman dan terlindungi (misalnya, untuk pemantauan dan pencegahan penipuan).</li>
                    </ul>
                </div>

                {/* Data Security */}
                <div className="scroll-mt-32 mb-16 border-b border-gray-100 dark:border-gray-800 pb-16" id="security">
                    <h2>4. Penyimpanan &amp; Keamanan Data</h2>
                    <p>Kami telah menerapkan langkah-langkah keamanan teknis dan organisasi yang sesuai yang dirancang untuk melindungi keamanan informasi pribadi apa pun yang kami proses. Namun, terlepas dari perlindungan dan upaya kami untuk mengamankan informasi Anda, tidak ada transmisi elektronik melalui Internet atau teknologi penyimpanan informasi yang dapat dijamin 100% aman.</p>
                    <p>Semua catatan akademik disimpan dalam database terenkripsi dengan kontrol akses ketat yang terbatas pada fakultas dan staf administrasi yang berwenang.</p>
                </div>

                {/* Cookies & Tracking */}
                <div className="scroll-mt-32 mb-16 border-b border-gray-100 dark:border-gray-800 pb-16" id="cookies">
                    <h2>5. Cookie &amp; Teknologi Pelacakan</h2>
                    <p>Kami dapat menggunakan cookie dan teknologi pelacakan serupa (seperti web beacon dan pixel) untuk mengakses atau menyimpan informasi. Informasi spesifik tentang bagaimana kami menggunakan teknologi tersebut dan bagaimana Anda dapat menolak cookie tertentu diatur dalam Pemberitahuan Cookie kami.</p>

                    <div className="bg-privacy-primary/5 dark:bg-privacy-primary/20 p-6 rounded-xl border-l-4 border-privacy-primary dark:border-privacy-accent not-prose my-6">
                        <p className="text-sm text-privacy-primary dark:text-white font-medium mb-0">
                            <span className="font-bold mb-1 flex items-center gap-2">
                                <Info className="w-4 h-4" /> Catatan tentang Analitik Pihak Ketiga:
                            </span>
                            Kami menggunakan Google Analytics untuk membantu kami memahami bagaimana pelanggan kami menggunakan Situs. Anda dapat membaca lebih lanjut tentang bagaimana Google menggunakan Informasi Pribadi Anda di sini: https://www.google.com/intl/en/policies/privacy/.
                        </p>
                    </div>
                </div>

                {/* Your Rights */}
                <div className="scroll-mt-32 mb-16 border-b border-gray-100 dark:border-gray-800 pb-16" id="rights">
                    <h2>6. Hak Anda</h2>
                    <p>Tergantung pada lokasi Anda, Anda mungkin memiliki hak tertentu terkait informasi pribadi Anda, termasuk:</p>
                    <ul>
                        <li>Hak untuk meminta akses dan memperoleh salinan informasi pribadi Anda.</li>
                        <li>Hak untuk meminta perbaikan atau penghapusan informasi pribadi Anda.</li>
                        <li>Hak untuk membatasi pemrosesan informasi pribadi Anda.</li>
                        <li>Hak untuk menolak pemrosesan informasi pribadi Anda.</li>
                        <li>Hak untuk portabilitas data.</li>
                    </ul>
                    <p>Jika Anda adalah penduduk di Kawasan Ekonomi Eropa (EEA) atau Inggris Raya (UK) dan Anda percaya kami memproses informasi pribadi Anda secara tidak sah, Anda juga memiliki hak untuk mengajukan keluhan kepada otoritas pengawas perlindungan data lokal Anda.</p>
                </div>

                {/* Contact Us */}
                <div className="scroll-mt-32" id="contact">
                    <h2>7. Hubungi Kami</h2>
                    <p>Jika Anda memiliki pertanyaan atau komentar tentang kebijakan ini, Anda dapat mengirim email kepada kami di <a href="mailto:aiindonesiakreatif@gmail.com">aiindonesiakreatif@gmail.com</a> atau melalui pos ke:</p>

                    <div className="not-prose mt-8 p-8 bg-privacy-surface-light dark:bg-privacy-surface-dark border border-gray-200 dark:border-gray-800 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-lg">
                        <div>
                            <h4 className="font-serif text-2xl text-privacy-primary dark:text-white mb-2">Kantor Kelas Inovatif</h4>
                            <address className="not-italic text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                <p className="font-bold">Kelas Inovatif Community</p>
                                <p>Jl Raya Mujur No 46 Kroya</p>
                                <p>Cilacap, Jawa Tengah</p>
                                <p>Indonesia</p>
                            </address>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                            <a className="flex items-center justify-center gap-2 bg-privacy-primary hover:bg-privacy-primary-light text-white px-6 py-3 rounded-full text-sm font-bold transition-colors" href="mailto:aiindonesiakreatif@gmail.com">
                                <Mail className="w-4 h-4" />
                                Email Kami
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
