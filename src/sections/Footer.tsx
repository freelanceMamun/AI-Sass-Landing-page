import Logo from '@/assets/logo.svg';
import Xscoial from '@/assets/social-x.svg';
import XYoutube from '@/assets/social-youtube.svg';
import SocialInsta from '@/assets/social-instagram.svg';
export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="text-white lg:flex-1 flex">
            <Logo className="h-6 w-6"></Logo>
            <div className="font-medium text-lg">AI Startup Landing Page</div>
          </div>
          <div className="lg:flex-1 lg:justify-center">
            <nav className="text-white flex flex-col lg:flex-row gap-5 lg:gap-7">
              <a
                href="#"
                className="text-white/70 hover:text-white text-xs md:text-sm transition"
              >
                Features
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white text-xs  md:text-sm  transition"
              >
                Developers
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white text-xs md:text-sm transition"
              >
                Company
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white text-xs md:text-sm transition"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white text-xs transition"
              >
                Changelog
              </a>
            </nav>
          </div>
          <div className="text-white flex gap-4 lg:flex-1 lg:justify-end">
            <Xscoial className="text-white/40 hover:text-white transition"></Xscoial>
            <XYoutube className="text-white/40 hover:text-white transition"></XYoutube>
            <SocialInsta className="text-white/40 hover:text-white transition"></SocialInsta>
          </div>
        </div>
      </div>
    </footer>
  );
};
