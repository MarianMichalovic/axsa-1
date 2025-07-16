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
      <section 
        className="w-full py-12 border-y text-primary-foreground overflow-hidden relative"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.8) 100%)',
          color: 'hsl(var(--primary-foreground))'
        }}
      >
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        {/* Decorative glows */}
        <div className="absolute -top-12 -left-12 w-32 h-32 bg-white/5 rounded-full blur-2xl z-0"></div>
        <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-white/5 rounded-full blur-2xl z-0"></div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <p className="text-sm font-medium text-primary-foreground/80 pb-12">Používame najmodernejšie technológie</p>
            <div className="relative w-full overflow-hidden">
              <div className="flex">
                {[...COMPANY_LOGOS, ...COMPANY_LOGOS].map((logo, index) => (
                  <div key={index} className="flex-shrink-0 mx-6 sm:mx-12 md:mx-20">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={120}
                      height={60}
                      className="h-8 sm:h-10 md:h-16 w-auto opacity-70 brightness-0 invert"
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
    <section 
      className="w-full py-12 border-y text-primary-foreground overflow-hidden relative"
      style={{
        background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.8) 100%)',
        color: 'hsl(var(--primary-foreground))'
      }}
    >
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      {/* Decorative glows */}
      <div className="absolute -top-12 -left-12 w-32 h-32 bg-white/5 rounded-full blur-2xl z-0"></div>
      <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-white/5 rounded-full blur-2xl z-0"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <p className="text-sm font-medium text-primary-foreground/80 pb-12">Používame najmodernejšie technológie</p>
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-infinite-scroll">
              {[...COMPANY_LOGOS, ...COMPANY_LOGOS].map((logo, index) => (
                <div key={index} className="flex-shrink-0 mx-6 sm:mx-12 md:mx-20">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={60}
                    className="h-8 sm:h-10 md:h-16 w-auto opacity-50 brightness-0 invert transition-all hover:opacity-100"
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