import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./SectionHeading";

function StatCard({ label, value, suffix }) {
  const { ref, inView } = useInView({ threshold: 0.35, triggerOnce: true });

  return (
    <article ref={ref} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
      <p className="text-sm uppercase tracking-wide text-slate-400">{label}</p>
      <p className="mt-2 text-4xl font-semibold text-white">
        {inView ? <CountUp end={value} duration={1.3} separator="," /> : 0}
        {suffix}
      </p>
    </article>
  );
}

export default function Stats({ stats }) {
  return (
    <section>
      <SectionHeading eyebrow="Achievements" title="Coding Performance" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} label={stat.label} value={stat.value} suffix={stat.suffix} />
        ))}
      </div>
    </section>
  );
}