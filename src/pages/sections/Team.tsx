import { ForwardedRef, forwardRef } from "react";
import Section from "../../components/Section";
import SectionTitle from "../../components/SectionTitle";
import Carousel from "../../storybook_components/Carousel";
import team from "../../data/team";

const Team = forwardRef(
  (props: unknown, ref: ForwardedRef<HTMLElement | null>) => {
    return (
      <Section id="team" ref={ref}>
        <div className="flex flex-col items-center justify-center w-2/4 gap-6">
          <SectionTitle title="Meet the Happy Crying Onion team!" />
          <Carousel elements={team} />
        </div>
      </Section>
    );
  }
);

export default Team;
