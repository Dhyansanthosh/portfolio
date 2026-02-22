import SectionHeading from "./SectionHeading";

const highlightedTerms = [
  "Spring Boot",
  "JWT authentication",
  "REST API design",
  "database modeling",
  "500+ programming problems",
];

function emphasize(text) {
  const pattern = new RegExp(`(${highlightedTerms.join("|")})`, "gi");
  return text.split(pattern).map((part, index) => {
    const isMatch = highlightedTerms.some((term) => term.toLowerCase() === part.toLowerCase());
    return isMatch ? (
      <span key={`${part}-${index}`} className="font-semibold text-blue-200 drop-shadow-[0_0_6px_rgba(96,165,250,0.35)]">
        {part}
      </span>
    ) : (
      part
    );
  });
}

export default function About({ summary }) {
  return (
    <section>
      <SectionHeading eyebrow="About" title="Backend-Focused Engineering Mindset" />
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
        <div className="flex gap-5">
          <div className="w-[2px] shrink-0 rounded-full bg-gradient-to-b from-blue-400/80 to-transparent" />
          <div className="space-y-4">
            {summary.map((line, index) => (
              <p key={`about-${index}`} className="leading-relaxed text-slate-300">
                {emphasize(line)}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}