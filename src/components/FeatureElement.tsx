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
      className={`w-full flex ${
        rightAlign ? "flex-row-reverse" : ""
      } items-center justify-center gap-2`}
    >
      <img className="w-2/5" src={ill} alt="chibi-scene-1" />
      <div
        className={`flex ${
          rightAlign ? "flex-row-reverse" : ""
        } items-center justify-center gap-4`}
      >
        <Flame width="64px" height="64px" fill="#DEB074" />
        <p
          className={
            rightAlign
              ? "pr-4 border-r-accent border-r-2 text-right"
              : "pl-4 border-l-accent border-l-2"
          }
        >
          {children}
        </p>
      </div>
    </div>
  );
}
