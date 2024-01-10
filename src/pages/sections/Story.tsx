import { ForwardedRef, forwardRef } from "react";
import Section from "../../components/Section";
import SectionTitle from "../../components/SectionTitle";
import illOne from "../../assets/images/chibiscene.png";

const Story = forwardRef(
  (props: unknown, ref: ForwardedRef<HTMLElement | null>) => {
    return (
      <Section id="story" ref={ref}>
        <div className="flex flex-col items-center justify-center w-2/4 gap-6">
          <SectionTitle title="A journey starts here" />
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            volutpat fringilla diam eget dictum. Aliquam auctor, sem porttitor
            ultricies convallis, arcu dolor posuere turpis, non cursus dui
            ligula ut quam. Sed feugiat eros eget ipsum volutpat, vitae dictum
            nunc vestibulum. Nam consequat, leo ut convallis ornare, purus orci
            scelerisque arcu, nec cursus dui orci a orci. Duis interdum aliquam
            ligula, at aliquam metus gravida id. Fusce rhoncus odio fringilla ex
            consequat iaculis vel at augue. Aenean bibendum ac velit a dictum.
            Proin sapien nulla, pharetra egestas semper sit amet, porttitor sit
            amet erat. Phasellus in eleifend leo, vitae semper ante. Quisque
            condimentum neque eu porttitor vestibulum. Cras porta hendrerit mi
            non laoreet.
          </p>
          <img src={illOne} alt="chibi-kimo" className="w-3/4" />
        </div>
      </Section>
    );
  }
);

export default Story;
