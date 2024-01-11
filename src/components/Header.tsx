import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  if (window.innerWidth < 640) return null;
  return (
    <header className="w-full flex justify-between items-center fixed h-[7.5vh] z-20 bg-main/50 px-[5rem]">
      <Logo />
      <Navbar />
    </header>
  );
}
