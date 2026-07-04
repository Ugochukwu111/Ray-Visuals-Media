import { useEffect, useRef } from "react";
import "./ProjectSection.css";

export default function ProjectSection() {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const observerRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Architectural Serenity",
      description: "A cinematic exploration of modern structural design, emphasizing natural light, open spaces, and premium living environments",
      url: "https://res.cloudinary.com/dy4qtrmgz/video/upload/v1783067521/house-ray_fhxnpz.mp4"
    },
    {
      id: 2,
      title: "The Bridal Elegance",
      description: "Capturing the intricate details and timeless beauty of haute couture bridal fashion in motion.",
      url: "https://res.cloudinary.com/dy4qtrmgz/video/upload/v1783067518/bride-ray_drgqc9.mp4"
    },
    {
      id: 3,
      title: "Sartorial Harmony",
      description: "A visual essay highlighting the coordinated elegance, rich textures, and joyous moments of the bridal party.",
      url: "https://res.cloudinary.com/dy4qtrmgz/video/upload/v1783067550/briadsmaid-ray_vcnzkg.mp4"
    },
    {
      id: 4,
      title: "Urban Chic Editorial",
      description: "A dynamic showcase of contemporary fashion, capturing the essence of urban style and modern aesthetics.",
      url: "https://res.cloudinary.com/dy4qtrmgz/video/upload/v1783067532/fashion-ray_ot4dbv.mp4"
    }
  ];

  // 1. Horizontal Scroll Logic
  useEffect(() => {
    const section = sectionRef.current;
    const slider = sliderRef.current;

    const setSectionHeight = () => {
      const scrollDistance = slider.scrollWidth - window.innerWidth;
      section.style.height = `${window.innerHeight + scrollDistance}px`;
    };

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrollY = Math.max(-rect.top, 0);
      const maxTranslate = slider.scrollWidth - window.innerWidth;

      slider.style.transform = `translateX(-${Math.min(scrollY, maxTranslate)}px)`;
    };

    setSectionHeight();
    handleScroll();

    window.addEventListener("resize", setSectionHeight);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", setSectionHeight);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 2. Video Intersection & Animation Observer Logic
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Fires when the card is 50% visible
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const video = entry.target.querySelector("video");
        
        if (entry.isIntersecting) {
          // Add visible class for CSS animation
          entry.target.classList.add("is-visible");
          
          if (video) {
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.catch((error) => {
                console.warn("Unmuted autoplay prevented by browser. User must interact first.", error);
              });
            }
          }
        } else {
          // Remove class when it leaves the view so it can animate again next time
          entry.target.classList.remove("is-visible");
          
          if (video) {
            video.pause();
          }
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, options);

    const cards = sliderRef.current.querySelectorAll(".project-card");
    cards.forEach((card) => observerRef.current.observe(card));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [projects]);

  return (
    <div className="bg-primary">
    <h3 className="text-inverse text-center">Projects</h3>
    <br></br>
    <section className="project-section" ref={sectionRef}>
      <div className="projects-container">
        <div className="project-slider" ref={sliderRef}>
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <video 
                src={project.url} 
                controls 
                loop 
                playsInline
              ></video>
              
              <div className="project-content">
                <h4 className="text-inverse">{project.title}</h4>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}