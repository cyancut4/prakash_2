import { Link } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { products } from "@/lib/data/products";
import { formatINR } from "@/lib/store/cart";

export function SearchBox() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [open]);

  const trimmed = query.trim().toLowerCase();
  const results = trimmed
    ? products.filter((p) => p.name.toLowerCase().includes(trimmed)).slice(0, 8)
    : [];

  return (
    <div className="relative" ref={containerRef}>
      <button
        aria-label={open ? "Close search" : "Search"}
        className="hover:bg-accent rounded-md p-2"
        onClick={() => {
          setOpen((o) => !o);
          setQuery("");
        }}
      >
        {open ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
      </button>

      {open && (
        <div className="card-soft absolute top-full right-0 z-50 mt-2 w-80 max-w-[90vw] p-3 shadow-lg">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="bg-background border-border focus:border-primary w-full rounded-lg border px-3 py-2.5 text-sm outline-none"
          />
          {trimmed && (
            <div className="mt-2 max-h-80 overflow-y-auto">
              {results.length === 0 ? (
                <p className="text-muted-foreground px-1 py-3 text-sm">
                  No products found for "{query.trim()}".
                </p>
              ) : (
                <ul className="space-y-1">
                  {results.map((p) => (
                    <li key={p.slug}>
                      <Link
                        to="/product/$slug"
                        params={{ slug: p.slug }}
                        onClick={() => setOpen(false)}
                        className="hover:bg-accent flex items-center gap-3 rounded-lg p-2 transition-colors"
                      >
                        <img
                          src={p.image}
                          alt=""
                          className="h-10 w-10 shrink-0 rounded-md object-cover"
                        />
                        <span className="line-clamp-1 flex-1 text-sm font-medium">
                          {p.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
