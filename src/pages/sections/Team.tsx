import { ForwardedRef, forwardRef } from "react";
import Section from "../../components/Section";
import SectionTitle from "../../components/SectionTitle";
import Carousel from "../../storybook_components/Carousel";
import team from "../../data/team";

const Team = forwardRef((_, ref: ForwardedRef<HTMLElement | null>) => {
  return (
    <Section id="team" ref={ref}>
      <div className="flex flex-col items-center justify-center sm:w-2/4 w-[90%] gap-6">
        <SectionTitle title="Meet the Happy Crying Onion team!" />
        <Carousel elements={team} cardNum={window.innerWidth >= 1024 ? 2 : 1} />
      </div>
    </Section>
  );
});

export default Team;
