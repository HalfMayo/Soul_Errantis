import { useEffect, useRef } from "react";
import Header from "../components/Header";
import Contacts from "./sections/Contacts";
import Features from "./sections/Features";
import Home from "./sections/Home";
import Story from "./sections/Story";
import Team from "./sections/Team";
import { useActiveSection } from "../context/ActiveSectionContext";

export default function Landing() {
  const { setIsActive } = useActiveSection();
  const homeRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLElement>(null);
  const featRef = useRef<HTMLElement>(null);
  const teamRef = useRef<HTMLElement>(null);
  const contRef = useRef<HTMLElement>(null);

  function offsetTop() {
    if (
      window.scrollY >= homeRef.current!.offsetTop &&
      window.scrollY < storyRef.current!.offsetTop / 2
    )
      setIsActive("home");
    if (
      window.scrollY >= storyRef.current!.offsetTop / 2 &&
      window.scrollY <
        featRef.current!.offsetTop / 2 + storyRef.current!.offsetTop / 2
    )
      setIsActive("story");
    if (
      window.scrollY >=
        featRef.current!.offsetTop / 2 + storyRef.current!.offsetTop / 2 &&
      window.scrollY <
        teamRef.current!.offsetTop / 2 + featRef.current!.offsetTop / 2
    )
      setIsActive("features");
    if (
      window.scrollY >=
        teamRef.current!.offsetTop / 2 + featRef.current!.offsetTop / 2 &&
      window.scrollY <
        contRef.current!.offsetTop / 2 + teamRef.current!.offsetTop / 2
    )
      setIsActive("team");
    if (
      window.scrollY >=
      contRef.current!.offsetTop / 2 + teamRef.current!.offsetTop / 2
    )
      setIsActive("contacts");
  }

  useEffect(() => {
    document.addEventListener("scroll", offsetTop);

    return () => {
      document.removeEventListener("scroll", offsetTop);
    };
  });

  return (
    <>
      <Header />
      <Home ref={homeRef} />
      <Story ref={storyRef} />
      <Features ref={featRef} />
      <Team ref={teamRef} />
      <Contacts ref={contRef} />
    </>
  );
}
