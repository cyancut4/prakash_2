import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { ADDRESS, EMAIL, PHONES } from "@/lib/data/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Prakash Food Products" },
      { name: "description", content: "Reach out to Prakash Food Products. Visit our stores, send a message or call customer support." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});
type FormData = z.infer<typeof schema>;

const faqs = [
  { q: "Do you ship pan-India?", a: "Yes, we deliver to all major cities across India, typically within 3-5 working days." },
  { q: "How long do your baked goods stay fresh?", a: "Breads and pastries are best within 2 days; cakes keep 3-4 days refrigerated; cookies stay fresh up to a week in an airtight container." },
  { q: "Do you offer corporate gifting?", a: "Absolutely. We craft custom hampers for weddings, festivals and corporate events." },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <div className="container-x py-10 lg:py-16">
      <div className="text-center">
        <p className="text-secondary text-xs font-bold tracking-[0.25em] uppercase">Get in touch</p>
        <h1 className="font-display mt-2 text-3xl font-bold lg:text-4xl">We'd love to hear from you</h1>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <a
          href={"https://maps.google.com/?q=" + encodeURIComponent(ADDRESS)}
          target="_blank"
          rel="noopener noreferrer"
          className="card-soft hover:border-primary active:scale-[0.98] block p-6 text-center transition-all hover:shadow-md"
        >
          <MapPin className="text-primary mx-auto h-7 w-7" />
          <h3 className="mt-3 text-sm font-bold tracking-wider uppercase">Visit Us</h3>
          <p className="text-muted-foreground mt-2 text-sm">{ADDRESS}</p>
        </a>

        <div className="card-soft p-6 text-center">
          <Phone className="text-primary mx-auto h-7 w-7" />
          <h3 className="mt-3 text-sm font-bold tracking-wider uppercase">Call Us</h3>
          <div className="mt-2 flex flex-col gap-1">
            {PHONES.map((p) => (
              <a
                key={p}
                href={`tel:+91${p.replace(/\s/g, "")}`}
                className="text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                +91 {p}
              </a>
            ))}
          </div>
        </div>

        <a
          href={`mailto:${EMAIL}`}
          className="card-soft hover:border-primary active:scale-[0.98] block p-6 text-center transition-all hover:shadow-md"
        >
          <Mail className="text-primary mx-auto h-7 w-7" />
          <h3 className="mt-3 text-sm font-bold tracking-wider uppercase">Email Us</h3>
          <p className="text-muted-foreground mt-2 break-all text-sm">{EMAIL}</p>
        </a>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <form
          onSubmit={handleSubmit((d) => { console.log(d); setSent(true); reset(); })}
          className="card-soft p-6"
        >
          <h2 className="text-lg font-bold">Send us a message</h2>
          <div className="mt-5 space-y-4">
            <input
              {...register("name")}
              placeholder="Your name"
              className="bg-background border-border focus:border-primary w-full rounded-lg border px-3 py-2.5 text-sm outline-none"
            />
            {errors.name && <p className="text-destructive text-xs">{errors.name.message}</p>}
            <input
              {...register("email")}
              placeholder="Your email"
              className="bg-background border-border focus:border-primary w-full rounded-lg border px-3 py-2.5 text-sm outline-none"
            />
            {errors.email && <p className="text-destructive text-xs">{errors.email.message}</p>}
            <textarea
              {...register("message")}
              rows={5}
              placeholder="Your message"
              className="bg-background border-border focus:border-primary w-full rounded-lg border px-3 py-2.5 text-sm outline-none"
            />
            {errors.message && <p className="text-destructive text-xs">{errors.message.message}</p>}
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-lg py-3 text-sm font-bold tracking-wider uppercase">
              Send Message
            </button>
            {sent && <p className="text-primary text-center text-sm font-semibold">Thank you! We'll be in touch.</p>}
          </div>
        </form>

        <div>
          <h2 className="text-lg font-bold">Frequently asked</h2>
          <div className="mt-5 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="card-soft group p-5">
                <summary className="cursor-pointer text-sm font-semibold">{f.q}</summary>
                <p className="text-muted-foreground mt-3 text-sm">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
