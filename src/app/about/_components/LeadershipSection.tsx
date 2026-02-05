import { Mail, Link as LinkIcon } from "lucide-react";

const leaders = [
    {
        name: "Dr. James Wilson",
        role: "Rektor",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBXULrPcgGm6GpZwxLJOHPVyUUaxX5jI5BTyVL9ctG8qg76UYun50JLnhZeWhbmBVgLxa12Qd3Po9A1-EhVCdAUHSj0aEKwbkAGlt6Zt3oBmtJPTAeQoRKZq0LBV_w9TqVqE791bQ5hlZ46BdydHPwnyekCKKfLVj331K6YL2tKvgMwHeaNEGb6HoPMLPlsBbPQUP3LMNydJg2TP1LMuXTo9hc7jV3UR26ALlreMyNEt7_W5rXOWAvWMyn38NqpxTnlA4eYXlQmocY",
    },
    {
        name: "Sarah Jenkins",
        role: "Dekan Ilmu Pengetahuan",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBMKsIJjvMKluLjnamlH3Wtvm4y2AF60YkjhUfvnEA30JsPa7ZglO8hSCbhGBm09Hy9AAItkqOLtnlu-WRZxdCCbzLDKV5bZw_YEbe5R0VrTPiTrL8T8lV8MxkMfdz2COUkvpJSEM3IcrMb8zO-N_YR-W28nu5GGW9W0-ImLOAmhFIXCOykbi-L9oxKILBObhDxQCKBXsIuqNNYnjDVT7OLEk5f0g5ZFeIbSwz1zTQtVQrnrWdfF-wW2qppaHVrjTLOLWfOfQIv7NM",
    },
    {
        name: "Michael Chen",
        role: "Kepala Inovasi",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB303SHli64vgyn3hSn-HVWw1nMndBOf7mjGf4bC7l_mgd4lLWtif8eC3B5qnl5FNB7BcNX9lIOz8l9or93Nr-GIeSeQynR0j2ghUZIjuTmhFnnwAw8BQOxNITR0yfGI2dJy2TWt5-VHmZ70WGd4AVVZQB2jY9MS1pDOCx7qXHq6UiIIGjwTkLd07bygkiAXzVEguafmf_5pzQfEgoLCRzk7fK6a33gCrCvIfvQoHZTLAyTUaUcRhu8xVpE18sk60rkptOkDAEOe6M",
    },
    {
        name: "Robert Fox",
        role: "Dekan Seni",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDhZ5nXnFRhW9qmtdMY0xywKPu6Rr5DQpyclBVsjv3HEBO9KlFauYKWVA6992O8a7Hdc5byC-JQYM5VAHJGhT-2ogGJeyhU75BJDtO3Ir4Zzh3tLj2E81oHQM6vssDNS-3QZ-6ZkdAsN-WJSGBNg-RGHrC1xv3Sg14VHV8txSkJZNU5vim1yVnBTaeHNFokd_YjqRAQmvApwe33NG9kMwubma_4m7uRxHPzWK1T-7LpAHfj9BcYsSVdNPCm-0ST9OCzIF4q2UZXS7M",
    },
];

export function LeadershipSection() {
    return (
        <section className="py-20 bg-about-surface-light dark:bg-about-surface-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="font-serif text-4xl font-bold text-about-primary dark:text-white">
                            Kepemimpinan Universitas
                        </h2>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Kenali para visioner yang memandu institusi kami.
                        </p>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <a
                            className="text-about-primary dark:text-white font-medium hover:underline"
                            href="#"
                        >
                            Lihat semua fakultas
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {leaders.map((leader, index) => (
                        <div key={index} className="group">
                            <div className="relative overflow-hidden rounded-xl mb-4 aspect-3/4">
                                <img
                                    alt={leader.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    src={leader.image}
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <div className="flex space-x-2">
                                        <a className="text-white hover:text-gray-200" href="#">
                                            <Mail className="w-5 h-5" />
                                        </a>
                                        <a className="text-white hover:text-gray-200" href="#">
                                            <LinkIcon className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <h3 className="font-serif text-lg font-bold text-about-primary dark:text-white">
                                {leader.name}
                            </h3>
                            <p className="text-sm text-about-primary font-medium">{leader.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
