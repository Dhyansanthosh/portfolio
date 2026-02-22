import { Gauge, Layers3, ShieldCheck, Target } from "lucide-react";
import SectionHeading from "./SectionHeading";

const iconMap = [ShieldCheck, Target, Layers3, Gauge];

export default function ProfileHighlights({ highlights }) {
  return (
    <section>
      <SectionHeading
        eyebrow="Snapshot"
        title="Professional Highlights"
        description="Detailed overview of strengths, engineering style, and current technical focus."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {highlights.cards.map((item, index) => {
          const Icon = iconMap[index] || ShieldCheck;
          return (
            <article
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-300/30"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="rounded-lg border border-white/15 bg-black/25 p-2 text-blue-200">
                  <Icon size={18} />
                </div>
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">{item.label}</p>
              </div>
              <p className="text-xl font-semibold text-white">{item.value}</p>
              <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
            </article>
          );
        })}
      </div>

      <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
        <p className="mb-3 text-xs uppercase tracking-[0.16em] text-blue-300">Focus Areas</p>
        <div className="flex flex-wrap gap-2.5">
          {highlights.focusAreas.map((item) => (
            <span key={item} className="rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-sm text-slate-200">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
