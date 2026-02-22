import { useEffect, useMemo, useRef, useState } from "react";
import { useInView } from "framer-motion";
import SectionHeading from "./SectionHeading";

function CounterCard({ label, value, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) {
      return;
    }

    let frame;
    const duration = 1200;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  const displayValue = useMemo(() => `${count}${suffix}`, [count, suffix]);

  return (
    <article ref={ref} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
      <p className="text-sm uppercase tracking-wide text-slate-400">{label}</p>
      <p className="mt-2 text-4xl font-semibold text-white">{displayValue}</p>
    </article>
  );
}

export default function CompetitiveProgramming({ stats, note }) {
  return (
    <section>
      <SectionHeading eyebrow="Stats" title="Competitive Programming" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <CounterCard key={stat.label} label={stat.label} value={stat.value} suffix={stat.suffix} />
        ))}
      </div>
      {note ? <p className="mt-5 text-sm text-slate-300">{note}</p> : null}
    </section>
  );
}