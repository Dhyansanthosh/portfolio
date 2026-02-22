import { useState } from "react";
import { Check, Copy, Github, Linkedin, Mail } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Contact({ owner, contact }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="pb-4">
      <SectionHeading eyebrow="Contact" title="Let us Build Reliable Products" description="I am open to backend and full stack engineering opportunities." />

      <div className="rounded-3xl border border-white/10 bg-white/5 p-7 text-center backdrop-blur-xl sm:p-10">
        <p className="text-lg font-semibold text-white">{owner.name}</p>
        <p className="mt-1 text-sm text-slate-300">{owner.role}</p>

        <div className="mx-auto mt-6 flex max-w-xl flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-black/20 px-4 py-2 text-sm text-slate-100 transition hover:border-blue-300/45"
          >
            <Mail size={16} />
            {contact.email}
          </a>
          <button
            type="button"
            onClick={onCopy}
            className="inline-flex items-center gap-2 rounded-lg border border-blue-300/25 bg-blue-500/10 px-4 py-2 text-sm text-blue-100 transition hover:border-blue-200/45"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? "Copied" : "Copy Email"}
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-3">
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="social-btn">
            <Linkedin size={17} />
            LinkedIn
          </a>
          <a href={contact.github} target="_blank" rel="noreferrer" className="social-btn">
            <Github size={17} />
            GitHub
          </a>
          <a href={contact.leetcode} target="_blank" rel="noreferrer" className="social-btn">
            <span className="text-sm">LC</span>
            LeetCode
          </a>
        </div>
      </div>
    </section>
  );
}