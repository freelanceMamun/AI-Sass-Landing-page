'use client';

import Button from '@/components/Button';
import starsBG from '@/assets/stars.png';
import gridLine from '@/assets/grid-lines.png';
import { RefObject, useEffect, useRef } from 'react';
import {
  motion,
  useTransform,
  useScroll,
  useMotionTemplate,
  useMotionValue,
} from 'framer-motion';

const useRelativeMousePostiton = (to: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      if (!to.current) return;
      const { top, left } = to.current?.getBoundingClientRect();

      mouseX.set(event.x - left);
      mouseY.set(event.y - top);
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [mouseX, mouseY, to]);

  return [mouseX, mouseY];
};

export const CallToAction = () => {
  const SectionRef = useRef(null);
  const borderdbRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: SectionRef,
    offset: ['start end', 'end start'],
  });

  const backgroundPostionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const [mouseX, mouseY] = useRelativeMousePostiton(borderdbRef);
  const maskTamplagte = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black,transparent)`;

  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <motion.div
          ref={borderdbRef}
          animate={{
            backgroundPositionX: starsBG.width,
          }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 20,
          }}
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative group"
          style={{
            backgroundPositionY: backgroundPostionY,
            backgroundImage: `url(${starsBG.src})`,
          }}
        >
          <div
            className=" absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700"
            style={{
              backgroundImage: `url(${gridLine.src})`,
            }}
          ></div>
          <motion.div
            className=" absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay  opacity-0 group-hover:opacity-100 transition duration-700"
            style={{
              mask: maskTamplagte,
              backgroundImage: `url(${gridLine.src})`,
            }}
          ></motion.div>

          <div className=" relative">
            <h2 className="text-white text-5xl md:text-6xl max-w-sm lg:max-w-xl mx-auto text-center tracking-tighter font-medium">
              AI-driven AI Web3.0 for everyone.
            </h2>
            <p className="text-white/70 text-lg mt-5 max-w-xs mx-auto md:text-xl tracking-tight text-center">
              Achieve clear, impactful results without the complexity.
            </p>
            <div className="flex justify-center mt-8">
              <Button></Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
