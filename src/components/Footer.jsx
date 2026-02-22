export default function Footer({ owner }) {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-3 px-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:px-7 lg:px-10">
        <p>{owner.name} • {owner.title}</p>
        <p>Built with React, Tailwind, Framer Motion, and GSAP</p>
      </div>
    </footer>
  );
}
