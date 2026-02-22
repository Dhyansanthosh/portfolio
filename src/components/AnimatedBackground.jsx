import { m } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#0e0e11]" />
      <m.div
        className="absolute -left-28 top-20 h-[24rem] w-[24rem] rounded-full bg-blue-500/18 blur-3xl"
        animate={{ x: [0, 38, 0], y: [0, -24, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />
      <m.div
        className="absolute -right-28 bottom-8 h-[26rem] w-[26rem] rounded-full bg-violet-500/14 blur-3xl"
        animate={{ x: [0, -34, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
      />
      <div className="noise-layer absolute inset-0 opacity-20" />
    </div>
  );
}