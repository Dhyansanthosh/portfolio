export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8">
      <p className="text-xs uppercase tracking-[0.22em] text-blue-300">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 max-w-3xl text-base text-slate-400">{description}</p> : null}
    </div>
  );
}