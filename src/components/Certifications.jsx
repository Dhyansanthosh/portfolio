import { Award } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Certifications({ certifications }) {
  return (
    <section>
      <SectionHeading eyebrow="Certifications" title="Verified Learning" />
      <div className="grid gap-3 sm:grid-cols-2">
        {certifications.map((item) => (
          <article
            key={item}
            className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-300/35"
          >
            <span className="rounded-md border border-white/15 bg-black/20 p-2 text-violet-200 transition group-hover:scale-110">
              <Award size={16} />
            </span>
            <p className="text-sm text-slate-200">{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}