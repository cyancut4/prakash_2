import { Link } from "@tanstack/react-router";
import { categories } from "@/lib/data/products";

export function CategoryQuickNav() {
  return (
    <div className="bg-background/95 border-border sticky top-16 z-30 border-b backdrop-blur lg:top-20">
      <div className="container-x">
        <nav className="flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <Link
            to="/shop"
            activeOptions={{ exact: true }}
            activeProps={{ className: "bg-primary text-primary-foreground border-primary" }}
            className="border-border hover:border-primary shrink-0 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide whitespace-nowrap uppercase transition-colors"
          >
            All
          </Link>
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/shop/$slug"
              params={{ slug: c.slug }}
              activeProps={{ className: "bg-primary text-primary-foreground border-primary" }}
              className="border-border hover:border-primary shrink-0 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide whitespace-nowrap uppercase transition-colors"
            >
              {c.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
