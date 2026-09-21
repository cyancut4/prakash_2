import { zodResolver } from "@hookform/resolvers/zod";
import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formatINR, useCart } from "@/lib/store/cart";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Prakash Food Products" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CheckoutPage,
});

const schema = z.object({
  name: z.string().min(2, "Name required"),
  phone: z.string().min(10, "Valid phone required").max(15),
  email: z.string().email("Valid email required"),
  address: z.string().min(5, "Address required"),
  city: z.string().min(2),
  state: z.string().min(2),
  pincode: z.string().regex(/^\d{6}$/, "6-digit pincode"),
  delivery: z.enum(["regular", "scheduled"]),
  payment: z.enum(["upi", "card", "netbanking", "cod"]),
});
type FormData = z.infer<typeof schema>;

function CheckoutPage() {
  const items = useCart((s) => s.items);
  const subtotal = useCart((s) => s.subtotal());
  const clear = useCart((s) => s.clear);
  const navigate = useNavigate();
  const shipping = items.length ? 50 : 0;
  const total = subtotal + shipping;

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { delivery: "regular", payment: "upi" },
  });

  const onSubmit = (_data: FormData) => {
    clear();
    navigate({ to: "/" });
    alert("Order placed! Thank you for choosing Prakash.");
  };

  if (items.length === 0) {
    return (
      <div className="container-x py-20 text-center">
        <p className="text-muted-foreground">Your cart is empty.</p>
        <Link to="/shop" className="text-primary mt-2 inline-block text-sm font-semibold">
          Continue shopping →
        </Link>
      </div>
    );
  }

  const field = (label: string, name: keyof FormData, props: React.InputHTMLAttributes<HTMLInputElement> = {}) => (
    <label className="block">
      <span className="text-foreground/80 mb-1.5 block text-xs font-semibold">{label}</span>
      <input
        {...register(name)}
        {...props}
        className="bg-background border-border focus:border-primary w-full rounded-lg border px-3 py-2.5 text-sm outline-none"
      />
      {errors[name] && <span className="text-destructive mt-1 block text-xs">{errors[name]?.message as string}</span>}
    </label>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container-x py-8 lg:py-12">
      <h1 className="font-display text-2xl font-bold lg:text-3xl">Checkout</h1>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_380px]">
        <div className="space-y-6">
          <section className="card-soft p-6">
            <h2 className="mb-4 text-sm font-bold tracking-wider uppercase">Delivery Details</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {field("Full Name", "name", { placeholder: "Rohit Sharma" })}
              {field("Phone Number", "phone", { placeholder: "9876543210" })}
              {field("Email", "email", { type: "email", placeholder: "you@example.com" })}
              {field("Pincode", "pincode", { placeholder: "411001" })}
              <div className="sm:col-span-2">{field("Address", "address", { placeholder: "House, street, area" })}</div>
              {field("City", "city")}
              {field("State", "state")}
            </div>
            <div className="mt-5">
              <p className="text-foreground/80 mb-2 text-xs font-semibold">Delivery Type</p>
              <div className="flex gap-4 text-sm">
                <label className="flex items-center gap-2">
                  <input type="radio" value="regular" {...register("delivery")} /> Deliver Now
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" value="scheduled" {...register("delivery")} /> Schedule Order
                </label>
              </div>
            </div>
          </section>

          <section className="card-soft p-6">
            <h2 className="mb-4 text-sm font-bold tracking-wider uppercase">Payment Method</h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { v: "upi", l: "UPI" },
                { v: "card", l: "Card" },
                { v: "netbanking", l: "Net Banking" },
                { v: "cod", l: "COD" },
              ].map((p) => (
                <label
                  key={p.v}
                  className="border-border hover:border-primary has-[:checked]:border-primary has-[:checked]:bg-primary/5 flex cursor-pointer items-center gap-2 rounded-lg border p-3 text-sm font-medium"
                >
                  <input type="radio" value={p.v} {...register("payment")} />
                  {p.l}
                </label>
              ))}
            </div>
          </section>
        </div>

        <aside className="card-soft h-fit p-6">
          <h2 className="mb-4 text-sm font-bold tracking-wider uppercase">Order Summary</h2>
          <ul className="space-y-3">
            {items.map((i) => (
              <li key={`${i.slug}-${i.weight}`} className="flex items-center gap-3">
                <img src={i.image} alt="" className="bg-muted h-12 w-12 rounded-lg object-cover" />
                <div className="flex-1">
                  <p className="text-sm font-semibold">{i.name}</p>
                  <p className="text-muted-foreground text-xs">{i.weight} × {i.qty}</p>
                </div>
                <span className="text-sm font-semibold">{formatINR(i.unitPrice * i.qty)}</span>
              </li>
            ))}
          </ul>
          <dl className="border-border mt-5 space-y-2 border-t pt-5 text-sm">
            <div className="flex justify-between"><dt className="text-muted-foreground">Subtotal</dt><dd>{formatINR(subtotal)}</dd></div>
            <div className="flex justify-between"><dt className="text-muted-foreground">Shipping</dt><dd>{formatINR(shipping)}</dd></div>
            <div className="border-border flex justify-between border-t pt-3 text-base"><dt className="font-bold">Total</dt><dd className="text-primary font-bold">{formatINR(total)}</dd></div>
          </dl>
          <button
            type="submit"
            className="bg-primary text-primary-foreground hover:bg-primary/90 mt-5 w-full rounded-lg py-3.5 text-sm font-bold tracking-wider uppercase"
          >
            Place Order
          </button>
        </aside>
      </div>
    </form>
  );
}
