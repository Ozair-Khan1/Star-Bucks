import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Navigate, useNavigate } from 'react-router-dom';

const ImageSlider = ({ images = [], title }) => {
  const [width, setWidth] = useState(0);
  const [position, setPosition] = useState(0);
  const carousel = useRef();
  const controls = useAnimation();

  const cardWidth = 387;

  useEffect(() => {
    const calculateWidth = () => {
      if (carousel.current) {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
      }
    };
    
    calculateWidth();
    const timer = setTimeout(calculateWidth, 100);
    
    window.addEventListener("resize", calculateWidth);
    return () => {
      window.removeEventListener("resize", calculateWidth);
      clearTimeout(timer);
    };
  }, [images]);

  const slide = (direction) => {
    let newPos = direction === 'next' ? position - cardWidth : position + cardWidth;
    
    newPos = Math.max(-width, Math.min(0, newPos));
    
    setPosition(newPos);
    controls.start({ x: newPos, transition: { type: "spring", bounce: 0, duration: 0.4 } });
  };

  const navigate = useNavigate()

  return (
    <div className="container-fluid py-4 px-0 position-relative">
      <div className="d-flex justify-content-between align-items-center image-slider-padding text-break mb-3" style={{padding : '0px 99px'}}>
        <h6 className="fw-bold text-uppercase fs-5 m-0" style={{ letterSpacing: '1px' }}>
          {title}
        </h6>
        {images.length >= 5 && (
          <div className="slider gap-2">
          <motion.button
            whileHover={{backgroundColor : '#006242'}}
            whileTap={{backgroundColor : '#006242'}}
            transition={{duration : 0}} 
            className="btn btn-outline-dark d-inline-flex align-items-center justify-content-center rounded-circle p-2"
            onClick={() => slide('prev')}
            disabled={position >= 0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left-icon lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
          </motion.button>
          <motion.button
            whileHover={{backgroundColor : '#006242'}}
            whileTap={{backgroundColor : '#006242'}}
            transition={{duration : 0}} 
            className="btn btn-outline-dark d-inline-flex align-items-center justify-content-center rounded-circle p-2"
            onClick={() => slide('next')}
            disabled={position <= -width}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </motion.button>
        </div>
        )}
      </div>

      <motion.div ref={carousel} className="overflow-hidden image-slider-padding text-break" style={{padding : '0px 99px'}}>
        <motion.div
          drag="x"
          animate={controls}
          dragConstraints={{ right: 0, left: -width }}
          onDragEnd={(e, info) => setPosition(info.offset.x + position)}
          className="d-flex py-2 rounded-4"
          style={{ width: 'max-content'}}
        >
          {images.map((item, index) => (
            <motion.div 
              onClick={() => navigate('/')}
              key={index} 
              className="flex-shrink-0 me-3 rounded-4"
              style={{ width: '387px', height: '243px', boxShadow : '0 2px 3px #0000003d'}}
              whileHover={{y : -5, boxShadow : '0 6px 6px #00000024'}}
            >
              <img
                src={item.image} 
                alt={`Slide ${index}`}
                className="img-fluid w-100 h-100 rounded-4 shadow-sm"
                style={{ objectFit: 'cover', pointerEvents: 'none' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ImageSlider;