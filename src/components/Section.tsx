import { ForwardedRef, forwardRef } from "react";
import { SectionProps } from "../interfaces/ChildrenProps";

const Section = forwardRef(
  (
    { children, id, topPadding = true }: SectionProps,
    ref: ForwardedRef<HTMLElement | null>
  ) => {
    return (
      <section
        id={id}
        className={`${
          topPadding ? "sm:pt-[7.5vh]" : ""
        } py-[10vh] sm:py-0 w-full min-h-screen flex flex-col items-center justify-center text-white`}
        ref={ref}
      >
        {children}
      </section>
    );
  }
);

export default Section;
