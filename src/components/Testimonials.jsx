import { useState } from "react";
import { ArrowLeft, ArrowRight, FastForward } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TestimonialCard } from "./TestimonialCard";
import './Testimonials.css';

// 1. Array of Objects containing data, video, and fallback images
const testimonialsData = [
  {
    id: 1,
    name: "Davido Adeleke",
    quote: "Securing my dream property through Dilux was seamless. The attention to detail and premium service is exactly what you need in the real estate market. Highly recommended.",
    videoSrc: "https://res.cloudinary.com/dy4qtrmgz/video/upload/v1778295661/Day_1_at_the_PAPSS_COWRY_2025_it_was_an_honor_capturing_this_memorable_conference_that_brought_bx81ed.mp4",
    fallbackImg: null
  },
  {
    id: 2,
    name: "Burna Boy",
    quote: "I've seen many platforms, but the portfolio of luxury properties here is unmatched. They handled the paperwork entirely while I focused on the tours.",
    videoSrc: null, // Intentionally left null to demonstrate the fallback image
    fallbackImg: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=600&fit=crop"
  },
  {
    id: 3,
    name: "Tiwa Savage",
    quote: "Transparent, luxury, and premium. Found the perfect secluded estate. The Dilux team knows exactly how to treat their high-end clients.",
    videoSrc: null,
    fallbackImg: "https://images.unsplash.com/photo-1600607687931-cebf5741dc56?w=500&h=600&fit=crop"
  }
];



// 3. The Main Parent Component
export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    setDirection(1); // 1 means moving forward
    setCurrentIndex((prev) => (prev + 1 === testimonialsData.length ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1); // -1 means moving backward
    setCurrentIndex((prev) => (prev - 1 < 0 ? testimonialsData.length - 1 : prev - 1));
  };

  return (
    <section className="section-padding bg-black testimonial-section">
      <div className="container">
        <h4 className="text-center text-inverse">
          <span className="text-success">Test</span>imonials{" "}
          <span className="text-success">!</span>{" "}
        </h4>
        <p className="text-center text-muted">
          what our clients say about us
        </p>
        <br />
        <br />
        
        {/* Main Slider Area */}
        <div>
          <AnimatePresence mode="wait" custom={direction}>
            {/* The key prop is critical here. It tells Framer Motion when to trigger the animation */}
            <TestimonialCard 
              key={testimonialsData[currentIndex].id} 
              data={testimonialsData[currentIndex]} 
              direction={direction} 
            />
          </AnimatePresence>

          {/* Navigation Controls placed directly under the media column */}
          <div className="flex gap-3 w-full">
            <div className="flex-1"></div> {/* Empty spacer for the text column */}
            <div className="flex-1 flex justify-center gap-3" style={{ marginTop: '1rem' }}>
              <button className="btn text-inverse bg-success" onClick={handlePrev}>
                <ArrowLeft size={18} />
              </button>
              <button className="btn text-inverse bg-success" onClick={handleNext}>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <br />
        <div className="flex justify-center" style={{ marginTop: '2rem' }}>
          <button className="btn bg-success text-inverse flex items-center gap-2">
            Build your next project <FastForward size={18} />
          </button>
        </div>
      </div>

      <div className="ambient-shape shape-green"></div>
      <div className="ambient-shape shape-white"></div>
      <div className="ambient-shape shape-blue"></div>
    </section>
  );
}