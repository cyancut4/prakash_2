import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { Product } from "@/lib/data/products";
import { formatINR } from "@/lib/store/cart";

export function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="card-soft group overflow-hidden transition-shadow hover:shadow-xl hover:shadow-primary/5"
    >
      <Link
        to="/product/$slug"
        params={{ slug: product.slug }}
        className="block"
      >
        <div className="bg-muted relative aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            width={600}
            height={600}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <p className="text-muted-foreground px-3 pt-2 text-center text-[9px] leading-tight">
        Images are for illustrative purposes only. Actual product appearance may vary.
      </p>
      <div className="p-4">
        <Link to="/product/$slug" params={{ slug: product.slug }}>
          <h3 className="hover:text-primary line-clamp-1 text-sm font-semibold">
            {product.name}
          </h3>
        </Link>
        <div className="text-muted-foreground mt-1 flex items-center gap-1 text-xs">
          <Star className="fill-secondary text-secondary h-3 w-3" />
          <span>{product.rating.toFixed(1)}</span>
          <span>({product.reviews})</span>
        </div>
        <div className="mt-3 flex items-baseline gap-1">
          <span className="text-primary text-base font-bold">
            {formatINR(product.price)}
          </span>
          <span className="text-muted-foreground text-[11px]">
            / {product.unit}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
