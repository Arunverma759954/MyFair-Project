"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/rooms", label: "Rooms & Suites" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex justify-center px-3 pt-3">
      <div className="w-full max-w-7xl rounded-full border border-white/12 bg-slate-900/80 px-4 shadow-lg shadow-black/40 backdrop-blur-xl md:px-6">
        <nav className="flex items-center justify-between gap-4 py-2.5">
          <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-tr from-[#facc6b] via-[#f9735b] to-[#b91c1c] shadow-lg shadow-black/40">
            <span className="text-xs font-semibold text-white">MH</span>
          </div>
          <div className="leading-tight">
            <p className="text-xs font-semibold tracking-[0.24em] text-slate-100">
              MAYFAIR
            </p>
            <p className="text-[11px] font-medium text-slate-300/90">
              Hill Resort · Darjeeling
            </p>
          </div>
          </Link>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-sm text-slate-100 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span className="h-[2px] w-4 bg-slate-100" />
          </button>

          <div className="hidden items-center gap-6 text-[11px] font-medium text-slate-100 md:flex">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === item.href
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative pb-1 uppercase tracking-[0.18em] transition-colors ${
                    active
                      ? "text-amber-300"
                      : "text-slate-100/80 hover:text-amber-200"
                  }`}
                >
                  {item.label}
                  {active && (
                      <span className="absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full bg-linear-to-r from-amber-300 via-orange-400 to-rose-500" />
                  )}
                </Link>
              );
            })}

            <Link
              href="/contact#booking"
              className="ml-6 inline-flex items-center rounded-full bg-linear-to-r from-amber-300 via-orange-400 to-rose-500 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-md shadow-black/40 hover:brightness-110"
            >
              Book Now
            </Link>
          </div>
        </nav>
      </div>

      {open && (
        <div className="mt-2 w-full max-w-6xl rounded-3xl border border-white/10 bg-slate-950/95 px-4 pb-3 pt-2 text-sm font-medium text-slate-50 shadow-xl shadow-black/60 md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-1.5 hover:bg-slate-800/80"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact#booking"
              className="mt-2 rounded-md bg-linear-to-r from-amber-300 via-orange-400 to-rose-500 px-2 py-2 text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-950"
              onClick={() => setOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

