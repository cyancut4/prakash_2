import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  slug: string;
  name: string;
  image: string;
  weight: string;
  unitPrice: number;
  qty: number;
}

interface CartState {
  items: CartItem[];
  add: (item: Omit<CartItem, "qty">, qty?: number) => void;
  remove: (slug: string, weight: string) => void;
  setQty: (slug: string, weight: string, qty: number) => void;
  clear: () => void;
  subtotal: () => number;
  count: () => number;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      add: (item, qty = 1) =>
        set((s) => {
          const i = s.items.findIndex(
            (x) => x.slug === item.slug && x.weight === item.weight,
          );
          if (i >= 0) {
            const items = [...s.items];
            items[i] = { ...items[i], qty: items[i].qty + qty };
            return { items };
          }
          return { items: [...s.items, { ...item, qty }] };
        }),
      remove: (slug, weight) =>
        set((s) => ({
          items: s.items.filter((x) => !(x.slug === slug && x.weight === weight)),
        })),
      setQty: (slug, weight, qty) =>
        set((s) => ({
          items: s.items
            .map((x) =>
              x.slug === slug && x.weight === weight ? { ...x, qty } : x,
            )
            .filter((x) => x.qty > 0),
        })),
      clear: () => set({ items: [] }),
      subtotal: () =>
        get().items.reduce((a, x) => a + x.unitPrice * x.qty, 0),
      count: () => get().items.reduce((a, x) => a + x.qty, 0),
    }),
    { name: "prakash-cart" },
  ),
);

export const formatINR = (n: number) =>
  "₹" + new Intl.NumberFormat("en-IN").format(Math.round(n));
