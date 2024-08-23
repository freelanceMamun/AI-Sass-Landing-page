'use client';

import {
  DotLottieCommonPlayer,
  DotLottiePlayer,
} from '@dotlottie/react-player';
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from 'framer-motion';
import Image from 'next/image';
import productImage from '@/assets/product-image.png';
import { useEffect, useRef, useState } from 'react';
const tabs = [
  {
    icon: '/assets/lottie/vroom.lottie',
    title: 'User-friendly dashboard',
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: '/assets/lottie/click.lottie',
    title: 'One-click optimization',
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: '/assets/lottie/stars.lottie',
    title: 'Smart keyword generator',
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

const FeaturesTab = (tab: (typeof tabs)[number]) => {
  const dotLottiRef = useRef<DotLottieCommonPlayer>(null);

  const tabRef = useRef<HTMLDivElement>(null);

  const xPercentage = useMotionValue(100);
  const yPercentage = useMotionValue(50);

  const maskTamplagte = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}%  ${yPercentage}% ,black , transparent)`;

  const handelTabHover = () => {
    if (dotLottiRef.current == null) return;
    dotLottiRef.current.seek(0);
    dotLottiRef.current?.play();
  };

  useEffect(() => {
    if (!tabRef.current) return;

    const { height, width } = tabRef.current?.getBoundingClientRect();
    const circumFrernce = height * 2 + width * 2;
    const times = [
      0,
      width / circumFrernce,
      (width + height) / circumFrernce,
      (width * 2 + height) / circumFrernce,
      1,
    ];
    animate(xPercentage, [0, 100, 100, 0, 0], {
      times,
      duration: 20,
      repeat: Infinity,
      ease: 'linear',
      repeatType: 'loop',
    });
    animate(yPercentage, [0, 0, 100, 100, 0], {
      times,
      duration: 20,
      repeat: Infinity,
      ease: 'linear',
      repeatType: 'loop',
    });
  }, [xPercentage, yPercentage]);

  return (
    <div
      ref={tabRef}
      onMouseEnter={handelTabHover}
      key={tab.title}
      className="border md:flex-1 border-white/15 flex items-center p-2.5 relative rounded-xl gap-2"
    >
      <motion.div
        style={{
          maskImage: maskTamplagte,
        }}
        className=" absolute inset-0 -m-px rounded-xl border border-[#a369ff] [mask-image:]"
      ></motion.div>
      <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
        <DotLottiePlayer
          ref={dotLottiRef}
          className="h-5 w-5"
          src={tab.icon}
        ></DotLottiePlayer>
      </div>

      <div className="text-white font-medium">{tab.title}</div>
      {tab.isNew && (
        <div className="text-sm rounded-full px-2 py-0.5 bg-[#8c44ff] text-white">
          new
        </div>
      )}
    </div>
  );
};

export const Features = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <section>
      <div className=" container md:py-24">
        <div className="">
          <h2 className="text-white md:text-6xl lg:text-7xl text-5xl font-medium text-center  tracking-tighter">
            Elevate your SEO effort
          </h2>
          <p className="text-white/70  text-lg md:text-xl max-w-xl mx-auto text-center tracking-tighter mt-5">
            From small startups to large enterprises, our AI-driven tool has
            revolutionized the way businesses approach SEO.
          </p>
        </div>
        <div className="mt-10 flex flex-col  lg:flex-row gap-3">
          {tabs.map((tab) => {
            return <FeaturesTab {...tab} key={tab.title}></FeaturesTab>;
          })}
        </div>
        <div className="border border-white/20 p-2.5 rounded-xl mt-3">
          <div
            className=" aspect-video bg-cover border-white/20 border rounded-lg"
            style={{ backgroundImage: `url(${productImage.src})` }}
          ></div>
          {/* <Image
            src={productImage}
            alt="Product image"
            className="w-full h-full"
            width={100}
            height={100}
          ></Image> */}
        </div>
      </div>
    </section>
  );
};
