import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@radix-ui/react-accordion";
import { motion } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      question: "Welche Technologien verwenden Sie?",
      answer: "Wir verwenden hauptsächlich moderne Webtechnologien wie React, Next.js und Tailwind CSS. Darüber hinaus haben wir Erfahrung mit verschiedenen Backend-Technologien und Datenbanken.",
    },
    {
      question: "Wie lange dauert es in der Regel, ein Projekt abzuschließen?",
      answer: "Die Projektlaufzeit kann je nach Umfang und Komplexität variieren. Eine einfache Website kann 2-4 Wochen dauern, während komplexere Projekte 2-3 Monate oder länger benötigen können.",
    },
    {
      question: "Bieten Sie nach dem Start der Website fortlaufende Unterstützung an?",
      answer: "Ja, wir bieten Wartungspakete an, um Ihre Website nach dem Start aktuell, sicher und reibungslos zu halten.",
    },
    {
      question: "Können Sie bei der Erstellung von Inhalten für meine Website helfen?",
      answer: "Während wir keine vollständigen Inhalte erstellen, können wir Sie zu Best Practices beraten und Ihre Inhalte effektiv in das Webdesign integrieren.",
    },
  ];

  return (
    <section id="faq" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100 text-black">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-5xl font-extrabold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Häufig gestellte Fragen
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <AccordionTrigger className="w-full text-lg font-medium py-4 px-6 flex justify-between items-center text-gray-800 hover:bg-gray-100 transition-all duration-200">
                  {faq.question}
                  <svg
                    className="ml-2 w-5 h-5 transform transition-transform duration-200 accordion-chevron"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
