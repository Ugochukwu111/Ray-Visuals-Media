import { FaWhatsapp, FaInstagram,} from "react-icons/fa6";
import './Hero.css';
import profile from "../assets/images/ray-visuals.webp";
import { Link } from "react-router-dom";


export default function Hero() {
  return (
     <section className="flex flex-col  items-center justify-between hero-section h-screen ">
             <div className="container flex flex-col justify-end items-center  flex-1  ">
               <div className="flex flex-col justify-center  items-center hero-content">
                <Link
                 className="hero-whats-app-icon"
                 target="_blank" 
                 rel="noopener noreferrer"  
                 to="https://api.whatsapp.com/send/?phone=2348123486338">
                  <FaWhatsapp  size="clamp(2.5rem, 1.5rem + 2vw, 3.125rem)"  />
                </Link>
                <Link
                 className="hero-ig-icon" 
                 target="_blank" 
                 rel="noopener noreferrer"  
                 to="https://www.instagram.com/rayvisuals.media/?hl=en">
                  <FaInstagram size="clamp(2.5rem, 1.5rem + 2vw, 3.125rem)"  />``
                </Link>
                <h1 className="text-center text-inverse">
                  Ray Visuals Media <br /> Every Frame Tells a story
                </h1>
                 <p className="text-inverse text-center">
                   A premium production house specializing in high-end commercial
                   and editorial videography.
                   <br />
                   Translating bold concepts into striking visual narratives.
                 </p>
                 <div className="flex gap-1 hero-buttons">
                   <button className="btn btn-primary">Discuss a Project</button>
                   <button className="btn  bg-white">Explore Visuals</button>
                 </div>
               </div>
   
             </div>
                       <figure className="hero-img-container flex-1 hero-video-wrapper">
               <video
                 src="https://res.cloudinary.com/dy4qtrmgz/video/upload/v1778295661/Day_1_at_the_PAPSS_COWRY_2025_it_was_an_honor_capturing_this_memorable_conference_that_brought_bx81ed.mp4"
                 autoPlay
                 loop
                 muted
                 className="hero-img"
                //  poster='/video-place-holder.svg'
               ></video>
             </figure>
   
           </section>
  )
}
