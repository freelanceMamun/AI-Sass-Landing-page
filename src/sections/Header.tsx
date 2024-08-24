'use client';
import LogoIcon from '@/assets/logo.svg';
import MenuIcon from '@/assets/icon-menu.svg';
import { useState } from 'react';
export const Header = () => {
  const [activeNav, setactiveNav] = useState(false);

  const navhandeler = () => {
    setactiveNav((prev) => !prev);
  };

  return (
    <header className="py-4  border-b border-white/15 md:border-none sticky top-0 z-10 ">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container">
        <div className="flex justify-between md:border max-w-2xl mx-auto items-center md:p-2.5 relative rounded-xl border-white/15 ">
          <div className=" absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
          <div>
            <div className="border text-white h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15 ">
              <LogoIcon className="h-8 w-8"></LogoIcon>
            </div>
          </div>
          <div className="md:block hidden">
            <nav className="  flex gap-8 text-sm text-white/70 hover:text-white transition">
              <a
                href="#"
                className="text-white/70 hover:text-white transition duration-300"
              >
                Features
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition duration-300"
              >
                Developers
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition duration-300"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition duration-300"
              >
                Changelog
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button className=" relative py-2 px-3 rounded-lg text-white font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
              <div className=" absolute inset-0 ">
                <div className="border rounded-lg border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom, black,transparent)]"></div>
                <div className="border rounded-lg absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                <div className=" absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,07)_inset] rounded-lg"></div>
              </div>

              <span>Join waitlist</span>
            </button>
            <div onClick={navhandeler}>
              <MenuIcon className="md:hidden"></MenuIcon>
            </div>
          </div>
        </div>
        <div
          className={`md:hidden h-0 scale-y-0 opacity-0 pointer-events-none ${
            activeNav &&
            'h-1/3 scale-y-100 pointer-events-auto opacity-100 mt-8'
          } transition-all duration-500`}
        >
          <nav className=" flex  gap-8 flex-col text-sm text-white/70 hover:text-white transition">
            <a
              href="#"
              className="text-white/70 hover:text-white transition duration-300"
            >
              Features
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white transition duration-300"
            >
              Developers
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white transition duration-300"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white transition duration-300"
            >
              Changelog
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
