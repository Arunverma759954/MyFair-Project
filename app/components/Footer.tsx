import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-white/10 bg-black/40 text-slate-100">
      <div className="page-shell flex flex-col gap-8 py-10 md:flex-row md:justify-between">
        <div className="max-w-sm space-y-3">
          <p className="text-xs font-semibold tracking-[0.22em] text-amber-300">
            MAYFAIR HILL RESORT
          </p>
          <p className="text-sm text-slate-200/90">
            A luxury heritage retreat in the heart of Darjeeling, blending
            colonial charm with warm Himalayan hospitality.
          </p>
          <p className="text-xs text-slate-400">
            Mall Road, Near Observatory Hill, Darjeeling, West Bengal 734101
          </p>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-8 text-sm md:grid-cols-3">
          <div className="space-y-2">
            <p className="font-semibold text-slate-100">Explore</p>
            <div className="flex flex-col gap-1 text-slate-300">
              <Link href="/rooms" className="hover:text-amber-300">
                Rooms &amp; Suites
              </Link>
              <Link href="/services" className="hover:text-amber-300">
                Services
              </Link>
              <Link href="/gallery" className="hover:text-amber-300">
                Gallery
              </Link>
            </div>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-slate-100">Contact</p>
            <div className="flex flex-col gap-1 text-slate-300">
              <p>+91 98765 43210</p>
              <p>reservations@mayfairhilldarjeeling.com</p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-slate-100">Connect</p>
            <div className="flex flex-col gap-1 text-slate-300">
              <Link href="#" className="hover:text-amber-300">
                Instagram
              </Link>
              <Link href="#" className="hover:text-amber-300">
                Facebook
              </Link>
              <Link href="#" className="hover:text-amber-300">
                TripAdvisor
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/60">
        <div className="page-shell flex flex-col items-center justify-between gap-2 py-3 text-xs text-slate-400 md:flex-row">
          <p>
            © {new Date().getFullYear()} Mayfair Hill Resort, Darjeeling. All
            rights reserved.
          </p>
          <p className="flex gap-3">
            <Link href="/privacy" className="hover:text-amber-300">
              Privacy Policy
            </Link>
            <span className="hidden h-3 w-px bg-slate-500 md:inline-block" />
            <Link href="/terms" className="hover:text-amber-300">
              Terms &amp; Conditions
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

