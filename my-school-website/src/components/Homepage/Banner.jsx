"use client"
import React, { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"

const images = [
  "/Homepage_banner/1.jpeg"
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

    // ✅ Auto-play every 3 seconds
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
            className="flex-[0_0_100%] w-full"
            key={i}
          >
            <img
              src={src}
              alt={`Slide ${i + 1}`}
              className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] rounded-xl"
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
