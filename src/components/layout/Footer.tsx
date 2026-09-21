import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Logo } from "@/components/Logo";
import { categories } from "@/lib/data/products";

export function Footer() {
  return (
    <footer className="border-border bg-card/60 border-t pt-16 pb-8">
      <div className="container-x grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo showTagline={false} />
          <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
            Freshly baked since the 1970s. Artisan breads, cakes, pastries and gift
            boxes, crafted every morning with the finest ingredients.
          </p>
          <div className="mt-5 flex gap-3">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
                className="hover:bg-primary hover:text-primary-foreground border-border flex h-9 w-9 items-center justify-center rounded-full border transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold tracking-wider uppercase">
            Quick Links
          </h4>
          <ul className="text-muted-foreground space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold tracking-wider uppercase">
            Categories
          </h4>
          <ul className="text-muted-foreground space-y-2 text-sm">
            {categories.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link
                  to="/shop/$slug"
                  params={{ slug: c.slug }}
                  className="hover:text-primary"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold tracking-wider uppercase">
            Newsletter
          </h4>
          <p className="text-muted-foreground mb-3 text-sm">
            Festival recipes & special offers, straight to your inbox.
          </p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="Your email"
              className="bg-background border-border focus:border-primary flex-1 rounded-lg border px-3 py-2 text-sm outline-none"
            />
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-4 text-sm font-semibold">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="container-x text-muted-foreground border-border mt-12 border-t pt-6 text-center text-xs">
        © {new Date().getFullYear()} Prakash Food Products. Since the 1970s. All
        rights reserved.
      </div>
    </footer>
  );
}
