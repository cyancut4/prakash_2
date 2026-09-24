import { Link, createFileRoute } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { formatINR, useCart } from "@/lib/store/cart";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart — Prakash Food Products" },
      { name: "description", content: "Review your selected items and proceed to checkout." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const items = useCart((s) => s.items);
  const setQty = useCart((s) => s.setQty);
  const remove = useCart((s) => s.remove);
  const subtotal = useCart((s) => s.subtotal());
  const [coupon, setCoupon] = useState("");
  const shipping = items.length ? 50 : 0;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="container-x py-20 text-center">
        <ShoppingBag className="text-muted-foreground mx-auto h-14 w-14" />
        <h1 className="font-display mt-4 text-2xl font-bold">Your cart is empty</h1>
        <p className="text-muted-foreground mt-2 text-sm">Add some freshly baked goods to begin.</p>
        <Link
          to="/shop"
          className="bg-primary text-primary-foreground hover:bg-primary/90 mt-6 inline-flex rounded-lg px-6 py-3 text-sm font-bold tracking-wider uppercase"
        >
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="container-x py-8 lg:py-12">
      <h1 className="font-display text-2xl font-bold lg:text-3xl">
        Your Cart <span className="text-muted-foreground text-base font-normal">({items.length} items)</span>
      </h1>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="card-soft divide-border divide-y">
          {items.map((item) => (
            <div key={`${item.slug}-${item.weight}`} className="flex gap-4 p-4 sm:p-5">
              <img
                src={item.image}
                alt={item.name}
                width={96}
                height={96}
                loading="lazy"
                className="bg-muted h-20 w-20 rounded-xl object-cover sm:h-24 sm:w-24"
              />
              <div className="flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-semibold sm:text-base">{item.name}</h3>
                    <p className="text-muted-foreground mt-0.5 text-xs">{item.weight}</p>
                  </div>
                </div>
                <div className="mt-auto flex items-center justify-between pt-3">
                  <div className="border-border inline-flex items-center rounded-lg border">
                    <button
                      onClick={() => setQty(item.slug, item.weight, item.qty - 1)}
                      className="hover:bg-accent p-1.5"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="w-9 text-center text-sm font-semibold">{item.qty}</span>
                    <button
                      onClick={() => setQty(item.slug, item.weight, item.qty + 1)}
                      className="hover:bg-accent p-1.5"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <button
                    onClick={() => remove(item.slug, item.weight)}
                    className="text-muted-foreground hover:text-destructive flex items-center gap-1 text-xs"
                  >
                    <X className="h-3.5 w-3.5" /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="space-y-4">
          <div className="card-soft p-5">
            <h3 className="text-sm font-bold tracking-wider uppercase">Apply Coupon Code</h3>
            <div className="mt-3 flex gap-2">
              <input
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Enter coupon code"
                className="bg-background border-border focus:border-primary flex-1 rounded-lg border px-3 py-2 text-sm outline-none"
              />
              <button className="bg-foreground text-background rounded-lg px-4 text-xs font-bold tracking-wider uppercase">
                Apply
              </button>
            </div>
          </div>

          <div className="card-soft p-5">
            <Link
              to="/checkout"
              className="bg-primary text-primary-foreground hover:bg-primary/90 mt-5 block w-full rounded-lg py-3.5 text-center text-sm font-bold tracking-wider uppercase"
            >
              Proceed to Checkout
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
