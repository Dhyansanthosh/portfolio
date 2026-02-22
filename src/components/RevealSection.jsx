import { m } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function RevealSection({ children }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <m.section
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mb-24"
    >
      {children}
    </m.section>
  );
}