/// <reference types="vite-plugin-svgr/client" />
import { ReactNode } from "react";
import Flame from "../assets/svgs/flame-svgrepo-com.svg?react";

export default function FeatureElement({
  ill,
  children,
  rightAlign = false,
}: {
  ill: string;
  children: ReactNode;
  rightAlign?: boolean;
}) {
  return (
    <div
      className={`w-[85%] sm:w-full flex flex-col ${
        rightAlign ? "sm:flex-row-reverse" : "sm:flex-row"
      } items-center justify-center gap-2`}
    >
      <img className="w-full sm:w-2/5" src={ill} alt="chibi-scene-1" />
      <div
        className={`flex flex-col  ${
          rightAlign ? "sm:flex-row-reverse" : "sm:flex-row"
        } items-center justify-center gap-4`}
      >
        {window.innerWidth >= 640 && (
          <Flame width="64px" height="64px" fill="#DEB074" />
        )}
        <p
          className={`pt-4 border-t-accent border-t-2 sm:pt-0 sm:border-t-0 ${
            rightAlign
              ? "sm:pr-4 sm:border-r-accent sm:border-r-2 sm:text-right"
              : "sm:pl-4 sm:border-l-accent sm:border-l-2"
          }`}
        >
          {children}
        </p>
      </div>
    </div>
  );
}
