
import React from 'react';

export function InstructorList() {
    return (
        <section className="py-24 bg-white dark:bg-private-surface-dark transition-colors duration-300" id="instructors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2 block">Pilih Mentor Anda</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-private-primary dark:text-white">Instruktur Tersedia</h2>
                    </div>
                    <p className="md:w-1/3 text-gray-500 dark:text-gray-400 mt-4 md:mt-0 text-sm leading-relaxed">
                        Jelajahi daftar profesional berkualitas kami yang siap membantu Anda mencapai tujuan akademik spesifik Anda.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Dr. Sarah Jen */}
                    <div className="group bg-private-bg-light dark:bg-private-bg-dark rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 flex flex-col h-full">
                        <div className="relative h-64 overflow-hidden">
                            <div className="absolute inset-0 bg-private-primary/20 group-hover:bg-private-primary/10 transition-colors z-10"></div>
                            <img alt="Research Background" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 blur-[2px] group-hover:blur-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLD8YcJLZ4QsPQBsoBEfUQUtXVq-6d-J7Uz0srwRM-5ilNDWApQ3x6-gvrxzpt6-74xmt8zmxlzOs0al-HT7Nrp-uA5BvuZ6CIb6nkR9muDea9XeXgbpmPMdSVoYMjyfEcJ0t7mpNzav1gTaoNbkGTx3BQ7ieXmgFWG-x9AJvBE0UmNk47j2JeDWroouvjKLx4662NDnlNh-L9dbQmDvMujwIH-ML9oBR9Mbc79vU0R1haVhPRpIkfDa5WcNHWM_1rPRNGgLkQOKM" />
                            <div className="absolute -bottom-10 left-8 z-20">
                                <img alt="Dr. Sarah Jen" className="w-24 h-24 rounded-full border-4 border-white dark:border-private-surface-dark object-cover shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzShG3o5Q2NxBgFG6in_mwqPzcQBhop42O1olN4-zYu3bLN-juTm_7yA2pqgTC6oo2NFszsWMKb-evQvfxwwlMLHUzA5DLnN4h4TNzLl3wckTJsnhzFIbAuv2o1n1v3bNdgozq2RXghXq922263D17kOMkGAuSgv-pKxtc5eQTKG5-_2QNxNk22rLMC7a88VBP_d0bNJovLLUptP4pPfpdU0Tm_72BpXEMVQ8pxmvFt_DUoOvXtM12WzmLlNnVb62lo0_5XhOgsHM" />
                            </div>
                        </div>
                        <div className="p-8 pt-16 flex-grow flex flex-col">
                            <div className="mb-2">
                                <h3 className="font-serif text-2xl text-private-primary dark:text-white">Dr. Sarah Jen</h3>
                                <p className="text-sm font-bold text-private-accent dark:text-green-400 uppercase tracking-wide">Metodologi Penelitian</p>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow text-sm leading-relaxed">
                                Spesialis dalam analisis kuantitatif dan manajemen kutipan menggunakan Scite. Sempurna untuk kandidat PhD yang menyempurnakan tesis mereka.
                            </p>
                            <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
                                <div>
                                    <p className="text-lg font-bold text-private-primary dark:text-white">$120<span className="text-xs font-normal text-gray-500">/jam</span></p>
                                </div>
                                <button className="bg-private-primary hover:bg-private-primary-light text-white text-xs font-bold px-4 py-2 rounded-full transition-colors">
                                    Pesan Sesi
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* James Wu */}
                    <div className="group bg-private-bg-light dark:bg-private-bg-dark rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 flex flex-col h-full">
                        <div className="relative h-64 overflow-hidden">
                            <div className="absolute inset-0 bg-private-primary/20 group-hover:bg-private-primary/10 transition-colors z-10"></div>
                            <img alt="AI Background" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 blur-[2px] group-hover:blur-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA1EkTMCzSQ8kwdCwSpgmWOXEfH3tI0ndy-SdOzcutz25Jy9Xho2rAKFBElz7C-yd9Z5W9g_oRSFE5241qScEtpzZyy-nDmRV3mxEi4JQhn5ktiU_Qw60AfeZTLm_cgJqBHsmoIY4zaasINifBoSmytMKActV87KCTgNqrw7SxreDUf0E2QahG8PNLa4pMuCOt90GItU0mhjSkjplWUQgKkltZAyAY1e1iQWq3C7iioBh-b7zCbs0HrVawj36ySfyYBV-_1jCsbEw" />
                            <div className="absolute -bottom-10 left-8 z-20">
                                <img alt="James Wu" className="w-24 h-24 rounded-full border-4 border-white dark:border-private-surface-dark object-cover shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGo9rgNBWwfst_lAwWeI0PDYO5EkcP7Ev5J23qW6MyowqxBQ7fYxo3rPnvM5ypiaI6vlliGwDZKn6zkeZd3X-Ahwffel9vrHEnonlszxWDEjQWS_U5mq09CBP0JiMjFgBSeXWMRje7rwZsJWC1uVn7R88NsepxTUT5TFYNY7tsFYS5ac6-T3sJV_SfAkyS7jLrMSKG3LIJ85jUF9Lc6g7VzyZYivW1Hr-MV-YeoVkuYJS3ogqtawX5aXN1rNF-3oLUPd3rDyk8GUE" />
                            </div>
                        </div>
                        <div className="p-8 pt-16 flex-grow flex flex-col">
                            <div className="mb-2">
                                <h3 className="font-serif text-2xl text-private-primary dark:text-white">James Wu</h3>
                                <p className="text-sm font-bold text-private-accent dark:text-green-400 uppercase tracking-wide">Alat Penelitian AI</p>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow text-sm leading-relaxed">
                                Ahli dalam memanfaatkan NotebookLM dan alat AI lainnya untuk penelitian berbasis sumber, sintesis catatan, dan sesi brainstorming.
                            </p>
                            <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
                                <div>
                                    <p className="text-lg font-bold text-private-primary dark:text-white">$150<span className="text-xs font-normal text-gray-500">/jam</span></p>
                                </div>
                                <button className="bg-private-primary hover:bg-private-primary-light text-white text-xs font-bold px-4 py-2 rounded-full transition-colors">
                                    Pesan Sesi
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Emily Tran */}
                    <div className="group bg-private-bg-light dark:bg-private-bg-dark rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 flex flex-col h-full">
                        <div className="relative h-64 overflow-hidden">
                            <div className="absolute inset-0 bg-private-primary/20 group-hover:bg-private-primary/10 transition-colors z-10"></div>
                            <img alt="Coding Background" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 blur-[2px] group-hover:blur-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9wK7W8VN3Xswqk9do6k4bNOsF5eGYM9355Bj_sUHCXZHch2auyTnUfxM38h61UgzOsxlbLKPKtmULFwttVn12ufcTEsB9joMiUs_FaP4rSMH3x0twTud9nO2S36YKdoos73ZMJi3uj7ieuZ0eW5inAcA8WblnxKUVsaei5SiMWz8GxsBfJ9SeCmgtGvHCq-Yj8vDCxWbpwTe-lE-AVUy_7RNBMI3v_CVgV9FekYh4x5pLDje9NOYAwW9M1L2OC2qvWkmJlVX8gUk" />
                            <div className="absolute -bottom-10 left-8 z-20">
                                <img alt="Emily Tran" className="w-24 h-24 rounded-full border-4 border-white dark:border-private-surface-dark object-cover shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2NrEqTUmknVRpFVOGody1k0i7TFmA7sJza9UBiyVa0xI6Ci-mEbSWy0a5o5WY9LrE6FFOUTGt96aPwqv3do37HHKvmbm45WYbZCRzZTvaq8t_bh2w-OnAFhkVRUTJngL1dRkDHo6qu9237sBP38ISxd7Ryo6XqVJ4oD0kmt9ZT6gdXjcaCVVLMoLM0Sg50mHKG2T8S2mxUl5-MGHzrux7TQqBYawIMHofZTXOULyfnRYsguoWITCkuaw4hScLI1FjbJoTlCP2oac" />
                            </div>
                        </div>
                        <div className="p-8 pt-16 flex-grow flex flex-col">
                            <div className="mb-2">
                                <h3 className="font-serif text-2xl text-private-primary dark:text-white">Emily Tran</h3>
                                <p className="text-sm font-bold text-private-accent dark:text-green-400 uppercase tracking-wide">Data Science &amp; Coding</p>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow text-sm leading-relaxed">
                                Bimbingan langsung untuk coding berbantuan AI menggunakan Cursor. Ideal untuk membangun alat akademik atau visualisasi data kompleks.
                            </p>
                            <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
                                <div>
                                    <p className="text-lg font-bold text-private-primary dark:text-white">$135<span className="text-xs font-normal text-gray-500">/jam</span></p>
                                </div>
                                <button className="bg-private-primary hover:bg-private-primary-light text-white text-xs font-bold px-4 py-2 rounded-full transition-colors">
                                    Pesan Sesi
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
