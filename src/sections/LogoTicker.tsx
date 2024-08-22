'use client';

import acmeLogo from '@/assets/logo-acme.png';
import apexLogo from '@/assets/logo-apex.png';
import clestialLogo from '@/assets/logo-celestial.png';
import quanLogo from '@/assets/logo-quantum.png';
import pulseLogo from '@/assets/logo-pulse.png';
import echoLogo from '@/assets/logo-echo.png';
import Image from 'next/image';

import { motion } from 'framer-motion';

export const LogoTicker = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none text-white">
            <h2>Trusted by to innovative teams</h2>
          </div>
          <div className="flex-1 overflow-hidden lg:overflow-visible [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] ">
            <motion.div
              initial={{
                translateX: '-50%',
              }}
              animate={{
                translateX: '0%',
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="flex flex-none gap-14 pr-14 -translate-x-1/2"
            >
              {[
                pulseLogo,
                acmeLogo,
                apexLogo,
                clestialLogo,
                quanLogo,
                echoLogo,
                pulseLogo,
                acmeLogo,
                apexLogo,
                clestialLogo,
                quanLogo,
                echoLogo,
              ].map((logo, index) => {
                return (
                  <Image
                    key={index}
                    className="h-6 w-auto"
                    src={logo.src}
                    alt=""
                    width={100}
                    height={100}
                  />
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
