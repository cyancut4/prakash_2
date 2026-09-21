import { Link, createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Award,
  Building2,
  CheckCircle2,
  Leaf,
  Package,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import heroImg from "@/assets/hero-bakery.jpg";
import { ProductCard } from "@/components/ProductCard";
import { bestsellers, categories, products } from "@/lib/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prakash Bakery — Trusted Since the 1970s" },
      { name: "description", content: "Artisan breads, cakes, pastries and gift boxes from Prakash Food Products, Nashik. Premium quality, hygienically prepared, freshly made every day." },
      { property: "og:title", content: "Prakash Bakery" },
      { property: "og:description", content: "Trusted since the 1970s. Freshly baked every morning." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const trust = [
  { icon: ShieldCheck, title: "Premium Quality" },
  { icon: Leaf, title: "Hygienic & Safe Process" },
  { icon: Sparkles, title: "Authentic Taste" },
  { icon: Award, title: "Trusted Since 1970s" },
];

const stats = [
  { icon: Award, value: "1970s", label: "Established" },
  { icon: Building2, value: "20,000 sq ft", label: "Manufacturing facility" },
  { icon: Users, value: "25+ Years", label: "Serving customers" },
  { icon: Package, value: "8+", label: "Product categories" },
];

const vision = ["Quality Products", "Consistent Taste", "Innovation", "Reliable Service", "Customer Satisfaction"];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="container-x relative overflow-hidden pt-6 pb-16 sm:pt-8 lg:pt-10 lg:pb-24">
        <div className="card-soft bg-gradient-to-br from-primary/10 via-secondary/5 to-secondary/10 relative z-10 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="border-border bg-accent/60 text-secondary inline-flex w-fit items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold tracking-wider uppercase"
              >
                <Sparkles className="h-3.5 w-3.5" />
                Trusted Since the 1970s
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display mt-5 text-4xl leading-[1.05] font-bold tracking-tight sm:text-5xl lg:text-6xl"
              >
                Freshly Baked,<br />Crafted with<br />Love Every Day.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-muted-foreground mt-6 max-w-md text-base"
              >
                Artisan breads, cakes & pastries — manufactured with care at our Nashik facility and baked fresh from our ovens to your table.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Link
                  to="/shop"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-lg px-7 py-3.5 text-sm font-bold tracking-wider uppercase shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
                >
                  Shop Now
                </Link>
                <Link
                  to="/about"
                  className="border-border hover:border-primary hover:text-primary inline-flex items-center justify-center rounded-lg border-2 px-7 py-3.5 text-sm font-bold tracking-wider uppercase transition-all"
                >
                  Our Story
                </Link>
              </motion.div>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-auto">
              <img
                src={heroImg}
                alt="Artisan bakery counter with fresh breads, croissants and golden cake"
                width={1280}
                height={1280}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="from-foreground/50 absolute inset-0 bg-gradient-to-t via-transparent to-transparent lg:bg-gradient-to-r" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-background/95 absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl p-4 shadow-xl backdrop-blur"
              >
                <div className="bg-primary/10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full">
                  <Award className="text-primary h-5 w-5" />
                </div>
                <div>
                  <p className="font-display text-lg leading-none font-bold">25+ Years</p>
                  <p className="text-muted-foreground mt-1 text-[11px] font-medium">of trusted quality</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="relative z-10 mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {trust.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -3 }}
              className="card-soft flex flex-col items-center gap-3 p-5 text-center"
            >
              <span className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full">
                <t.icon className="text-primary h-5 w-5" />
              </span>
              <span className="text-xs leading-tight font-semibold sm:text-sm">
                {t.title}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STATS BAND */}
      <section className="bg-primary text-primary-foreground py-10 lg:py-12">
        <div className="container-x grid grid-cols-2 gap-6 sm:grid-cols-4 sm:divide-x sm:divide-primary-foreground/20">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1.5 px-2 text-center">
              <s.icon className="h-5 w-5 opacity-80" />
              <span className="font-display text-2xl font-bold sm:text-3xl">{s.value}</span>
              <span className="text-primary-foreground/75 text-[11px] font-medium tracking-wide uppercase sm:text-xs">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* BESTSELLERS */}
      <section className="container-x py-12 lg:py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-secondary text-xs font-bold tracking-[0.2em] uppercase">
              Customer favourites
            </p>
            <h2 className="font-display mt-1 text-3xl font-bold lg:text-4xl">
              Our Bestsellers
            </h2>
            <span className="bg-secondary mt-3 block h-1 w-14 rounded-full" />
          </div>
          <Link
            to="/shop"
            className="text-primary hidden text-sm font-semibold hover:underline sm:block"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {bestsellers.slice(0, 8).map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <ProductCard product={p} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container-x py-12 lg:py-16">
        <div className="mb-8 text-center">
          <p className="text-secondary text-xs font-bold tracking-[0.2em] uppercase">
            Crafted with love
          </p>
          <h2 className="font-display mt-1 text-3xl font-bold lg:text-4xl">
            Explore Categories
          </h2>
          <span className="bg-secondary mx-auto mt-3 block h-1 w-14 rounded-full" />
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {categories.map((c, i) => {
            const count = products.filter((p) => p.category === c.slug).length;
            return (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <Link
                  to="/shop/$slug"
                  params={{ slug: c.slug }}
                  className="group relative block aspect-square overflow-hidden rounded-2xl shadow-md"
                >
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="from-foreground/90 absolute inset-0 bg-gradient-to-t via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="text-background text-base font-bold leading-tight">{c.name}</p>
                    <p className="text-background/75 mt-0.5 text-[11px] font-medium">{count} items</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Story banner */}
      <section className="container-x py-12 lg:py-20">
        <div className="bg-primary text-primary-foreground relative overflow-hidden rounded-3xl p-10 text-center sm:p-16">
          <div aria-hidden className="bg-secondary/25 pointer-events-none absolute -top-20 -right-10 h-64 w-64 rounded-full blur-3xl" />
          <div aria-hidden className="bg-background/10 pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full blur-3xl" />

          <p className="text-secondary relative text-xs font-bold tracking-[0.25em] uppercase">
            Since the 1970s
          </p>
          <h2 className="font-display relative mx-auto mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
            From a small Nashik bakery to a trusted name in quality food products.
          </h2>
          <p className="text-primary-foreground/80 relative mx-auto mt-4 max-w-xl text-sm">
            Built on consistent quality, hard work and customer trust — freshly made and delivered from our ovens to your table.
          </p>

          <div className="relative mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-2.5">
            {vision.map((v) => (
              <span
                key={v}
                className="bg-background/15 flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold"
              >
                <CheckCircle2 className="h-3.5 w-3.5" />
                {v}
              </span>
            ))}
          </div>

          <Link
            to="/about"
            className="bg-background text-foreground hover:bg-background/90 relative mt-8 inline-flex items-center rounded-lg px-6 py-3 text-sm font-bold tracking-wider uppercase"
          >
            Our Story
          </Link>
        </div>
      </section>
    </>
  );
}
