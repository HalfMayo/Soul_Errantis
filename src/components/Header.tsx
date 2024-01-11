/// <reference types="vite-plugin-svgr/client" />
import SvgButton from "../storybook_components/SvgButton";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Menu from "../assets/svgs/hamburger-menu-svgrepo-com.svg?react";
import Close from "../assets/svgs/close-circle-svgrepo-com (1).svg?react";
import { useActiveSection } from "../context/ActiveSectionContext";

export default function Header() {
  const { isOpenMenu, setIsOpenMenu } = useActiveSection();

  if (window.innerWidth < 640)
    return (
      <>
        {!isOpenMenu ? (
          <div className="w-full flex items-center justify-center pt-4 fixed z-30">
            <SvgButton
              label="Open Menu"
              color="text-main"
              svg={Menu}
              width="32px"
              height="32px"
              className="bg-white"
              onClick={() => setIsOpenMenu(true)}
            />
          </div>
        ) : (
          <div className="w-full h-screen flex flex-col items-center justify-center pt-4 fixed z-30 bg-main">
            <Navbar />
            <SvgButton
              label="Close Menu"
              svg={Close}
              width="32px"
              height="32px"
              onClick={() => setIsOpenMenu(false)}
              className="mt-8"
            />
          </div>
        )}
      </>
    );
  return (
    <header className="w-full flex justify-between items-center fixed h-[7.5vh] z-20 bg-main/50 px-[5rem]">
      <Logo />
      <Navbar />
    </header>
  );
}
