import { m } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Projects({ projects }) {
  return (
    <section>
      <SectionHeading eyebrow="Projects" title="Premium Project Showcase" />
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <m.article
            key={project.title}
            whileHover={{ y: -8, scale: 1.015 }}
            transition={{ type: "spring", stiffness: 240, damping: 18 }}
            className="relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl border border-blue-300/0 transition duration-300 hover:border-blue-300/40" />
            <div className="mb-4 flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <span className="rounded-full border border-blue-300/25 bg-blue-500/10 px-3 py-1 text-xs text-blue-200">{project.emphasis}</span>
            </div>

            <div className="mb-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="rounded-full border border-white/15 bg-black/20 px-2.5 py-1 text-xs text-slate-300">
                  {tech}
                </span>
              ))}
            </div>

            <ul className="mb-5 space-y-2 text-sm text-slate-300">
              {project.features.map((feature) => (
                <li key={feature} className="rounded-md border border-white/10 bg-black/20 px-3 py-2">
                  {feature}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <a
                href={project.github || "#"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-3 py-2 text-sm text-slate-200 transition hover:border-white/40"
              >
                <Github size={16} />
                {project.github ? "GitHub" : "Add repo link"}
              </a>
              <a
                href={project.demo || "#"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-blue-300/25 bg-blue-500/10 px-3 py-2 text-sm text-blue-100 transition hover:border-blue-200/45"
              >
                <ExternalLink size={16} />
                {project.demo ? "Live Demo" : "Demo optional"}
              </a>
            </div>
          </m.article>
        ))}
      </div>
    </section>
  );
}