import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { CategoryQuickNav } from "@/components/CategoryQuickNav";
import { ProductCard } from "@/components/ProductCard";
import {
  categories,
  productsByCategory,
  type CategorySlug,
} from "@/lib/data/products";

export const Route = createFileRoute("/shop/$slug")({
  loader: ({ params }) => {
    const cat = categories.find((c) => c.slug === params.slug);
    if (!cat) throw notFound();
    return { cat };
  },
  head: ({ params }) => {
    const cat = categories.find((c) => c.slug === params.slug);
    const name = cat?.name ?? "Category";
    return {
      meta: [
        { title: `${name} — Prakash Food Products` },
        { name: "description", content: `Shop ${name} from Prakash. Authentic, premium quality, made fresh.` },
        { property: "og:title", content: `${name} — Prakash` },
        { property: "og:url", content: `/shop/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/shop/${params.slug}` }],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { slug } = Route.useParams();
  const items = productsByCategory(slug as CategorySlug);
  const cat = categories.find((c) => c.slug === slug)!;

  return (
    <>
      <CategoryQuickNav />
      <div className="container-x py-8 lg:py-12">
        <nav className="text-muted-foreground mb-4 text-xs">
          <Link to="/" className="hover:text-primary">Home</Link> ·{" "}
          <Link to="/shop" className="hover:text-primary">Shop</Link> ·{" "}
          <span className="text-foreground">{cat.name}</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
          <aside className="card-soft h-fit p-5">
            <h3 className="mb-4 text-sm font-bold tracking-wider uppercase">Categories</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/shop" className="hover:bg-accent block rounded-lg px-3 py-2 text-sm font-medium">
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
            <div className="bg-primary text-primary-foreground mb-6 grid grid-cols-[1fr_auto] items-center overflow-hidden rounded-2xl p-6 sm:p-8">
              <div>
                <h1 className="font-display text-2xl font-bold sm:text-3xl">{cat.name}</h1>
                <p className="text-primary-foreground/80 mt-1 text-sm">
                  {items.length} delicious products
                </p>
              </div>
              <img src={cat.image} alt="" className="h-20 w-20 rounded-xl object-cover sm:h-24 sm:w-24" />
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {items.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
