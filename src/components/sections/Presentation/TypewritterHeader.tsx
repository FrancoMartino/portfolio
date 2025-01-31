import React, { useState, useEffect, useRef, useCallback } from "react";
import { TYPEWRITTER_HEADER } from "../../../config/constants";

interface Sequence {
  subtitle: string;
  title: string;
}

const sequences: Sequence[] = TYPEWRITTER_HEADER;

const TypewriterHeader = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, setText] = useState({ subtitle: "", title: "" });
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentField, setCurrentField] = useState<"subtitle" | "title">(
    "subtitle"
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  const handleIntersection = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      setIsVisible(entry.isIntersecting);
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });
    const currentContainer = containerRef.current;

    if (currentContainer) observer.observe(currentContainer);

    return () => {
      if (currentContainer) observer.unobserve(currentContainer);
      observer.disconnect();
    };
  }, [handleIntersection]);

  useEffect(() => {
    if (!isVisible) return;

    const { subtitle, title } = sequences[currentIndex];
    const speed = isDeleting ? 50 : 100;

    const updateText = () => {
      setText((prev) => {
        if (!isDeleting) {
          const nextSubtitle =
            prev.subtitle.length < subtitle.length
              ? subtitle.slice(0, prev.subtitle.length + 1)
              : prev.subtitle;
          const nextTitle =
            prev.subtitle === subtitle && prev.title.length < title.length
              ? title.slice(0, prev.title.length + 1)
              : prev.title;

          setCurrentField(nextTitle ? "title" : "subtitle");

          if (nextTitle === title) {
            setTimeout(() => setIsDeleting(true), 2000);
          }

          return { subtitle: nextSubtitle, title: nextTitle };
        } else {
          const nextTitle =
            prev.title.length > 0 ? prev.title.slice(0, -1) : "";
          const nextSubtitle =
            nextTitle === "" && prev.subtitle.length > 0
              ? prev.subtitle.slice(0, -1)
              : prev.subtitle;

          setCurrentField(nextTitle ? "title" : "subtitle");

          if (!nextSubtitle && !nextTitle) {
            setTimeout(() => {
              setIsDeleting(false);
              setCurrentIndex((currentIndex + 1) % sequences.length);
            }, 500);
          }

          return { subtitle: nextSubtitle, title: nextTitle };
        }
      });
    };

    const timeout = setTimeout(updateText, speed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentIndex, isVisible]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col text-left w-auto relative select-none"
    >
      <h6 className="font-mono text-green-300">
        <span
          className={`absolute bottom-0 ${
            currentField === "title" ? "invisible" : ""
          }`}
        >
          {text.subtitle}
          <span
            className={`animate-blink ${
              currentField === "title" ? "invisible" : ""
            }`}
          >
            |
          </span>
        </span>
        <span className={currentField === "subtitle" ? "invisible" : ""}>
          {text.subtitle || <span className="animate-blink">|</span>}
        </span>
      </h6>
      <h1 className="text-4xl font-bold text-white font-header">
        {text.title}
        <span
          className={`animate-blink ${
            currentField === "subtitle" ? "invisible" : ""
          }`}
        >
          |
        </span>
      </h1>
    </div>
  );
};

export default TypewriterHeader;
