import logo from "@/assets/prakash-logo.png";

export function Logo({
  className = "",
  showTagline = true,
  taglineClassName = "",
}: {
  className?: string;
  showTagline?: boolean;
  taglineClassName?: string;
}) {
  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      <img
        src={logo}
        alt="Prakash Food Products"
        className="h-16 w-auto object-contain sm:h-20 lg:h-24"
      />
      {showTagline && (
        <span
          className={`tagline-script whitespace-nowrap text-xl leading-none sm:text-2xl lg:text-3xl ${taglineClassName}`}
          aria-label="Enjoy Dil Se"
        >
          <span className="text-black">Enjoy</span>{" "}
          <span className="text-primary">Dil Se</span>
        </span>
      )}
    </div>
  );
}
