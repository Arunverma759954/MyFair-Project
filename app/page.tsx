import Image from "next/image";
import Link from "next/link";
import { HeroSlider } from "./components/HeroSlider";

export default function Home() {
  return (
    <>
      <HeroSlider />

      <div className="bg-transparent text-slate-900">
        <section className="page-shell section-shell md:flex md:items-center md:gap-10">
          <div className="md:w-1/2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b32633]">
              WELCOME TO MAYFAIR HILL RESORT
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              An Iconic Retreat in the Queen of Hills
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
              Nestled amidst emerald tea gardens and charming colonial
              bungalows, Mayfair Hill Resort is a luxurious sanctuary overlooking
              the snow-capped Kanchenjunga range. Think morning mist, vintage
              verandas, crackling fireplaces, and personalised Himalayan
              hospitality crafted for discerning travellers.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
              Whether you are planning a quiet mountain escape, a romantic
              honeymoon, or a memorable family vacation, our curated experiences,
              refined interiors, and tranquil setting make every stay feel
              timeless.
            </p>
          </div>

          <div className="mt-8 md:mt-0 md:w-1/2">
            <div className="relative aspect-4/3 overflow-hidden rounded-[1.75rem] border border-white/80 bg-slate-200 shadow-xl shadow-slate-300/70">
              <Image
                src="/122.jpeg"
                alt="Warm, luxurious bedroom at Mayfair Hill Resort"
                fill
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-black/10 via-transparent to-white/10" />
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200/70 bg-white/90">
          <div className="page-shell section-shell">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b32633]">
                  ROOMS &amp; SUITES
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  Stay in Timeless Elegance
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-700 sm:text-base">
                  Choose from thoughtfully designed rooms and suites that frame
                  the rolling hills, manicured gardens, and starlit Darjeeling
                  sky. Every detail blends heritage charm with modern comfort.
                </p>
              </div>
              <Link
                href="/rooms"
                className="inline-flex items-center justify-center rounded-full border border-neutral-800 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-900 hover:bg-neutral-900 hover:text-white"
              >
                View all rooms
              </Link>
            </div>

            <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-3">
              {[
                {
                  name: "Deluxe Room",
                  description:
                    "Cozy, elegant rooms with rich wooden accents and serene garden or partial hill views.",
                  image: "/123.jpeg",
                },
                {
                  name: "Executive Suite",
                  description:
                    "Spacious suites with a dedicated lounge, ideal for families and longer hill stays.",
                  image: "/124.jpeg",
                },
                {
                  name: "Luxury Suite",
                  description:
                    "Expansive suites with heritage-inspired décor and sweeping Himalayan panoramas.",
                  image: "/125.jpeg",
                },
              ].map((room) => (
                <div
                  key={room.name}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-4/3 overflow-hidden">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/5 to-transparent" />
                    <p className="absolute bottom-3 left-4 rounded-full bg-black/55 px-3 py-1 text-[11px] font-medium text-white backdrop-blur">
                      Hill / Garden View
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 px-4 py-4">
                    <h3 className="text-sm font-semibold text-slate-900">
                      {room.name}
                    </h3>
                    <p className="flex-1 text-xs leading-relaxed text-slate-700">
                      {room.description}
                    </p>
                    <Link
                      href="/rooms"
                      className="inline-flex items-center justify-between rounded-full bg-slate-900 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white"
                    >
                      View Details
                      <span className="ml-2 h-5 w-5 rounded-full bg-white/10" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="page-shell section-shell md:flex md:items-center md:gap-10">
          <div className="md:w-1/2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b32633]">
              DINING
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Flavours Inspired by the Hills
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
              Savour seasonal produce, handcrafted bakery delights, and
              chef-curated menus that celebrate Darjeeling&apos;s tea heritage
              and global flavours. Large picture windows frame misty valleys as
              you enjoy intimate breakfasts, slow lunches, and candle-lit
              dinners.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
              From Nepali and Tibetan favourites to classic Indian and
              continental dishes, our culinary team ensures every meal feels
              like a memorable occasion.
            </p>
            <Link
              href="/services#dining"
              className="mt-5 inline-flex items-center rounded-full border border-neutral-800 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-900 hover:bg-neutral-900 hover:text-white"
            >
              Discover dining
            </Link>
          </div>

          <div className="mt-8 md:mt-0 md:w-1/2">
            <div className="relative aspect-4/3 overflow-hidden rounded-[1.75rem] border border-white/80 bg-slate-200 shadow-xl shadow-slate-300/70">
              <Image
                src="/126.jpeg"
                alt="Elegant dining and lounge space"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-black/10 via-transparent to-white/10" />
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200/70 bg-slate-50/80">
          <div className="page-shell section-shell">
            <div className="md:flex md:items-start md:justify-between md:gap-10">
              <div className="md:w-1/2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b32633]">
                  EXPERIENCES
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  Curated Himalayan Experiences
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                  Discover Darjeeling beyond the postcards with handcrafted
                  itineraries – from tea trails and heritage walks to golden
                  sunrises over Kanchenjunga.
                </p>

                <div className="mt-5 grid gap-3 text-sm text-slate-800 sm:grid-cols-2">
                  <ul className="space-y-2">
                    <li>• Tea Garden Tours &amp; Tastings</li>
                    <li>• Sunrise excursion to Tiger Hill</li>
                    <li>• Heritage Toy Train experiences</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• Guided nature walks &amp; birding</li>
                    <li>• Curated cultural evenings</li>
                    <li>• Bonfire &amp; stargazing sessions</li>
                  </ul>
                </div>

                <Link
                  href="/services#experiences"
                  className="mt-6 inline-flex items-center rounded-full border border-neutral-800 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-900 hover:bg-neutral-900 hover:text-white"
                >
                  Explore experiences
                </Link>
              </div>

              <div className="mt-8 grid gap-4 md:mt-0 md:w-1/2">
                <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
                  <div className="h-10 w-10 rounded-full bg-linear-to-br from-[#b32633] to-[#fbbf24]" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Celebrate in the Clouds
                    </p>
                    <p className="text-xs text-slate-700">
                      Colonial ballrooms, intimate terraces, and lawn spaces for
                      weddings, proposals, and milestone events.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
                  <div className="h-10 w-10 rounded-full bg-linear-to-br from-sky-400 to-indigo-500" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Corporate Retreats
                    </p>
                    <p className="text-xs text-slate-700">
                      Thoughtfully equipped meeting spaces with breakout
                      terraces, tailored for leadership offsites and incentive
                      trips.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-shell section-shell">
          <div className="md:flex md:items-start md:gap-10">
            <div className="md:w-1/2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b32633]">
                SPECIAL OFFERS
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
                Thoughtfully Curated Stays
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                Make the most of your Himalayan getaway with handcrafted offers
                designed for romantic escapes, long stays, and festive
                celebrations.
              </p>
            </div>

            <div className="mt-8 grid flex-1 gap-4 md:mt-0 md:grid-cols-2">
              {[
                {
                  title: "Honeymoon Package",
                  description:
                    "Three nights with curated experiences, intimate dinners, and in-room surprises for newlyweds.",
                },
                {
                  title: "Monsoon Escape",
                  description:
                    "Special tariffs, spa credits, and high-tea sessions to enjoy Darjeeling in its misty monsoon mood.",
                },
                {
                  title: "Long Stay Discount",
                  description:
                    "Prefer slow travel? Enjoy exclusive savings and added benefits on extended stays.",
                },
                {
                  title: "Festive Package",
                  description:
                    "Seasonal celebrations with curated menus, live music, and cultural evenings.",
                },
              ].map((offer) => (
                <div
                  key={offer.title}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {offer.title}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-slate-700">
                      {offer.description}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="mt-4 inline-flex w-max items-center rounded-full border border-[#b32633] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#b32633] hover:bg-[#b32633] hover:text-white"
                  >
                    Enquire now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200/70 bg-white/90">
          <div className="page-shell section-shell">
            <div className="md:flex md:items-start md:gap-10">
              <div className="md:w-1/2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#b32633]">
                  GUEST EXPERIENCES
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  Stories from the Hills
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                  From sunrise views to warm evening conversations by the fire,
                  our guests leave with stories they love to return to.
                </p>
              </div>

              <div className="mt-8 grid flex-1 gap-4 md:mt-0 md:grid-cols-3">
                {[
                  {
                    quote:
                      "The views, the warmth of the staff, and the old-world charm made our honeymoon unforgettable.",
                    name: "Aditi &amp; Karan",
                  },
                  {
                    quote:
                      "Perfect retreat for our leadership offsite – quiet meeting spaces and inspiring surroundings.",
                    name: "Rahul Mehra",
                  },
                  {
                    quote:
                      "Waking up to the Kanchenjunga every morning felt magical. The high-tea experience is a must.",
                    name: "Emily Johnson",
                  },
                ].map((review) => (
                  <div
                    key={review.name}
                    className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-800 shadow-sm"
                  >
                    <p className="text-xs leading-relaxed">{review.quote}</p>
                    <p className="mt-3 text-[11px] font-semibold tracking-wide text-[#b32633]">
                      {review.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-transparent">
          <div className="page-shell section-shell text-center">
            <p className="text-xs font-semibold tracking-[0.24em] text-[#b32633]">
              PLAN YOUR GETAWAY
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Your Darjeeling Escape Awaits
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-700 sm:text-base">
              Reserve directly with us for the best available rates, priority
              room preferences, and personalised concierge support for your hill
              vacation.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact#booking"
                className="inline-flex items-center rounded-full bg-[#b32633] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white hover:bg-[#8f1f29]"
              >
                Book direct &amp; save
              </Link>
              <Link
                href="/rooms"
                className="inline-flex items-center rounded-full border border-slate-900 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 hover:bg-slate-900 hover:text-white"
              >
                View rooms &amp; suites
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

