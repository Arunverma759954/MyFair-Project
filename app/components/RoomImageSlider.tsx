"use client";

import { useState } from "react";
import Image from "next/image";

interface RoomImageSliderProps {
    images: string[];
    alt: string;
}

export function RoomImageSlider({ images, alt }: RoomImageSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="group relative h-52 w-full overflow-hidden min-[480px]:h-60 md:h-auto md:min-h-[280px] md:w-1/2">
            {images.map((image, index) => (
                <div
                    key={image}
                    className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <Image
                        src={image}
                        alt={`${alt} image ${index + 1}`}
                        fill
                        className="object-cover"
                    />
                </div>
            ))}

            {/* Navigation Arrows */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition-all hover:bg-black/50 sm:left-4 sm:opacity-0 sm:group-hover:opacity-100"
                        aria-label="Previous image"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 19.5L8.25 12l7.5-7.5"
                            />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition-all hover:bg-black/50 sm:right-4 sm:opacity-0 sm:group-hover:opacity-100"
                        aria-label="Next image"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </button>
                </>
            )}

            {/* Pagination dots */}
            {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-1.5 rounded-full transition-all ${index === currentIndex ? "w-4 bg-white" : "w-1.5 bg-white/50"
                                }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
