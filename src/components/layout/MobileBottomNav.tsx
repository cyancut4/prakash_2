import { Link } from "@tanstack/react-router";
import { Grid3x3, Home, Search, User } from "lucide-react";
import { useState } from "react";
import { MobileSearchOverlay } from "@/components/MobileSearchOverlay";

export function MobileBottomNav() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <nav className="bg-background/95 border-border fixed inset-x-0 bottom-0 z-30 border-t backdrop-blur lg:hidden">
        <ul className="flex items-center justify-around">
          <li className="flex-1">
            <Link
              to="/"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: true }}
              className="text-muted-foreground hover:text-primary relative flex flex-col items-center gap-0.5 py-2.5 text-[10px] font-medium"
            >
              <Home className="h-5 w-5" />
              Home
            </Link>
          </li>
          <li className="flex-1">
            <Link
              to="/shop"
              activeProps={{ className: "text-primary" }}
              className="text-muted-foreground hover:text-primary relative flex flex-col items-center gap-0.5 py-2.5 text-[10px] font-medium"
            >
              <Grid3x3 className="h-5 w-5" />
              Shop
            </Link>
          </li>
          <li className="flex-1">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="text-muted-foreground hover:text-primary relative flex w-full flex-col items-center gap-0.5 py-2.5 text-[10px] font-medium"
            >
              <Search className="h-5 w-5" />
              Search
            </button>
          </li>
          <li className="flex-1">
            <Link
              to="/blog"
              activeProps={{ className: "text-primary" }}
              className="text-muted-foreground hover:text-primary relative flex flex-col items-center gap-0.5 py-2.5 text-[10px] font-medium"
            >
              <User className="h-5 w-5" />
              Profile
            </Link>
          </li>
        </ul>
      </nav>
      <MobileSearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
