import Image from "next/image";

export default function ServicesPage() {
  return (
    <div className="bg-stone-50">
      <section className="relative overflow-hidden bg-neutral-900" id="dining">
        <div className="page-shell relative mx-auto flex max-w-7xl flex-col items-start gap-6 py-10 sm:gap-8 sm:py-16 md:flex-row md:items-center md:py-20">
          <div className="md:w-3/5">
            <p className="text-xs font-semibold tracking-[0.24em] text-[#f6c35c]">
              DINING &amp; LOUNGES
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
              Flavours Inspired by the Hills
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-neutral-200 sm:text-base">
              Experience fine dining with panoramic views, featuring local
              delicacies, Indian classics, and global cuisine. From unhurried
              breakfasts to intimate candle-lit dinners, every meal is crafted
              to complement the mood of the mountains.
            </p>
          </div>

          <div className="relative mt-6 h-48 w-full overflow-hidden rounded-2xl border border-white/15 bg-neutral-800 shadow-xl shadow-black/30 sm:h-56 md:mt-0 md:h-64 md:w-2/5 md:rounded-3xl">
            <Image
              src="/126.jpeg"
              alt="Dining with panoramic hill views"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/45 via-transparent to-white/10" />
          </div>
        </div>
      </section>

      <section
        className="border-b border-neutral-200 bg-white"
        id="experiences"
      >
        <div className="page-shell mx-auto max-w-7xl py-10 md:flex md:items-start md:gap-10 md:py-16">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-neutral-900 sm:text-3xl">
              Curated Himalayan Experiences
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700 sm:text-base">
              Discover Darjeeling through immersive experiences designed by our
              concierge team. Whether it is a sunrise at Tiger Hill or a quiet
              nature walk, we help you explore the hills at your own pace.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-neutral-700 sm:grid-cols-2">
              <li>• Tea garden tours and tastings</li>
              <li>• Sunrise excursion to Tiger Hill</li>
              <li>• Heritage toy train rides</li>
              <li>• Guided nature walks and birding</li>
              <li>• Curated cultural evenings</li>
              <li>• Bonfire and stargazing sessions</li>
            </ul>
          </div>

          <div className="mt-8 grid flex-1 gap-4 md:mt-0">
            <div className="rounded-2xl bg-stone-50 p-4 text-sm text-neutral-800">
              <p className="font-semibold">Tailor-made itineraries</p>
              <p className="mt-1 text-xs text-neutral-600">
                Share your interests with our team and we will design a
                personalised day plan including transfers, guides, and hidden
                local favourites.
              </p>
            </div>
            <div className="rounded-2xl bg-stone-50 p-4 text-sm text-neutral-800">
              <p className="font-semibold">Wellness &amp; relaxation</p>
              <p className="mt-1 text-xs text-neutral-600">
                In-room spa tie-ups, yoga sessions on the lawn, and soothing
                high-tea rituals help you unwind at your own rhythm.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-stone-50">
        <div className="page-shell mx-auto max-w-7xl py-10 md:flex md:items-start md:gap-10 md:py-16">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-neutral-900 sm:text-3xl">
              Weddings &amp; Celebrations
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700 sm:text-base">
              Celebrate in the clouds with intimate terraces, manicured lawns,
              and colonial-inspired banquet spaces overlooking the hills.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700 sm:text-base">
              Our event specialists work closely with you to plan destination
              weddings, milestone birthdays, and family gatherings with a
              personalised touch.
            </p>
          </div>

          <div className="mt-8 grid flex-1 gap-4 md:mt-0 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-4 text-sm text-neutral-800 shadow-sm">
              <p className="font-semibold">Destination weddings</p>
              <p className="mt-1 text-xs text-neutral-600">
                Customised décor, curated menus, and hill-view ceremonies that
                feel both grand and intimate.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-4 text-sm text-neutral-800 shadow-sm">
              <p className="font-semibold">Corporate retreats</p>
              <p className="mt-1 text-xs text-neutral-600">
                Meeting spaces with natural light, breakout terraces, and
                after-hours experiences for leadership teams.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

