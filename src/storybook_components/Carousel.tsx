/// <reference types="vite-plugin-svgr/client" />
import { useRef, useEffect, useState } from "react";
import CardProps from "../interfaces/CardProps";
import ImageProps from "../interfaces/ImageProps";
import AltImageProps from "../interfaces/AltImageProps";
import Card from "./Card";
import Image from "./Image";
import AltImage from "./AltImage";
import SvgButton from "./SvgButton";
import PreviousElement from "../assets/svgs/left-chevron-svgrepo-com.svg?react";
import NextElement from "../assets/svgs/right-chevron-svgrepo-com.svg?react";
import CardImage from "./CardImage";

interface Carousel {
  elements: CardProps[] | ImageProps[] | AltImageProps[];
  alternative?: boolean;
  cardNum?: number;
}

export default function Carousel({
  elements,
  alternative,
  cardNum = 2,
}: Carousel) {
  const prevEls = [];
  const nextEls = [];
  const [currentSlide, setCurrentSlide] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [disabledButtons, setDisabledButtons] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  if (window.innerWidth >= 1536) {
    cardNum = 3;
  }

  function isCard(el: CardProps | ImageProps | AltImageProps): el is CardProps {
    return (el as CardProps).headline !== undefined;
  }

  function isAltImage(
    el: CardProps | AltImageProps | ImageProps
  ): el is AltImageProps {
    return (el as AltImageProps).title !== undefined;
  }

  const list = elements.map((el, i) => {
    if (isCard(el)) {
      return (
        <li key={i}>
          <Card
            img={el.img}
            altText={el.altText}
            headline={el.headline}
            subhead={el.subhead}
            description={el.description}
          />
        </li>
      );
    } else if (isAltImage(el) && alternative) {
      return (
        <li key={i}>
          <CardImage
            url={el.url}
            altText={el.altText}
            title={el.title}
            description={el.description}
            link={el.link}
          />
        </li>
      );
    } else if (isAltImage(el)) {
      return (
        <li key={i}>
          <AltImage
            url={el.url}
            altText={el.altText}
            title={el.title}
            description={el.description}
            link={el.link}
          />
        </li>
      );
    } else {
      return (
        <li key={i}>
          <Image url={el.url} altText={el.altText} />
        </li>
      );
    }
  });

  for (let i = 1; i <= list.length % cardNum; i++) {
    prevEls.push(list[list.length - 1]);
  }

  for (let i = 0; i <= cardNum; i++) {
    nextEls.push(list[i]);
  }

  function handleNext() {
    if (!disabledButtons) {
      setCurrentSlide((prev) => prev + 1);
    }
  }

  function handlePrevious() {
    if (!disabledButtons) {
      setCurrentSlide((prev) => prev - 1);
    }
  }

  function setLoop() {
    if (currentSlide === 0) {
      setDisabledButtons(true);
      setTransitionEnabled(false);
      setCurrentSlide(list.length);
    } else if (currentSlide === list.length + 1) {
      setDisabledButtons(true);
      setTransitionEnabled(false);
      setCurrentSlide(1);
    } else {
      setDisabledButtons(false);
    }
  }

  useEffect(() => {
    wrapperRef.current!.addEventListener("transitionstart", () => {
      setDisabledButtons(true);
    });
  }, []);

  useEffect(() => {
    if (currentSlide === 1 || currentSlide === list.length) {
      setDisabledButtons(false);
      setTimeout(() => {
        setTransitionEnabled(true);
      }, 100);
    }
  }, [currentSlide, list.length]);

  return (
    <div className="relative flex items-center gap-4">
      <SvgButton
        label="Previous Card"
        width={window.innerWidth < 640 ? "32px" : "48px"}
        height={window.innerWidth < 640 ? "32px" : "48px"}
        svg={PreviousElement}
        onClick={handlePrevious}
        className="sm:static absolute left-[50%] translate-x-[-85%] top-[100%]"
      />
      <ul className="list-none w-[85vw] sm:w-[50vw] overflow-hidden p-0 pb-3">
        <div
          className={`flex items-center m-0 p-0 ${
            transitionEnabled ? "transition duration-1000" : ""
          }`}
          ref={wrapperRef}
          onTransitionEnd={setLoop}
          style={{
            transform: `translateX(-${(100 * currentSlide) / cardNum}%)`,
          }}
        >
          {prevEls.map((el, i) => (
            <span key={i}>{el}</span>
          ))}
          {list}
          {nextEls.map((el, i) => (
            <span key={i}>{el}</span>
          ))}
        </div>
      </ul>

      <SvgButton
        label="Next Card"
        svg={NextElement}
        onClick={handleNext}
        width={window.innerWidth < 640 ? "32px" : "48px"}
        height={window.innerWidth < 640 ? "32px" : "48px"}
        className="sm:static absolute right-[50%] translate-x-[85%] top-[100%]"
      />
    </div>
  );
}
