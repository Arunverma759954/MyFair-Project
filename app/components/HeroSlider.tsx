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
      <div className="relative w-full h-[75vh] min-h-[520px] md:h-[85vh] lg:h-[90vh]">
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

        <div className="relative z-10 ml-45 flex h-full items-start">
          <div className="flex h-full w-full items-start px-4 pt-24 md:px-10 md:pt-28 lg:px-20 lg:pt-32">
            <div className="mt-4 w-full max-w-xl rounded-3xl bg-white/85 p-5 shadow-2xl shadow-black/40 backdrop-blur-md sm:mt-6 sm:p-6 md:mt-8 md:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#b32633]">
                LUXURY HILL RETREAT · DARJEELING
              </p>
              <h1 className="mt-3 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl md:text-[2.7rem]">
                Where Colonial Charm Meets Himalayan Serenity
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                Timeless interiors, mist-kissed mornings, and curated experiences
                overlooking tea gardens and the Kanchenjunga range – crafted for
                guests who love slow, elegant hill escapes.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/contact#booking"
                  className="inline-flex items-center rounded-full bg-linear-to-r from-[#b32633] via-[#e11d48] to-[#f97316] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-black/30 hover:brightness-110"
                >
                  Book Your Stay
                </Link>
                <Link
                  href="/rooms"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white/70 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 hover:bg-white"
                >
                  Explore Rooms
                </Link>
              </div>

              <div className="mt-5 flex flex-wrap gap-4 text-[11px] text-slate-600">
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

