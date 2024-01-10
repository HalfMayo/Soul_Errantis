/// <reference types="vite-plugin-svgr/client" />
import { ForwardedRef, forwardRef } from "react";
import { Link } from "react-router-dom";
import Section from "../../components/Section";
import Instagram from "../../assets/svgs/instagram-167-svgrepo-com.svg?react";
import Github from "../../assets/svgs/github-142-svgrepo-com.svg?react";
import Email from "../../assets/svgs/email-envelope-letter-mail-message-svgrepo-com.svg?react";
import SvgButton from "../../storybook_components/SvgButton";

const Contacts = forwardRef((_, ref: ForwardedRef<HTMLElement | null>) => {
  return (
    <Section id="contacts" ref={ref}>
      <div className="flex flex-col items-center justify-center gap-14">
        <div className="flex flex-col items-center justify-center gap-6">
          <h2 className="text-3xl font-bold">Follow us...</h2>
          <div className="flex items-center justify-center gap-8">
            <Link
              to=""
              className="border-y-4 border-y-transparent pb-2 hover:border-b-accent"
            >
              <SvgButton
                label="Instagram"
                svg={Instagram}
                width="48px"
                height="48px"
                className="hover:text-accent"
              />
            </Link>
            <Link
              to=""
              className="border-y-4 border-y-transparent pb-2 hover:border-b-accent"
            ></Link>
            <Link
              to=""
              className="border-y-4 border-y-transparent pb-2 hover:border-b-accent"
            >
              <SvgButton
                label="Github"
                svg={Github}
                width="48px"
                height="48px"
                className="hover:text-accent"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-6">
          <h2 className="text-3xl font-bold">... or write us!</h2>
          <Link
            to=""
            className="border-y-4 border-y-transparent pb-2 hover:border-b-accent"
          >
            <SvgButton
              label="Email"
              svg={Email}
              width="48px"
              height="48px"
              className="hover:text-accent"
            />
          </Link>
        </div>
      </div>
    </Section>
  );
});

export default Contacts;
