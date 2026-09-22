import { Link, createFileRoute } from "@tanstack/react-router";
import {
  Award,
  Building2,
  CheckCircle2,
  MapPin,
  Package,
  Sparkles,
  Users,
} from "lucide-react";
import heroImg from "@/assets/hero-bakery.jpg";
import giftbox from "@/assets/b-giftbox.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Prakash Food Products" },
      { name: "description", content: "Prakash Food Products — a trusted bakery and food manufacturer in Nashik, Maharashtra, serving customers since the 1970s." },
      { property: "og:title", content: "About — Prakash Food Products" },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const stats = [
  { icon: Award, value: "1970s", label: "Established" },
  { icon: Building2, value: "20,000 sq ft", label: "Manufacturing facility" },
  { icon: Users, value: "35+ years", label: "Serving customers" },
];

const products = [
  "Khari & Toast",
  "Cookies & Biscuits",
  "Cakes",
  "Breads",
  "Namkeen",
  "Chocolates",
  "Moulded Chocolates",
  "Chocolate Bars",
];

const customers = [
  "Sweet Shops",
  "Cake & Bakery Shops",
  "Canteens",
  "Hospitals",
  "Schools & Educational Institutions",
  "Corporate Offices",
  "Gift Shops",
  "Large Companies & Industrial Organizations",
];

const vision = [
  "Quality Products",
  "Consistent Taste",
  "Innovation",
  "Reliable Service",
  "Customer Satisfaction",
];

const leadership = [
  {
    name: "Late Shree Fagunmal Valecha",
    image: "/images/about/late-shree-fagunmal-valecha.jpg",
  },
  {
    name: "Vinod Valecha",
    image: "/images/about/prakash-valecha.png",
  },
  {
    name: "Prakash Valecha",
    image: "/images/about/vinod-valecha.webp",
  },
];

function AboutPage() {
  return (
    <>
      <section className="container-x py-10 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-secondary text-xs font-bold tracking-[0.25em] uppercase">
              Tradition of Taste. Commitment to Quality.
            </p>
            <h1 className="font-display mt-3 text-4xl font-bold leading-[1.1] lg:text-5xl">
              About Prakash Food Products
            </h1>
            <p className="text-muted-foreground mt-5 text-base leading-relaxed">
              Prakash Food Products is a trusted bakery and food products manufacturer based in Nashik, Maharashtra, India. Established in the 1970s, we have grown from a small-scale bakery into a well-established food manufacturing company, driven by our commitment to quality, innovation, and customer satisfaction.
            </p>
            <p className="text-muted-foreground mt-3 text-base leading-relaxed">
              With decades of experience in the industry, we manufacture and supply a wide range of bakery and food products to customers across the region.
            </p>
          </div>
          <div className="card-soft overflow-hidden">
            <img src={heroImg} alt="Prakash Food Products bakery" className="aspect-[4/3] w-full object-cover" loading="lazy" />
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {stats.map((s) => (
            <div key={s.label} className="card-soft flex flex-col items-center gap-2 p-4 text-center">
              <s.icon className="text-primary h-6 w-6" />
              <span className="font-display text-lg font-bold">{s.value}</span>
              <span className="text-muted-foreground text-xs leading-tight font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-12">
        <div className="text-center">
          <p className="text-secondary text-xs font-bold tracking-[0.2em] uppercase">Our People</p>
          <h2 className="font-display mt-1 text-3xl font-bold">The People Behind Prakash Food Products</h2>
        </div>
        <div className="mx-auto mt-8 grid max-w-4xl gap-6 sm:grid-cols-3">
          {leadership.map((person) => (
            <figure key={person.name} className="card-soft overflow-hidden text-center">
              <img
                src={person.image}
                alt={person.name}
                className="aspect-[3/4] w-full object-cover object-top"
                loading="lazy"
              />
              <figcaption className="font-display p-4 text-lg font-bold">
                {person.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="container-x py-12">
        <p className="text-secondary text-xs font-bold tracking-[0.2em] uppercase">What we make</p>
        <h2 className="font-display mt-1 text-3xl font-bold">Our Products</h2>
        <p className="text-muted-foreground mt-3 max-w-2xl text-sm leading-relaxed">
          Our diverse product range spans bakery staples and chocolate, and we continuously work on expanding it to meet changing customer preferences and market demands.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {products.map((p) => (
            <div key={p} className="card-soft flex items-center gap-2 p-4">
              <Package className="text-primary h-4 w-4 shrink-0" />
              <span className="text-sm font-semibold">{p}</span>
            </div>
          ))}
        </div>
        <Link
          to="/shop"
          className="text-primary mt-5 inline-block text-sm font-semibold hover:underline"
        >
          Browse our full range →
        </Link>
      </section>

      <section className="container-x py-12">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-secondary text-xs font-bold tracking-[0.2em] uppercase">Our Journey</p>
            <h2 className="font-display mt-1 text-3xl font-bold">
              From a small bakery to a modern manufacturing setup.
            </h2>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
              Over the years, Prakash Food Products has successfully grown from a small-scale operation into a modern manufacturing setup. Our journey has been built on consistent quality, hard work, customer trust, and continuous improvement.
            </p>
            <div className="border-border mt-5 flex items-center gap-3 rounded-xl border p-4">
              <MapPin className="text-primary h-5 w-5 shrink-0" />
              <p className="text-sm">
                Today, we operate from our industrial facility located in{" "}
                <span className="font-semibold">Satpur MIDC, Nashik</span>, with an approximately{" "}
                <span className="font-semibold">20,000 sq. ft.</span> manufacturing setup.
              </p>
            </div>
          </div>

          <div>
            <p className="text-secondary text-xs font-bold tracking-[0.2em] uppercase">Who we serve</p>
            <h2 className="font-display mt-1 text-2xl font-bold">
              Serving customers across industries for 35+ years.
            </h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              We supply our products to a wide range of customers and businesses, with a focus on quality products backed by reliable and prompt service.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {customers.map((c) => (
                <span
                  key={c}
                  className="bg-accent text-accent-foreground rounded-full px-3 py-1.5 text-xs font-semibold"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-12">
        <div className="card-soft grid gap-8 overflow-hidden p-8 sm:p-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-secondary text-xs font-bold tracking-[0.2em] uppercase">Innovation & Growth</p>
            <h2 className="font-display mt-1 text-2xl font-bold sm:text-3xl">
              Investing in research and product development.
            </h2>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
              At Prakash Food Products, we believe innovation is essential for growth. We continuously invest in research and product development to understand changing market trends and customer requirements.
            </p>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              In recent years, we have expanded into Namkeen and Moulded Chocolates, developing premium chocolate products under our own brands — made with quality ingredients including milk, nuts, cocoa-based ingredients, and a variety of centre fillings.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <span className="bg-primary text-primary-foreground rounded-lg px-4 py-2 text-sm font-bold tracking-wide">
                Choco Superio
              </span>
              <span className="bg-primary text-primary-foreground rounded-lg px-4 py-2 text-sm font-bold tracking-wide">
                Choco Delicio
              </span>
              <span className="bg-primary text-primary-foreground rounded-lg px-4 py-2 text-sm font-bold tracking-wide">
                Five Seasons Premium Chocolates
              </span>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img src={giftbox} alt="Premium chocolate range" className="aspect-square w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="container-x py-12 lg:py-16">
        <div className="bg-primary text-primary-foreground overflow-hidden rounded-3xl p-10 text-center sm:p-14">
          <Sparkles className="mx-auto h-8 w-8" />
          <h2 className="font-display mx-auto mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
            Our Vision
          </h2>
          <p className="text-primary-foreground/80 mx-auto mt-3 max-w-xl text-sm">
            To continue growing as a trusted food manufacturing company while expanding our product range and reaching new markets — building long-term relationships with our customers through:
          </p>
          <div className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-3">
            {vision.map((v) => (
              <span
                key={v}
                className="bg-background/15 flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold"
              >
                <CheckCircle2 className="h-4 w-4" />
                {v}
              </span>
            ))}
          </div>
          <p className="text-primary-foreground/80 mx-auto mt-6 max-w-xl text-sm">
            Our long-term goal is to expand beyond local markets and establish a strong presence in national and international markets.
          </p>
        </div>
      </section>
    </>
  );
}
