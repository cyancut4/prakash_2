import { createFileRoute } from "@tanstack/react-router";
import sourdough from "@/assets/b-sourdough.jpg";
import croissant from "@/assets/b-croissant.jpg";
import giftbox from "@/assets/b-giftbox.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Prakash Bakery" },
      { name: "description", content: "Recipes, baking notes and stories from Prakash Bakery." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const posts = [
  { title: "The Art of Sourdough", excerpt: "Inside the 36-hour slow ferment behind our signature loaf.", img: sourdough, cat: "Baking" },
  { title: "A Holiday to Remember", excerpt: "Festive gifting ideas from our patisserie counter.", img: giftbox, cat: "Festival" },
  { title: "Laminating the Perfect Croissant", excerpt: "Layers of butter, hours of patience — here's how.", img: croissant, cat: "Stories" },
];

function BlogPage() {
  return (
    <div className="container-x py-10 lg:py-16">
      <div className="text-center">
        <p className="text-secondary text-xs font-bold tracking-[0.25em] uppercase">Stories & recipes</p>
        <h1 className="font-display mt-2 text-3xl font-bold lg:text-4xl">From our kitchen</h1>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {posts.map((p) => (
          <article key={p.title} className="card-soft group overflow-hidden">
            <div className="bg-muted aspect-[4/3] overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <span className="text-secondary text-xs font-bold tracking-wider uppercase">{p.cat}</span>
              <h2 className="font-display mt-2 text-xl font-bold">{p.title}</h2>
              <p className="text-muted-foreground mt-2 text-sm">{p.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
