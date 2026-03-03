export default function ContactPage() {
  return (
    <div className="bg-stone-50">
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <h1 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">
            Contact Us
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-700 sm:text-base">
            Reach out to our reservations team for enquiries, special requests,
            and customised Himalayan experiences. We are here to help you plan
            your stay in Darjeeling.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:flex md:items-start md:gap-10 md:px-6 md:py-14">
        <div className="space-y-5 text-sm text-neutral-700 md:w-2/5">
          <div>
            <h2 className="text-sm font-semibold text-neutral-900">
              Address
            </h2>
            <p className="mt-1 text-xs text-neutral-600">
              Mayfair Hill Resort, Mall Road, Near Observatory Hill, Darjeeling,
              West Bengal 734101
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-neutral-900">Phone</h2>
            <p className="mt-1 text-xs text-neutral-600">
              Reservations: +91 98765 43210
              <br />
              Front Desk: +91 98765 43211
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-neutral-900">Email</h2>
            <p className="mt-1 text-xs text-neutral-600">
              reservations@mayfairhilldarjeeling.com
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-neutral-900">
              Social
            </h2>
            <p className="mt-1 text-xs text-neutral-600">
              Follow us on Instagram, Facebook, and TripAdvisor to discover
              seasonal offers and stories from the hills.
            </p>
          </div>
        </div>

        <div className="mt-8 md:mt-0 md:w-3/5" id="booking">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-700">
              ENQUIRY &amp; BOOKING FORM
            </h2>
            <p className="mt-2 text-xs text-neutral-600">
              Share a few details and our team will get in touch with the best
              available rates and curated recommendations for your stay.
            </p>

            <form className="mt-5 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-neutral-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none ring-0 focus:border-neutral-900"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none focus:border-neutral-900"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-neutral-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none focus:border-neutral-900"
                    placeholder="+91"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-700">
                    Check-in / Check-out
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none focus:border-neutral-900"
                    placeholder="e.g. 12–15 Oct 2026"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <label className="block text-xs font-medium text-neutral-700">
                    Adults
                  </label>
                  <input
                    type="number"
                    min={1}
                    className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none focus:border-neutral-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-700">
                    Children
                  </label>
                  <input
                    type="number"
                    min={0}
                    className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none focus:border-neutral-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-700">
                    Room Type
                  </label>
                  <select className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none focus:border-neutral-900">
                    <option>Deluxe Room</option>
                    <option>Executive Suite</option>
                    <option>Luxury Suite</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700">
                  Message / Special Requests
                </label>
                <textarea
                  rows={4}
                  className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none focus:border-neutral-900"
                  placeholder="Share any occasion details, preferences, or questions."
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center rounded-full bg-neutral-900 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white hover:bg-neutral-800"
              >
                Submit enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

