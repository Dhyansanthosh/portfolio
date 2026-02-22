import { useEffect, useState } from "react";

export default function TypingText({ texts, speed = 70, eraseSpeed = 35, pause = 1300 }) {
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index % texts.length];

    const timer = setTimeout(() => {
      if (deleting) {
        const next = current.slice(0, value.length - 1);
        setValue(next);
        if (!next) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        const next = current.slice(0, value.length + 1);
        setValue(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), pause);
        }
      }
    }, deleting ? eraseSpeed : speed);

    return () => clearTimeout(timer);
  }, [deleting, eraseSpeed, index, pause, speed, texts, value]);

  return (
    <span>
      {value}
      <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-blue-300 align-middle" />
    </span>
  );
}