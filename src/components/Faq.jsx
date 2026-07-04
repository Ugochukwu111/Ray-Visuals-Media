import React from "react";
import { Plus, Minus } from "lucide-react";
import './Faq.css' // Or whatever icon package you use

export default function Faq() {
  const faqs = [
    {
      id: 1,
      question: "Do you travel for international and cross-border videography projects?",
      answer:
        "Absolutely. We frequently deploy our visual production crew globally for luxury destination weddings, foreign corporate conferences, and documentary shoots. Our team holds active visas for major destination hubs and manages all carnet logistics for seamless customs clearance of our cinematic gear."
    },
    {
      id: 2,
      question: "How do you handle travel logistics, accommodation, and gear security?",
      answer:
        "All travel logistics, flights, and accommodations are transparently itemized in your custom production proposal. We travel with ATA Carnets and custom Pelican flight cases, ensuring zero equipment hold-ups at customs. For remote or multi-city assignments, we handle our own ground transport logistics entirely so you can focus on your event."
    },
    {
      id: 3,
      question: "What is your turnaround time for final edits and live production feeds?",
      answer:
        "For corporate conferences requiring immediate press releases or social recap reels, we offer on-site editing with same-day delivery. Full cinematic event highlights and documentary-grade cuts typically undergo our rigorous color grading and sound design process within 14 to 21 business days."
    },
    {
      id: 4,
      question: "Can you handle multi-camera live production and streaming for global audiences?",
      answer:
        "Yes. We specialize in high-end multi-camera live switching and broadcast-grade streaming. Whether you are hosting a hybrid conference in Lagos, London, or Dubai, our rig supports instant 4K transmission to your remote stakeholders with dedicated audio engineering."
    },
    {
      id: 5,
      question: "What are your payment structures for international and foreign clients?",
      answer:
        "We accept seamless cross-border wire transfers, multi-currency invoices (USD, GBP, EUR, NGN), and corporate payment platforms. A standard 50% retainer locks in your production dates and travel schedule, with the remaining balance due upon final project sign-off."
    }
  ];

  return (
    <section className="section-padding bg-black faq-section">
      <div className="container">
        {/* Header matching your pattern */}
        <h3 className="text-center text-inverse">
          Frequently Asked <span className="text-success">Questions</span>
        </h3>
        <p className="text-center text-muted">
          Everything you need to know about our visual production and travel workflows
        </p>
        <br />
        <br />

        {/* Stacking Cards Container */}
        <div className="flex flex-col gap-3 faq-stack-container">
          {faqs.map((faq, index) => (
            <details key={faq.id} className="faq-card">
              <summary className="flex justify-between items-center faq-summary">
                <h5 className="text-inverse fw700 mb-0">
                  <span className="text-success mr-2">0{index + 1}.</span> {faq.question}
                </h5>
                <span className="faq-icon text-success">
                  <Plus size={22} className="icon-plus" />
                  <Minus size={22} className="icon-minus" />
                </span>
              </summary>

              <div className="faq-content">
                <p className="text-muted text-inverse mb-0">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}