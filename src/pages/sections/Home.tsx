import Section from "../../components/Section";
import flame from "../../assets/images/FIAMMA_SITO_01_01_copy2.png";
import logo from "../../assets/images/SoulErrantis_LOGO1.png";
import { ForwardedRef, forwardRef } from "react";

const Home = forwardRef((_, ref: ForwardedRef<HTMLElement | null>) => {
  return (
    <Section id="home" ref={ref} topPadding={false}>
      <div className="relative w-full h-full flex items-center justify-center">
        <img src={flame} alt="soul-errantis-flame" className="max-h-[90%]" />
        <img
          src={logo}
          alt="soul-errantis-logo"
          className="absolute z-10 w-3/4"
        />
      </div>
    </Section>
  );
});

export default Home;
