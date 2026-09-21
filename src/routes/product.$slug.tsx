import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Sparkles, Star } from "lucide-react";
import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { findProduct, products } from "@/lib/data/products";
import { formatINR } from "@/lib/store/cart";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = findProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ params, loaderData }) => {
    const p = loaderData?.product;
    return {
      meta: [
        { title: `${p?.name ?? "Product"} — Prakash Food Products` },
        { name: "description", content: p?.description ?? "" },
        { property: "og:title", content: p?.name },
        { property: "og:description", content: p?.description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/product/${params.slug}` },
        ...(p?.image ? [{ property: "og:image", content: p.image }] : []),
      ],
      links: [{ rel: "canonical", href: `/product/${params.slug}` }],
      scripts: p ? [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: p.name,
          description: p.description,
          image: p.image,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: p.rating,
            reviewCount: p.reviews,
          },
          offers: {
            "@type": "Offer",
            price: p.price,
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
          },
        }),
      }] : [],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const [option, setOption] = useState(product.options[0]);
  const unitPrice = option.price;
  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4);

  return (
    <div className="container-x py-8 lg:py-12">
      <nav className="text-muted-foreground mb-6 text-xs">
        <Link to="/" className="hover:text-primary">Home</Link> ·{" "}
        <Link to="/shop/$slug" params={{ slug: product.category }} className="hover:text-primary capitalize">
          {product.category.replace("-", " ")}
        </Link>{" "}· <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card-soft group overflow-hidden"
        >
          <div className="bg-muted aspect-square overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              width={1024}
              height={1024}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <p className="text-muted-foreground px-4 py-2 text-center text-[10px] leading-tight">
            Images are for illustrative purposes only. Actual product appearance may vary.
          </p>
        </motion.div>

        <div>
          <h1 className="font-display text-3xl font-bold lg:text-4xl">{product.name}</h1>
          <div className="mt-3 flex items-center gap-2 text-sm">
            <div className="text-secondary flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="fill-secondary h-4 w-4" />
              ))}
            </div>
            <span className="text-muted-foreground">({product.reviews} Reviews)</span>
          </div>
          <div className="mt-5">
            <span className="text-primary text-3xl font-bold">{formatINR(unitPrice)}</span>
            <span className="text-muted-foreground ml-2 text-sm">/ {option.label}</span>
            <span className="text-muted-foreground mt-1 block text-xs">(inclusive of all taxes)</span>
          </div>
          <p className="text-muted-foreground mt-5 text-sm leading-relaxed">{product.description}</p>

          {product.options.length > 1 && (
            <div className="mt-6">
              <p className="mb-2 text-sm font-semibold">Size</p>
              <div className="flex gap-2">
                {product.options.map((o) => (
                  <button
                    key={o.label}
                    onClick={() => setOption(o)}
                    className={`rounded-lg border px-5 py-2 text-sm font-semibold transition-all ${
                      option.label === o.label
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 grid grid-cols-3 gap-3 border-y border-border py-5">
            {[
              { icon: Leaf, label: "100% Pure Ingredients" },
              { icon: ShieldCheck, label: "No Artificial Preservatives" },
              { icon: Sparkles, label: "Made Fresh Everyday" },
            ].map((f) => (
              <div key={f.label} className="flex flex-col items-center gap-2 text-center">
                <f.icon className="text-primary h-6 w-6" />
                <span className="text-[11px] font-medium leading-tight">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Info */}
      <section className="mt-14">
        <h2 className="font-display mb-4 text-xl font-bold">Product Information</h2>
        <div className="card-soft grid gap-6 p-6 md:grid-cols-3">
          <div>
            <h4 className="text-secondary mb-1 text-xs font-bold tracking-wider uppercase">Ingredients</h4>
            <p className="text-muted-foreground text-sm">{product.ingredients}</p>
          </div>
          <div>
            <h4 className="text-secondary mb-1 text-xs font-bold tracking-wider uppercase">Storage</h4>
            <p className="text-muted-foreground text-sm">{product.storage}</p>
          </div>
          <div>
            <h4 className="text-secondary mb-1 text-xs font-bold tracking-wider uppercase">Nutrition</h4>
            <p className="text-muted-foreground text-sm">{product.nutrition}</p>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="font-display mb-6 text-2xl font-bold">You might also like</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {related.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </section>
      )}
    </div>
  );
}
