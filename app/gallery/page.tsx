import Image from "next/image";

const gallerySections = [
  {
    title: "Rooms & Suites",
    images: ["/123.jpeg", "/124.jpeg", "/125.jpeg", "/127.jpeg", "/1.jpeg", "/2.jpeg", "/3.jpeg"],
  },
  {
    title: "Dining & Lounges",
    images: ["/126.jpeg", "/122.jpeg", "/4.jpeg", "/5.jpeg"],
  },
  {
    title: "Views & Resort Highlights",
    images: ["/129.jpeg", "/128.jpeg", "/7.jpeg", "/8.jpeg", "/9.jpeg", "/10.jpeg", "/11.jpeg", "/12.jpeg", "/13.jpeg", "/14.jpeg"],
  },
];

export default function GalleryPage() {
  return (
    <div className="bg-stone-50">
      <section className="border-b border-neutral-200 bg-white">
        <div className="page-shell mx-auto max-w-7xl py-10 md:py-16">
          <h1 className="text-2xl font-semibold text-neutral-900 sm:text-3xl md:text-4xl">
            Gallery
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-700 sm:text-base">
            A glimpse into the rooms, dining spaces, and Himalayan vistas that
            define the Mayfair Hill Resort experience in Darjeeling.
          </p>
        </div>
      </section>

      <section className="page-shell mx-auto max-w-7xl py-6 md:py-12">
        <div className="space-y-10">
          {gallerySections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h2 className="text-lg font-semibold text-neutral-900">
                {section.title}
              </h2>
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3">
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

