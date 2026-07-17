import { useState } from "react";
import { ArrowLeft, ArrowRight, FastForward } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TestimonialCard } from "./TestimonialCard";
import './Testimonials.css';

// 1. Array of Objects containing data, video, and fallback images
const testimonialsData  = [
  {
    id: 1,
    name: "Corporate Event Director",
    quote:
      "Ray Visuals delivered more than a highlight reel—they created a cinematic experience that perfectly reflected the scale and prestige of our event. Every frame felt intentional.",
    videoSrc:
      "https://res.cloudinary.com/dy4qtrmgz/video/upload/v1778295661/Day_1_at_the_PAPSS_COWRY_2025_it_was_an_honor_capturing_this_memorable_conference_that_brought_bx81ed.mp4",
    fallbackImg:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop"
  },
  {
    id: 2,
    name: "Marketing Lead",
    quote:
      "Professional, reliable, and incredibly creative. Their team understood our vision immediately and transformed it into visuals that strengthened our brand presence.",
    videoSrc:
      "https://res.cloudinary.com/dy4qtrmgz/video/upload/v1778295661/Day_1_at_the_PAPSS_COWRY_2025_it_was_an_honor_capturing_this_memorable_conference_that_brought_bx81ed.mp4",
    fallbackImg:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop"
  },
  {
    id: 3,
    name: "Conference Organizer",
    quote:
      "The attention to detail was exceptional. Watching the final production reminded us of moments we didn't even realize had such impact. Outstanding work from start to finish.",
    videoSrc:
      "https://res.cloudinary.com/dy4qtrmgz/video/upload/v1778295661/Day_1_at_the_PAPSS_COWRY_2025_it_was_an_honor_capturing_this_memorable_conference_that_brought_bx81ed.mp4",
    fallbackImg:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&fit=crop"
  },
  {
    id: 4,
    name: "Creative Director",
    quote:
      "Working with Ray Visuals felt effortless. Their ability to anticipate key moments and tell compelling stories through film is what truly sets them apart.",
    videoSrc:
      "https://res.cloudinary.com/dy4qtrmgz/video/upload/v1778295661/Day_1_at_the_PAPSS_COWRY_2025_it_was_an_honor_capturing_this_memorable_conference_that_brought_bx81ed.mp4",
    fallbackImg:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop"
  },
  {
    id: 5,
    name: "Business Executive",
    quote:
      "From planning to final delivery, everything was handled with confidence and precision. The finished video elevated our event and continues to leave a lasting impression.",
    videoSrc:
      "https://res.cloudinary.com/dy4qtrmgz/video/upload/v1778295661/Day_1_at_the_PAPSS_COWRY_2025_it_was_an_honor_capturing_this_memorable_conference_that_brought_bx81ed.mp4",
    fallbackImg:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop"
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
      <div className="container testimonial-container">
        <h4 className="text-center text-inverse">
          <span className="text-success">{testimonialsData.length + 10}+ Test</span>imonials{" "}
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