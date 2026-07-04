import { motion, AnimatePresence } from "framer-motion";


export  const TestimonialCard = ({ data, direction }) => {
  // Text translates Y (Up/Down)
  const textVariants = {
    hidden: (dir) => ({ y: dir === 1 ? 40 : -40, opacity: 0 }),
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: (dir) => ({ y: dir === 1 ? -40 : 40, opacity: 0, transition: { duration: 0.3 } })
  };

  // Video translates X (Left/Right)
  const mediaVariants = {
    hidden: (dir) => ({ x: dir === 1 ? 80 : -80, opacity: 0 }),
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: (dir) => ({ x: dir === 1 ? -80 : 80, opacity: 0, transition: { duration: 0.3 } })
  };

  return (
    <div className="flex gap-3 w-full testimonial-card-layout">
      {/* Text Animation Block */}
      <motion.div 
        className="flex flex-col gap-3 flex-1 justify-center"
        custom={direction}
        variants={textVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div>
          <h5 className="text-success">{data.name}</h5>
          <p className="text-muted text-inverse" style={{ lineHeight: '1.6' }}>
            {data.quote}
          </p>
        </div>
      </motion.div>

      {/* Media Animation Block */}
      <motion.div 
        className="flex-1 flex justify-center testimonial-card-container"
        custom={direction}
        variants={mediaVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {data.videoSrc ? (
          <video
            src={data.videoSrc}
            controls
            autoPlay
            loop
            muted
            className="hero-img"
          />
        ) : (
          <img 
            src={data.fallbackImg} 
            alt={`${data.name} property`} 
            /* Inline styles mimic your video CSS so the layout doesn't break */
            style={{ width: '380px', height: '450px', borderRadius: '0.5rem', objectFit: 'cover' }} 
          />
        )}
      </motion.div>
    </div>
  );
};