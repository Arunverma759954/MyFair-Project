import Image from "next/image";

const gallerySections = [
  {
    title: "Rooms",
    images: ["/1.jpeg", "/2.jpeg", "/13.jpeg"],
  },
  {
    title: "Dining & Lounges",
    images: ["/8.jpeg", "/4.jpeg"],
  },
  {
    title: "Experiences & Views",
    images: ["/3.jpeg"],
  },
];

export default function GalleryPage() {
  return (
    <div className="bg-stone-50">
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <h1 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">
            Gallery
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-700 sm:text-base">
            A glimpse into the rooms, dining spaces, and Himalayan vistas that
            define the Mayfair Hill Resort experience in Darjeeling.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12">
        <div className="space-y-10">
          {gallerySections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h2 className="text-lg font-semibold text-neutral-900">
                {section.title}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {section.images.map((src) => (
                  <div
                    key={src}
                    className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200"
                  >
                    <Image
                      src={src}
                      alt={section.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

