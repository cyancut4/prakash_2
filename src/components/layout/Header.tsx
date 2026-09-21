import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { SearchBox } from "@/components/SearchBox";
import headerMascot from "@/assets/header-mascot.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About Us" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (r) => r.location.pathname });

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled
          ? "bg-background/90 border-border border-b backdrop-blur"
          : "bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div
        className={`container-x flex items-center justify-between gap-4 transition-[height] duration-300 ${
          scrolled ? "h-14 sm:h-16 lg:h-20" : "h-20 sm:h-24 lg:h-28"
        }`}
      >
        <button
          aria-label="Menu"
          className="hover:bg-accent rounded-md p-2 lg:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link
          to="/"
          aria-label="Prakash Bakery"
          className={`flex origin-left items-center gap-2 transition-transform duration-300 ${
            scrolled ? "scale-75" : "scale-100"
          }`}
        >
          <img
            src={headerMascot}
            alt=""
            aria-hidden="true"
            className="h-16 w-auto shrink-0 object-contain sm:h-24 lg:h-28"
          />
          <Logo taglineClassName="hidden sm:inline" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: n.to === "/" }}
              className="text-foreground/80 hover:text-primary text-base font-semibold tracking-wide uppercase transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <SearchBox />
        </div>
      </div>
    </header>

      {/* Mobile drawer */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/40 lg:hidden"
          onClick={() => setOpen(false)}
        >
          <aside
            className="bg-background animate-slide-in-right absolute inset-y-0 left-0 w-72 p-6 shadow-2xl"
            style={{ backgroundColor: "#FBF6EF" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-8 flex items-center justify-between">
              <Logo showTagline={false} />
              <button onClick={() => setOpen(false)} aria-label="Close">
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className="hover:bg-accent rounded-lg px-3 py-3 text-sm font-semibold"
                  activeProps={{ className: "bg-accent text-primary" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
