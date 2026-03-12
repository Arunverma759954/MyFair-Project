import Image from "next/image";

import { RoomImageSlider } from "../components/RoomImageSlider";

const rooms = [
  {
    name: "Deluxe Room",
    size: "30–32 sq. m.",
    occupancy: "Up to 2 adults",
    view: "Garden / partial hill view",
    images: ["/129.jpeg", "/123.jpeg", "/1.jpeg", "/2.jpeg"],
    amenities: [
      "King / twin beds",
      "Complimentary Wi-Fi",
      "Tea & coffee station",
      "Central heating",
    ],
    description:
      "Elegant interiors with wooden accents and plush bedding, offering serene garden or mountain views. Designed for comfort and relaxation, the Deluxe Room provides a cozy yet luxurious retreat.",
  },
  {
    name: "Executive Suite",
    size: "42–45 sq. m.",
    occupancy: "2 adults + 1 child",
    view: "Panoramic hill & town view",
    images: ["/128.jpeg", "/124.jpeg", "/3.jpeg", "/4.jpeg"],
    amenities: [
      "Separate living area",
      "Work desk & lounge seating",
      "Smart TV",
      "Complimentary breakfast",
    ],
    description:
      "Spacious suites featuring a separate living area, premium furnishings, and elevated Himalayan views. Perfect for families, workations, or extended stays.",
  },
  {
    name: "Luxury Suite",
    size: "55–60 sq. m.",
    occupancy: "Up to 3 adults",
    view: "Sweeping Kanchenjunga & valley view",
    images: ["/125.jpeg", "/127.jpeg", "/12.jpeg", "/13.jpeg"],
    amenities: [
      "Expansive living & bedroom",
      "Walk-in wardrobe",
      "Bathtub (select suites)",
      "Evening turndown amenities",
    ],
    description:
      "The epitome of mountain luxury. Featuring generous space, heritage décor, and panoramic views, the Luxury Suite is crafted for indulgent, memorable hill escapes.",
  },
];

export default function RoomsPage() {
  return (
    <div className="bg-stone-50">
      <section className="relative overflow-hidden bg-neutral-900">
        <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 py-16 md:flex-row md:items-center md:px-6 md:py-20">
          <div className="md:w-3/5">
            <p className="text-xs font-semibold tracking-[0.24em] text-[#f6c35c]">
              ROOMS &amp; SUITES
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Stay Elevated Above the Clouds
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-neutral-200 sm:text-base">
              Each room is thoughtfully designed to blend colonial character with
              modern comfort. Soft fabrics, warm wood, and large windows create
              a calm refuge after your day in the hills.
            </p>
          </div>

          <div className="relative mt-8 h-56 w-full overflow-hidden rounded-3xl border border-white/15 bg-neutral-800 shadow-xl shadow-black/30 md:mt-0 md:h-64 md:w-2/5">
            <Image
              src="/122.jpeg"
              alt="Warm interiors overlooking the hills"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/45 via-transparent to-white/10" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="space-y-10">
          {rooms.map((room, index) => (
            <article
              key={room.name}
              className={`overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm md:flex ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
            >
              <RoomImageSlider images={room.images} alt={room.name} />

              <div className="flex flex-1 flex-col gap-4 p-5 md:w-1/2 md:p-6">
                <header>
                  <h2 className="text-lg font-semibold text-neutral-900">
                    {room.name}
                  </h2>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-neutral-500">
                    Hill Resort · Darjeeling
                  </p>
                </header>

                <div className="grid gap-3 text-xs text-neutral-700 sm:grid-cols-3">
                  <div>
                    <p className="font-semibold text-neutral-900">Room size</p>
                    <p>{room.size}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">Occupancy</p>
                    <p>{room.occupancy}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">View</p>
                    <p>{room.view}</p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-neutral-700">
                  {room.description}
                </p>

                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-700">
                    Key amenities
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center rounded-full border border-neutral-200 bg-stone-50 px-3 py-1 text-[11px] font-medium text-neutral-800"
                      >
                        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-br from-[#9c1b24] to-[#f1a51c]" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-1 flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs text-neutral-500">
                    Inclusive of daily breakfast and Wi-Fi. Taxes as applicable.
                  </p>
                  <a
                    href="/contact#booking"
                    className="inline-flex items-center rounded-full bg-neutral-900 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white hover:bg-neutral-800"
                  >
                    Book now
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}

