import NavElement from "./NavElement";

export default function Navbar() {
  return (
    <nav className="w-3/4">
      <ul className="flex sm:flex-row flex-col justify-end items-center w-full gap-[3rem] text-white">
        <NavElement id="home" />
        <NavElement id="story" />
        <NavElement id="features" />
        <NavElement id="team" />
        <NavElement id="contacts" />
      </ul>
    </nav>
  );
}
