'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqs } from '@/content/home';

export function FaqSection() {
  return (
    <section
      className="section container faq-section"
      id="faqs"
      aria-labelledby="faq-heading"
    >
      <div>
        <span className="eyebrow">A LITTLE MORE CLARITY</span>
        <h2 id="faq-heading">
          Good questions.
          <br />
          Clear answers.
        </h2>
        <p>Getting started with security shouldn’t feel complicated.</p>
        <a href="#contact" className="text-link">
          Have another question? Let’s talk ↗
        </a>
      </div>
      <Accordion className="faq-list">
        {faqs.map((faq, index) => (
          <AccordionItem key={faq.question} value={index}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
