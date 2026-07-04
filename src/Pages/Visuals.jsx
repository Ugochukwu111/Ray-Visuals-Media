import Footer from "../components/Footer";
import Hero from "../components/Hero";
import "./Visuals.css";
import { Link } from "react-router-dom";
import ProjectSection from "../components/ProjectSection";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import mrRayVisuals from "../assets/images/mr-ray-smile.webp";


import profile from "../assets/images/ray-visuals.webp";

export default function Visuals() {
  return (
    <div>
      <main>
        <Hero />

        <section className=" section-padding about-us-section">
          <div className="container flex gap-3 justify-between about-us-container">
            <figure className="">
              <img src={profile} alt="Ray Visuals" />
            </figure>
            <div>
              <h2>About Us</h2>
              <p className="text-muted">
                We are a premium visual production studio specializing in
                high-end cinematography for corporate events, luxury brands,
                conferences, and large-scale experiences.
                <br />
                <br />
                Our work goes beyond capturing moments — we craft intentional,
                emotionally driven visual stories that elevate your brand and
                preserve the essence of every event with cinematic precision.
                <br />
                <br />
                Trusted by event organizers, executives, and creative agencies,
                we collaborate with clients who demand excellence, delivering
                visuals that communicate impact, sophistication, and lasting
                value.
              </p>
              <br />
              <h4 className="text-end">Legacy</h4>
              <br />
              <div className="flex justify-between bg-success-light our-numbers-container">
                <p className="text-center">
                  <span className="d-block text-muted">events covered</span>
                  <span className="d-block text-success fw700 number">
                    150+
                  </span>
                </p>
                <p className="text-center ">
                  <span className="d-block text-muted">Live Production</span>
                  <span className="d-block text-success fw700 number">
                    300+
                  </span>
                </p>
                <p className="text-center">
                  <span className="d-block text-muted ">
                    Corporate Conferences
                  </span>
                  <span className="d-block text-success fw700 number">50+</span>
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </section>

        <section className=" founder-section">
          <div className=" flex  justify-between container container founder-container bg-white">
            <div className="content">
              <h2>
                <span className="text-muted meet">Meet the Founder</span>
                <br />
                Ray Visuals
              </h2>
              <p className="text-muted">
                <span className="text-primary fw700">
                  Every great brand has a story, but not every story gets told
                  well.
                </span>
                <br />
                A young videographer started with just one camera and a vision.
                Long nights, missed weekends, and countless edits slowly turned
                passion into a production company.
                <br /> <br /> Today, as CEO, he no longer just captures
                moments—he helps businesses, events, and people preserve
                memories and build brands that last. Behind every polished video
                is someone who believed that one frame could change everything.
              </p>

              <Link
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="btn text-inverse bg-success"
              >
                Chat on WhatsApp
              </Link>
            </div>

            <div className="founder-img-wrapper bg-success-light">
              <figure>
                <img src={mrRayVisuals} alt="Ray Visuals" />
              </figure>
            </div>
          </div>
          <div className="black-background"></div>
        </section>

        <ProjectSection />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
