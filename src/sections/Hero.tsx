'use client';
import { useRef } from 'react';
import Button from '@/components/Button';
import starBg from '@/assets/stars.png';
import { motion, useTransform, useScroll } from 'framer-motion';

export const Hero = () => {
  const SectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: SectionRef,
    offset: ['start end', 'end start'],
  });

  const backgroundPostionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <motion.section
      ref={SectionRef}
      animate={{
        backgroundPositionX: starBg.width,
      }}
      transition={{
        repeat: Infinity,
        ease: 'linear',
        duration: 20,
      }}
      className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{
        background: `url(${starBg.src})`,
        backgroundPositionY: backgroundPostionY,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>

      <div
        className="absolute h-64 w-64 md:h-96 md:w-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
       bg-purple-500 rounded-full border CM-Shadow border-white/20 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255,.7%),rgb(24,0,66))]"
      ></div>

      <motion.div
        style={{
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          rotate: '1turn',
        }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: 'linear',
        }}
        className=" absolute h-[344px] w-[344px] md:w-[580px] md:h-[580px] opacity-20 border-white  rounded-full border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className=" absolute h-2 w-2 top-1/2 left-0 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className=" absolute h-2 w-2 top-0 left-1/2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className=" absolute h-5 w-5 top-1/2 left-full border border-white inline-flex items-center justify-center rounded-full -translate-x-1/2 -translate-y-1/2">
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </motion.div>

      <div className=" absolute h-[444px] w-[444px] md:w-[780px] md:h-[780px] rounded-full border border-white/20 border-dashed  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

      <motion.div
        style={{
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          rotate: '-1turn',
        }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: 'linear',
        }}
        className=" absolute h-[544px] w-[544px] md:w-[980px] md:h-[980px] rounded-full border border-white/20   top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className=" absolute h-2 w-2 top-1/2 left-0 bg-white opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className=" absolute h-2 w-2 top-1/2 left-full border opacity-20 bg-white  border-white inline-flex items-center justify-center rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>

      <div className="container relative  mt-16">
        <h1 className=" md:text-[168px] md:leading-none bg-clip-text text-center text-7xl font-semibold tracking-tighter bg-white text-transparent bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,0.5))]">
          {' '}
          WEB 3.0
        </h1>
        <p className="text-white/70 md:text-xl mt-5 text-center max-w-xl mx-auto text-lg">
          {`Elevate your site's visibility effortlessly with AI, where smart
          technology meets user-friendly mordan Website tools`}
        </p>
        <div className="flex justify-center mt-5">
          <Button></Button>
        </div>
      </div>
    </motion.section>
  );
};
