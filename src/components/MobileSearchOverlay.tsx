import { Link } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { products } from "@/lib/data/products";
import { formatINR } from "@/lib/store/cart";

export function MobileSearchOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery("");
      inputRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const trimmed = query.trim().toLowerCase();
  const results = trimmed
    ? products.filter((p) => p.name.toLowerCase().includes(trimmed)).slice(0, 20)
    : [];

  return (
    <div className="bg-background fixed inset-0 z-50 flex flex-col lg:hidden">
      <div className="border-border flex items-center gap-2 border-b p-3">
        <Search className="text-muted-foreground h-5 w-5 shrink-0" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          className="w-full bg-transparent py-2 text-base outline-none"
        />
        <button aria-label="Close search" className="hover:bg-accent shrink-0 rounded-md p-2" onClick={onClose}>
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-3">
        {!trimmed ? (
          <p className="text-muted-foreground px-1 py-3 text-sm">Start typing to search products.</p>
        ) : results.length === 0 ? (
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
                  onClick={onClose}
                  className="hover:bg-accent flex items-center gap-3 rounded-lg p-2 transition-colors"
                >
                  <img src={p.image} alt="" className="h-12 w-12 shrink-0 rounded-md object-cover" />
                  <span className="line-clamp-1 flex-1 text-sm font-medium">{p.name}</span>
                  <span className="text-primary shrink-0 text-xs font-semibold">{formatINR(p.price)}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
