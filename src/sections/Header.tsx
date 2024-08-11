import LogoIcon from '@/assets/logo.svg';
import MenuIcon from '@/assets/icon-menu.svg';
export const Header = () => {
  return (
    <header className="py-4  border-b border-white/15 md:border-none">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <div className="border text-white h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15 ">
              <LogoIcon className="h-8 w-8"></LogoIcon>
            </div>
          </div>
          <div>
            <nav className="flex gap-8 text-white/70 hover:text-white transition">
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
            <MenuIcon></MenuIcon>
          </div>
        </div>
      </div>
    </header>
  );
};
