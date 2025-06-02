"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react"
import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel"
import Autoplay from "embla-carousel-autoplay"

interface Course {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  link: string
  status?: string // e.g., "REGISTRATION CLOSED"
}

const coursesData: Course[] = [
  {
    title: "Prečo je vlastný softvér lepší než hotové riešenia?",
    description:
      "Pozrieme sa na rozdiely medzi krabicovým softvérom a vývojom na mieru - a prečo sa firmám často oplatí investovať do vlastného riešenia.",
    imageSrc: "/1.jpg",
    imageAlt: "Dentist working on occlusal splints",
    link: "/services/occlusal-splints", // Example link
  },
  {
    title: "Ako vzniká IT projekt: krok za krokom",
    description:
      "Od prvého stretnutia cez analýzu až po nasadenie - ukážeme vám, čo všetko sa deje v zákulisí pri vývoji softvéru alebo webovej aplikácie.",
    imageSrc: "/2.jpg",
    imageAlt: "Sleep mask and alarm clock representing sleep dental medicine",
    link: "/services/sleep-dentistry",
    status: "REGISTRATION CLOSED",
  },
  {
    title: "5 najčastejších chýb pri zadávaní IT projektu (a ako sa im vyhnúť)",
    description:
      "Zadanie je kľúč k úspechu. V tomto článku zhrnieme typické chyby klientov a tipy, ako pripraviť kvalitné podklady pre vývojárov.",
    imageSrc: "/3.jpg",
    imageAlt: "Close-up of teeth showing signs of wear",
    link: "/services/tooth-wear",
  },
  {
    title: "Bezpečnosť v cloude: mýty vs. realita",
    description:
      "Je cloud naozaj bezpečný? Vysvetlíme, ako funguje ochrana dát v cloude, čoho sa netreba báť - a na čo si dať pozor.",
    imageSrc: "/4.jpg",
    imageAlt: "Advanced endodontics procedure",
    link: "/services/advanced-endodontics",
  },
  {
    title: "Trendy v IT: Čo nás čaká v najbližších rokoch?",
    description:
      "Umelá inteligencia, automatizácia, low-code vývoj... Pozrieme sa na technológie, ktoré budú v najbližšom období hýbať svetom IT.",
    imageSrc: "/5.jpg",
    imageAlt: "Child at a dental check-up",
    link: "/services/pediatric-dental-care",
  },
]

// Duplicate coursesData to provide more slides for a smoother infinite loop
const displayCourses = [...coursesData, ...coursesData, ...coursesData]

const OPTIONS: EmblaOptionsType = {
  loop: true,
  align: "start",
  slidesToScroll: 1,
}

export function CoursesSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay({ delay: 5000, stopOnInteraction: true })])
  const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true)
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = React.useCallback(
    (emblaApi: EmblaCarouselType) => {
      if (!emblaApi) return
      setSelectedIndex(emblaApi.selectedScrollSnap() % coursesData.length) // Adjust for duplicated slides
      setPrevBtnDisabled(!emblaApi.canScrollPrev())
      setNextBtnDisabled(!emblaApi.canScrollNext())
    },
    [emblaApi],
  ) // Added emblaApi to dependency array

  React.useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    // Subscribe to reInit and select events
    const onReInit = () => onSelect(emblaApi) // Re-bind onSelect if emblaApi instance changes
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onReInit)
    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onReInit)
    } // Cleanup
  }, [emblaApi, onSelect])

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="w-full py-20 md:py-32 bg-background dark:bg-slate-900">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-center justify-between mb-12"
        >
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
              Naše posledné články
            </h2>
            <p className="mt-4 text-lg text-muted-foreground dark:text-slate-300 max-w-2xl">
            Prinášame tipy, novinky a zákulisné pohľady z našej každodennej práce v IT. Sledujte, ako tvoríme digitálne riešenia, ktoré menia svet – od webov a aplikácií až po systémy na mieru.
            Inšpirujte sa trendmi, ktoré dnes hýbu svetom technológií.
            </p>
          </div>
          <div className="flex gap-3 self-start md:self-center">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              className="rounded-full border-border/70 dark:border-slate-700 dark:hover:bg-slate-700"
              aria-label="Previous course"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              className="rounded-full border-border/70 dark:border-slate-700 dark:hover:bg-slate-700"
              aria-label="Next course"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </motion.div>

        <div className="overflow-hidden" ref={emblaRef}>
          <motion.div
            className="flex gap-6" // Negative margin to counteract padding for first item alignment
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            {displayCourses.map(
              (
                course,
                index, // Use displayCourses
              ) => (
                <motion.div
                  key={`${course.title}-${index}`} // Ensure unique key for duplicated items
                  className="flex-[0_0_90%] sm:flex-[0_0_45%] lg:flex-[0_0_31.33%] xl:flex-[0_0_32%]" // Adjust basis for different screen sizes
                  variants={itemVariants}
                >
                  <Card className="h-full flex flex-col overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 dark:from-slate-900 dark:to-slate-800/50 backdrop-blur hover:shadow-lg transition-all duration-300">
                    <div className="relative">
                      <Image
                        src={course.imageSrc || "/placeholder.svg"}
                        alt={course.imageAlt}
                        width={400}
                        height={225} // 16:9 aspect ratio
                        className="w-full h-56 object-cover"
                      />
                      {course.status && (
                        <Badge variant="destructive" className="absolute top-3 right-3">
                          {course.status}
                        </Badge>
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-foreground dark:text-white">
                        {course.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
                      <p className="text-sm text-muted-foreground dark:text-slate-300 mb-4 flex-grow">
                        {course.description}
                      </p>
                      <Button asChild variant="link" className="p-0 self-start text-primary dark:text-sky-400">
                        <Link href={course.link}>
                          Zobraziť viac <ArrowRight className="ml-1 size-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ),
            )}
          </motion.div>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {coursesData.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
              className={`size-2.5 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "bg-primary dark:bg-sky-400 scale-125"
                  : "bg-muted-foreground/30 dark:bg-slate-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
