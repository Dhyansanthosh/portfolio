import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import gsap from "gsap";
import { m } from "framer-motion";
import { Download } from "lucide-react";
import TypingText from "./TypingText";

export default function Hero({ owner }) {
  const heroRef = useRef(null);
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-item",
        { opacity: 0, y: 26 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: "power3.out" }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const onMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setGlow({ x, y });
  };

  return (
    <section className="relative flex min-h-[calc(100vh-6rem)] items-center py-14" ref={heroRef}>
      <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_320px]">
        <div className="relative rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl sm:p-9" onMouseMove={onMouseMove}>
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl"
            style={{
              background: `radial-gradient(420px circle at ${glow.x}% ${glow.y}%, rgba(96,165,250,0.2), transparent 40%)`,
            }}
          />
          <p className="hero-item relative text-xs uppercase tracking-[0.22em] text-blue-300">Elite Backend Portfolio</p>
          <h1 className="hero-item relative mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">{owner.name}</h1>
          <p className="hero-item relative mt-3 text-base text-slate-300 sm:text-lg">{owner.degree}</p>
          <p className="hero-item relative mt-2 text-lg font-semibold text-slate-100 sm:text-2xl">{owner.role}</p>
          <p className="hero-item relative mt-4 min-h-8 text-lg text-blue-200 sm:text-xl">
            <TypingText texts={owner.typedRoles} />
          </p>

          <m.ul
            className="hero-item relative mt-7 flex flex-wrap gap-2.5"
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.55 } } }}
          >
            {owner.techBadges.map((badge) => (
              <m.li
                key={badge}
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-full border border-blue-400/25 bg-blue-500/10 px-3 py-1.5 text-sm text-blue-100"
              >
                {badge}
              </m.li>
            ))}
          </m.ul>

          <div className="hero-item relative mt-8 flex flex-wrap gap-3">
            <Link
              to="projects"
              smooth
              duration={700}
              offset={-75}
              className="cursor-pointer rounded-lg border border-blue-300/50 bg-blue-500/30 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.35)] transition hover:bg-blue-500/45"
            >
              View Projects
            </Link>

            {owner.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/20 bg-black/20 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-blue-300/45"
              >
                {link.label}
              </a>
            ))}

            <a
              href={owner.resumeHref}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-violet-300/35 bg-violet-500/20 px-4 py-2 text-sm font-semibold text-violet-100 transition hover:border-violet-200/60"
            >
              <Download size={16} />
              Resume Download
            </a>
          </div>
        </div>

        <div className="hero-item mx-auto w-full max-w-[300px] rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
          <img src={owner.avatar} alt={owner.name} className="h-[360px] w-full rounded-2xl object-cover object-top" />
          <p className="mt-3 text-center text-sm text-slate-300">{owner.location}</p>
        </div>
      </div>
    </section>
  );
}