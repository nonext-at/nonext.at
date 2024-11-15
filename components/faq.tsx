import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@radix-ui/react-accordion";
import { motion } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      question: "What technologies do you use?",
      answer: "We primarily use modern web technologies such as React, Next.js, and Tailwind CSS. We also have experience with various backend technologies and databases.",
    },
    {
      question: "How long does it typically take to complete a project?",
      answer: "Project timelines can vary depending on the scope and complexity. A simple website might take 2-4 weeks, while more complex projects could take 2-3 months or more.",
    },
    {
      question: "Do you offer ongoing support after the website is launched?",
      answer: "Yes, we offer maintenance packages to keep your website up-to-date, secure, and running smoothly after launch.",
    },
    {
      question: "Can you help with content creation for my website?",
      answer: "While we don't provide full content creation services, we can guide you on best practices and help integrate your content into the website design effectively.",
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
          Frequently Asked Questions
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
