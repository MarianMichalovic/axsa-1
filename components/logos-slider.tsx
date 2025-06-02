"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

type CompanyLogo = {
  id: number
  alt: string
  src: string
}

const COMPANY_LOGOS: CompanyLogo[] = [
  {
    id: 1,
    alt: "Logo spoločnosti 1",
    src: "/Frame39.png"
  },
  {
    id: 2,
    alt: "Logo spoločnosti 2",
    src: "/Frame40.png"
  },
  {
    id: 3,
    alt: "Logo spoločnosti 3",
    src: "/Frame41.png"
  },
  {
    id: 4,
    alt: "Logo spoločnosti 4",
    src: "/Frame42.png"
  },
  {
    id: 5,
    alt: "Logo spoločnosti 5",
    src: "/Frame43.png"
  }
]

export function LogosSlider() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <section className="w-full py-12 border-y bg-muted/30 overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <p className="text-sm font-medium text-muted-foreground pb-12">Používame najmodernejšie technológie</p>
            <div className="relative w-full overflow-hidden">
              <div className="flex">
                {[...COMPANY_LOGOS, ...COMPANY_LOGOS].map((logo, index) => (
                  <div key={index} className="flex-shrink-0 mx-6 sm:mx-12 md:mx-20">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={120}
                      height={60}
                      className="h-8 sm:h-10 md:h-16 w-auto opacity-30 grayscale"
                      priority={index < 5}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full py-12 border-y bg-muted/30 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <p className="text-sm font-medium text-muted-foreground pb-12">Používame najmodernejšie technológie</p>
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-infinite-scroll">
              {[...COMPANY_LOGOS, ...COMPANY_LOGOS].map((logo, index) => (
                <div key={index} className="flex-shrink-0 mx-6 sm:mx-12 md:mx-20">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={60}
                    className="h-8 sm:h-10 md:h-16 w-auto opacity-30 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                    priority={index < 5}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 