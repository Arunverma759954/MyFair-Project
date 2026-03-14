"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  { src: "/129.jpeg", alt: "Luxury hill resort view from Mayfair Hill Resort" },
  { src: "/128.jpeg", alt: "Elegant interior and colonial charm at Darjeeling" },
];

export function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative isolate overflow-hidden -mt-20">
      <div className="relative w-full h-[70vh] min-h-[400px] sm:min-h-[480px] md:h-[85vh] md:min-h-[520px] lg:h-[90vh]">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-700 ${index === active ? "opacity-100" : "opacity-0"
              }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              quality={100}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/65 via-black/35 to-black/15" />
          </div>
        ))}

        <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-[28px] md:items-start md:px-[36px]">
          <div className="w-full pt-20 pb-10 sm:pt-24 sm:pb-12 md:pt-32 lg:pt-40">
            <div className="min-w-0 w-full max-w-xl rounded-2xl bg-white/90 p-5 shadow-2xl shadow-black/40 backdrop-blur-md sm:max-w-xl sm:rounded-3xl sm:p-6 md:mt-10 md:max-w-xl md:p-8 lg:max-w-2xl lg:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#b32633]">
                LUXURY HILL RETREAT · DARJEELING
              </p>
              <h1 className="mt-2 text-2xl font-semibold leading-tight text-slate-900 sm:mt-3 sm:text-3xl md:text-4xl lg:text-5xl">
                Where Colonial Charm Meets Himalayan Serenity
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base lg:text-lg lg:max-w-3xl">
                Timeless interiors, mist-kissed mornings, and curated experiences
                overlooking tea gardens and the Kanchenjunga range – crafted for
                guests who love slow, elegant hill escapes.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
                <Link
                  href="/contact#booking"
                  className="inline-flex items-center rounded-full bg-linear-to-r from-[#b32633] via-[#e11d48] to-[#f97316] px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-black/30 hover:brightness-110"
                >
                  Book Your Stay
                </Link>
                <Link
                  href="/rooms"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white/70 px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 hover:bg-white"
                >
                  Explore Rooms
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap gap-4 text-[11px] text-slate-600 sm:mt-8 sm:gap-6 lg:text-xs">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#b32633]" />
                  <p>Panoramic Himalayan views</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <p>Tea, culture &amp; wellness experiences</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setActive(index)}
              className={`pointer-events-auto h-2 rounded-full transition-all ${index === active
                ? "w-7 bg-white"
                : "w-3 bg-white/60 hover:bg-white"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

