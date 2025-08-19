"use client"
import React, { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"

const images = [
  "/images/Homepage_banner/1.jpeg",
  "/images/Homepage_banner/2.jpeg",
  "/images/Homepage_banner/3.jpeg",
  "/images/Homepage_banner/4.jpeg",
  "/images/Homepage_banner/5.jpeg",
  "/images/Homepage_banner/11.jpg",
  "/images/Homepage_banner/15.jpg",
  "/images/Homepage_banner/22.jpg",
]

export default function ImageCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on("select", onSelect)
    onSelect()

    const autoplay = setInterval(() => {
      if (!emblaApi) return
      emblaApi.scrollNext()
    }, 3000)

    return () => clearInterval(autoplay)
  }, [emblaApi, onSelect])

  return (
    <div className="relative overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {images.map((src, i) => (
          <div
            key={i}
            className="flex-[0_0_100%]" // full slide width only in carousel, not viewport
          >
            <img
              src={src}
              alt={`Slide ${i + 1}`}
              className="max-w-[90vw] mx-auto px-4 h-[250px] sm:h-[250px] md:h-[450px] lg:h-[550px] rounded-xl object-cover sm:p-4"
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-3 w-3 rounded-full transition ${
              i === selectedIndex ? "bg-blue-600 scale-110" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
