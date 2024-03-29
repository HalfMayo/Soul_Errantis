/// <reference types="vite-plugin-svgr/client" />
import { ForwardedRef, forwardRef } from "react";
import Section from "../../components/Section";
import illOne from "../../assets/images/chibiscene.png";
import FeatureElement from "../../components/FeatureElement";
import SectionTitle from "../../components/SectionTitle";

const Features = forwardRef((_, ref: ForwardedRef<HTMLElement | null>) => {
  return (
    <Section id="features" ref={ref}>
      <div className="w-[90%] sm:w-3/5 flex flex-col items-center justify-center gap-14">
        <SectionTitle title="About the game experience" />
        <FeatureElement ill={illOne}>
          <>
            Vivamus fringilla condi - mentum dui sed feugiat. Sed non egestas
            felis. Suspendisse potenti. Duis a venenatis elit. Donec quam elit,
            lobortis quis maximus eu, porta vitae tortor.
          </>
        </FeatureElement>
        <FeatureElement ill={illOne} rightAlign={true}>
          <>
            Vivamus fringilla condi - mentum dui sed feugiat. Sed non egestas
            felis. Suspendisse potenti. Duis a venenatis elit. Donec quam elit,
            lobortis quis maximus eu, porta vitae tortor.
          </>
        </FeatureElement>
        <FeatureElement ill={illOne}>
          <>
            Vivamus fringilla condi - mentum dui sed feugiat. Sed non egestas
            felis. Suspendisse potenti. Duis a venenatis elit. Donec quam elit,
            lobortis quis maximus eu, porta vitae tortor.
          </>
        </FeatureElement>
      </div>
    </Section>
  );
});

export default Features;
