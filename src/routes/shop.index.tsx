import { Link, createFileRoute } from "@tanstack/react-router";
import { CategoryQuickNav } from "@/components/CategoryQuickNav";
import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/lib/data/products";

export const Route = createFileRoute("/shop/")({
  head: () => ({
    meta: [
      { title: "Shop — Prakash Food Products" },
      { name: "description", content: "Browse our full range of artisan breads, cakes, pastries, cookies, muffins, donuts and gift boxes." },
      { property: "og:title", content: "Shop — Prakash Food Products" },
      { property: "og:url", content: "/shop" },
    ],
    links: [{ rel: "canonical", href: "/shop" }],
  }),
  component: Shop,
});

function Shop() {
  return (
    <>
      <CategoryQuickNav />
      <div className="container-x py-8 lg:py-12">
        <div className="bg-primary text-primary-foreground mb-8 overflow-hidden rounded-2xl p-8 sm:p-12">
          <h1 className="font-display text-3xl font-bold sm:text-4xl">Our Products</h1>
          <p className="text-primary-foreground/80 mt-2 max-w-md text-sm">
            A wide range of traditional & delicious food products made with love.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
          <aside className="card-soft h-fit p-5">
            <h3 className="mb-4 text-sm font-bold tracking-wider uppercase">
              Categories
            </h3>
            <ul className="space-y-1">
              <li>
                <Link
                  to="/shop"
                  activeOptions={{ exact: true }}
                  activeProps={{ className: "bg-primary text-primary-foreground" }}
                  className="hover:bg-accent block rounded-lg px-3 py-2 text-sm font-medium"
                >
                  All Products
                </Link>
              </li>
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/shop/$slug"
                    params={{ slug: c.slug }}
                    activeProps={{ className: "bg-primary text-primary-foreground" }}
                    className="hover:bg-accent block rounded-lg px-3 py-2 text-sm font-medium"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          <div>
            <div className="mb-4 flex items-center justify-between">
              <p className="text-muted-foreground text-sm">{products.length} products</p>
              <select className="bg-card border-border rounded-lg border px-3 py-2 text-sm">
                <option>Sort: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Top Rated</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-5">
              {products.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
