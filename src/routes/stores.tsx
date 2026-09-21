import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { ADDRESS, PHONES } from "@/lib/data/contact";

export const Route = createFileRoute("/stores")({
  head: () => ({
    meta: [
      { title: "Our Stores — Prakash Food Products" },
      { name: "description", content: "Visit a Prakash Food Products store near you across India." },
      { property: "og:url", content: "/stores" },
    ],
    links: [{ rel: "canonical", href: "/stores" }],
  }),
  component: StoresPage,
});

const stores = [
  { city: "Nashik", addr: ADDRESS, phone: PHONES[0] },
  { city: "Mumbai", addr: "Shop 4, Linking Road, Bandra West - 400050", phone: "022 2645 1212" },
  { city: "Delhi", addr: "B-22, Connaught Place, New Delhi - 110001", phone: "011 4334 5566" },
  { city: "Bengaluru", addr: "78, MG Road, Bengaluru - 560001", phone: "080 2233 4455" },
  { city: "Hyderabad", addr: "Plot 9, Banjara Hills, Hyderabad - 500034", phone: "040 2354 7788" },
  { city: "Ahmedabad", addr: "C/12, CG Road, Ahmedabad - 380009", phone: "079 2658 4422" },
];

function StoresPage() {
  return (
    <div className="container-x py-10 lg:py-16">
      <div className="text-center">
        <p className="text-secondary text-xs font-bold tracking-[0.25em] uppercase">Find a store</p>
        <h1 className="font-display mt-2 text-3xl font-bold lg:text-4xl">Our Stores Across India</h1>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {stores.map((s) => (
          <div key={s.city} className="card-soft p-6">
            <MapPin className="text-primary h-6 w-6" />
            <h3 className="font-display mt-3 text-xl font-bold">{s.city}</h3>
            <p className="text-muted-foreground mt-2 text-sm">{s.addr}</p>
            <p className="text-foreground mt-3 text-sm font-semibold">{s.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
