import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-stone-50">
      <section className="relative overflow-hidden bg-neutral-900">
        <div className="page-shell relative mx-auto flex max-w-7xl flex-col items-start gap-6 py-10 sm:gap-8 sm:py-16 md:flex-row md:items-center md:py-20">
          <div className="md:w-3/5">
            <p className="text-xs font-semibold tracking-[0.24em] text-[#f6c35c]">
              ABOUT THE RESORT
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
              A Legacy of Elegance in Darjeeling
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-neutral-200 sm:text-base">
              Mayfair Hill Resort is one of Darjeeling&apos;s most distinguished
              retreats, perched on a quiet ridge above the town. Originally
              conceived during the British era, the estate retains its colonial
              architecture, sweeping verandas, and manicured gardens – now
              thoughtfully restored for the modern traveller.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-200 sm:text-base">
              Today, the resort blends old-world charm with contemporary luxury:
              warm wood-panelled interiors, curated art, cosy lounges, and
              panoramic windows that frame the Himalayas. It is an intimate
              address for leisure guests, honeymooners, families, and anyone
              seeking a refined mountain escape.
            </p>
          </div>

          <div className="relative mt-6 h-48 w-full overflow-hidden rounded-2xl border border-white/15 bg-neutral-800 shadow-xl shadow-black/30 sm:h-56 md:mt-0 md:h-64 md:w-2/5 md:rounded-3xl">
            <Image
              src="/127.jpeg"
              alt="Colonial-inspired interiors at Mayfair Hill Resort"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10" />
          </div>
        </div>
      </section>

      <section className="page-shell mx-auto max-w-7xl py-10 sm:py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-start md:gap-10">
          <div className="space-y-5 text-sm leading-relaxed text-neutral-700 sm:text-base">
            <h2 className="text-xl font-semibold text-neutral-900 sm:text-2xl">
              Heritage Heart, Contemporary Soul
            </h2>
            <p>
              Meandering pathways, terraced lawns, and vintage lamp posts guide
              you through the property. Each corner has been designed to
              celebrate the heritage of Darjeeling – from classic furniture and
              curated artefacts to quiet reading nooks overlooking the hills.
            </p>
            <p>
              The resort&apos;s interiors draw inspiration from colonial clubs
              and hill bungalows, complemented by modern amenities such as
              high-speed connectivity, temperature-controlled rooms, and refined
              in-room comforts.
            </p>
            <p>
              Our philosophy is simple: thoughtful luxury with a homely warmth.
              From personalised turndown services to tailor-made itineraries,
              our team goes beyond routine hospitality to craft meaningful
              memories.
            </p>
          </div>

          <div className="space-y-4 rounded-3xl bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-700">
              Resort at a glance
            </h3>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-xs text-neutral-700 sm:text-sm">
              <div>
                <dt className="font-semibold text-neutral-900">Location</dt>
                <dd>Mall Road, Darjeeling</dd>
              </div>
              <div>
                <dt className="font-semibold text-neutral-900">Altitude</dt>
                <dd>Approx. 2,050 m</dd>
              </div>
              <div>
                <dt className="font-semibold text-neutral-900">
                  Accommodation
                </dt>
                <dd>Deluxe Rooms, Executive &amp; Luxury Suites</dd>
              </div>
              <div>
                <dt className="font-semibold text-neutral-900">Highlights</dt>
                <dd>Heritage architecture, panoramic Himalayan views</dd>
              </div>
              <div>
                <dt className="font-semibold text-neutral-900">
                  Ideal for
                </dt>
                <dd>Leisure, honeymoons, family getaways, retreats</dd>
              </div>
              <div>
                <dt className="font-semibold text-neutral-900">Check-in</dt>
                <dd>24/7 concierge assistance</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white">
        <div className="page-shell mx-auto max-w-7xl py-10 md:flex md:items-center md:gap-10 md:py-16">
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold text-neutral-900 sm:text-2xl">
              Crafted for Memorable Hill Stays
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700 sm:text-base">
              From arrival to departure, our team is committed to creating a
              sense of ease. Airport transfers, curated sightseeing, in-room
              dining, spa recommendations – every detail is handled with care so
              you can simply slow down and soak in the mountains.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-neutral-700 sm:grid-cols-2">
              <li>• Warm, personalised service</li>
              <li>• Bespoke itineraries for every season</li>
              <li>• Quiet corners for work or reading</li>
              <li>• Experiences tailored for couples &amp; families</li>
            </ul>
          </div>

          <div className="mt-6 md:mt-0 md:w-1/2">
            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-stone-50 p-4 text-sm text-neutral-800">
                <p className="font-semibold">Responsible Hospitality</p>
                <p className="mt-1 text-xs text-neutral-600">
                  Mindful use of resources, local sourcing, and community
                  engagement are central to how we operate.
                </p>
              </div>
              <div className="rounded-2xl bg-stone-50 p-4 text-sm text-neutral-800">
                <p className="font-semibold">Local Touches</p>
                <p className="mt-1 text-xs text-neutral-600">
                  From regional flavours to curated crafts, the soul of
                  Darjeeling is woven into your stay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

