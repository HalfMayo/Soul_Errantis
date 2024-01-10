/// <reference types="vite-plugin-svgr/client" />
import Flame from "../assets/svgs/flame-svgrepo-com.svg?react";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h2 className="font-bold text-3xl border-b-accent border-b-2 pb-2">
        {title}
      </h2>
      <Flame width="24px" height="24px" fill="#DEB074" />
    </div>
  );
}
