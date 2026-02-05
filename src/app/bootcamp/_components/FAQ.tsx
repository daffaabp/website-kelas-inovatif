"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Apakah pemula dalam penelitian boleh ikut?",
    answer: "Tentu saja. Materi disusun dari fundamental (Level 0) hingga teknik advanced. Kami menggunakan bahasa yang mudah dipahami bahkan bagi peneliti pemula.",
  },
  {
    question: "Software apa saja yang perlu disiapkan?",
    answer: "Peserta disarankan menginstal software olah data (SPSS/NVivo/SmartPLS) sesuai preferensi, serta memiliki akun tools AI dasar (ChatGPT/Claude/Perplexity) yang akan kami pandu penggunaannya.",
  },
  {
    question: "Apakah ada rekaman jika saya berhalangan hadir di satu sesi?",
    answer: "Ya, seluruh sesi akan direkam dan dibagikan kepada peserta. Anda memiliki akses seumur hidup (Lifetime Access) terhadap rekaman tersebut.",
  },
  {
    question: "Apakah dijamin pasti terbit di Scopus/Sinta?",
    answer: "Publikasi adalah proses dua arah antara penulis dan jurnal. Kami tidak menjamin penerimaan (karena itu wewenang editor jurnal), namun kami menjamin naskah Anda akan memiliki standar kualitas yang layak untuk disubmit ke jurnal bereputasi.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 bg-[#FDFBF7]">
      <div className="container px-4 md:px-6 mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1A3C34] mb-12 text-center">
          Frequently Asked Questions
        </h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#1A3C34]/10">
              <AccordionTrigger className="text-left text-lg font-medium text-[#1A3C34] hover:no-underline hover:text-bootcamp-primary-light py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
