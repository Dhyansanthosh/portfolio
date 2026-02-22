import { m } from "framer-motion";
import { Braces, Database, Layers3, Monitor, Server, Wrench } from "lucide-react";
import SectionHeading from "./SectionHeading";

const iconMap = {
  Programming: Braces,
  Backend: Server,
  Frontend: Monitor,
  Database: Database,
  Core: Layers3,
  Tools: Wrench,
};

export default function Skills({ skills }) {
  return (
    <section>
      <SectionHeading eyebrow="Skills" title="Technical Stack" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([group, values]) => {
          const Icon = iconMap[group] || Braces;
          return (
            <m.article
              key={group}
              whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
              transition={{ type: "spring", stiffness: 260, damping: 16 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-lg shadow-black/20"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg border border-blue-300/25 bg-blue-500/10 p-2 text-blue-200 transition duration-300 group-hover:scale-110">
                  <Icon size={18} />
                </div>
                <h3 className="text-lg font-semibold text-white">{group}</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-300">
                {values.map((item) => (
                  <li key={item} className="rounded-md border border-white/10 bg-black/20 px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </m.article>
          );
        })}
      </div>
    </section>
  );
}