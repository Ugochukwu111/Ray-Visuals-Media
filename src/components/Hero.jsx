import { FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { motion } from "framer-motion";
import "./Hero.css";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.25,
      },
    },
  };

  const leftIcon = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const rightIcon = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const heading = {
    hidden: {
      opacity: 0,
      y: 50,
      filter: "blur(18px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const paragraph = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(10px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
      },
    },
  };

  const buttons = {
    hidden: {
      opacity: 0,
      scale: 0.85,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 18,
      },
    },
  };

  return (
    <section className="flex flex-col items-center justify-between hero-section h-screen">

      {/* KEEPING YOUR ORIGINAL LAYOUT */}
      <div className="container flex flex-col justify-end items-center flex-1">

        <motion.div
          className="flex flex-col justify-center items-center hero-content"
          variants={container}
          initial="hidden"
          animate="show"
        >

          <motion.a
            variants={leftIcon}
            whileHover={{
              scale: 1.15,
              rotate: -8,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="hero-whats-app-icon"
            target="_blank"
            rel="noopener noreferrer"
            href="https://api.whatsapp.com/send/?phone=2348123486338"
          >
            <FaWhatsapp size="clamp(2.5rem,1.5rem + 2vw,3.125rem)" />
          </motion.a>

          <motion.a
            variants={rightIcon}
            whileHover={{
              scale: 1.15,
              rotate: 8,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="hero-ig-icon"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/rayvisuals.media/?hl=en"
          >
            <FaInstagram size="clamp(2.5rem,1.5rem + 2vw,3.125rem)" />
          </motion.a>

          <motion.h1
            variants={heading}
            className="text-center text-inverse"
          >
            Ray Visuals Media
            <br />
            Every Frame Tells a Story
          </motion.h1>

          <motion.p
            variants={paragraph}
            className="text-inverse text-center"
          >
            A premium production house specializing in high-end commercial
            and editorial videography.
            <br />
            Translating bold concepts into striking visual narratives.
          </motion.p>

          <motion.div
            variants={buttons}
            className="flex gap-1 hero-buttons"
          >
            <motion.button
              whileHover={{
                y: -5,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="btn btn-primary"
            >
              Discuss a Project
            </motion.button>

            <motion.button
              whileHover={{
                y: -5,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              onClick={() => navigate("/projects")}
              className="btn bg-white"
            >
              Explore Visuals
            </motion.button>

          </motion.div>

        </motion.div>

      </div>

      {/* VIDEO */}
      <motion.figure
        className="hero-img-container flex-1 hero-video-wrapper"
        initial={{
          scale: 1.08,
          opacity: 0,
          filter: "brightness(.75)",
        }}
        animate={{
          scale: 1,
          opacity: 1,
          filter: "brightness(1)",
        }}
        transition={{
          duration: 1.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <video
          src="https://res.cloudinary.com/dy4qtrmgz/video/upload/v1778295661/Day_1_at_the_PAPSS_COWRY_2025_it_was_an_honor_capturing_this_memorable_conference_that_brought_bx81ed.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="hero-img"
        />
      </motion.figure>

    </section>
  );
}