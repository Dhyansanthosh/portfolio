import { AnimatePresence, m } from "framer-motion";

export default function PageLoader({ loading, ownerName }) {
  return (
    <AnimatePresence>
      {loading ? (
        <m.div
          className="fixed inset-0 z-[60] grid place-items-center bg-[#0e0e11]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-center"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-blue-300">Loading Portfolio</p>
            <p className="mt-3 text-2xl font-semibold text-white">{ownerName}</p>
          </m.div>
        </m.div>
      ) : null}
    </AnimatePresence>
  );
}