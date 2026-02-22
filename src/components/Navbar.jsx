import { Link } from "react-scroll";

const navItems = [
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Stats", to: "stats" },
  { label: "Certifications", to: "certifications" },
  { label: "Contact", to: "contact" },
];

export default function Navbar({ owner }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/35 backdrop-blur-xl">
      <nav className="mx-auto w-full max-w-6xl px-5 py-3 sm:px-7 lg:px-10">
        <div className="flex items-center justify-between">
          <Link to="home" smooth duration={650} offset={-75} className="cursor-pointer text-sm font-semibold tracking-wide text-white">
            {owner.name}
          </Link>
          <ul className="hidden items-center gap-5 text-sm text-slate-300 md:flex">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth
                  duration={650}
                  offset={-75}
                  spy
                  activeClass="text-blue-300"
                  className="cursor-pointer transition hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-2 flex gap-2 overflow-x-auto pb-1 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              duration={650}
              offset={-95}
              spy
              activeClass="border-blue-300/50 text-blue-200"
              className="shrink-0 cursor-pointer rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-slate-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
