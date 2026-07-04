import { useState } from "react";
import './SkeletonVideo.css';

export default function SkeletonVideo({ 
  src, 
  wrapperClassName = "", 
  videoClassName = "", 
  autoPlay = true, 
  loop = true, 
  muted = true 
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <figure 
      className={`skeleton-bg ${wrapperClassName} ${!isLoaded ? 'is-loading' : ''}`}
    >
      <video
        src={src}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        onCanPlay={() => setIsLoaded(true)}
        className={videoClassName}
        style={{ 
          opacity: isLoaded ? 1 : 0, 
          transition: 'opacity 0.4s ease-in-out',
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </figure>
  );
}