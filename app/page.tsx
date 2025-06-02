"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Check,
  ArrowRight,
  Star,
  ShieldCheck,
  Cloud,
  Briefcase,
  Code,
  Network,
  Headphones,
  ArrowLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CoursesSlider } from "@/components/courses-slider"

const COMPANY_NAME = "Innovatech IT"

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

export default function LandingPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const features = [
    {
      title: "Spravované IT služby",
      description: "Proaktívna IT podpora a správa pre plynulý chod vašich systémov.",
      icon: <Headphones className="size-5" />,
    },
    {
      title: "Kybernetická bezpečnosť",
      description: "Ochrana vašich cenných údajov a infraštruktúry pred vyvíjajúcimi sa kybernetickými hrozbami.",
      icon: <ShieldCheck className="size-5" />,
    },
    {
      title: "Cloud computing",
      description: "Využite silu cloudu pre škálovateľnosť, flexibilitu a nákladovú efektívnosť.",
      icon: <Cloud className="size-5" />,
    },
    {
      title: "Vývoj softvéru",
      description: "Vlastné softvérové riešenia prispôsobené vašim jedinečným podnikovým požiadavkám.",
      icon: <Code className="size-5" />,
    },
    {
      title: "Sieťová infraštruktúra",
      description: "Návrh, implementácia a správa robustných a bezpečných sieťových riešení.",
      icon: <Network className="size-5" />,
    },
    {
      title: "IT konzultácie",
      description:
        "Odborné poradenstvo, ktoré vám pomôže pri strategických IT rozhodnutiach a optimalizácii technológií.",
      icon: <Briefcase className="size-5" />,
    },
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex min-h-[calc(100vh-4rem)] md:min-h-screen items-center justify-center overflow-hidden pt-16 bg-background text-foreground">
          {/* Animated Elements */}
          <div className="absolute inset-0 overflow-hidden z-0">
            {/* Curved Lines */}
            <svg className="absolute h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad1" x1="1" y1="0" x2="0" y2="0">
                  <stop offset="0%" stopColor="var(--hero-beam-start)" stopOpacity="0" />
                  <stop offset="50%" stopColor="var(--hero-beam-start)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="var(--hero-beam-start)" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="grad2" x1="1" y1="0" x2="0" y2="0">
                  <stop offset="0%" stopColor="var(--hero-beam-end)" stopOpacity="0" />
                  <stop offset="50%" stopColor="var(--hero-beam-end)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="var(--hero-beam-end)" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Top Curves */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  repeatDelay: 1.5,
                }}
                d="M -200 100 Q 300 0 800 100 T 1800 100"
                fill="none"
                stroke="url(#grad1)"
                strokeWidth="1.5"
              />
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  repeatDelay: 1.5,
                  delay: 0.75,
                }}
                d="M -200 200 Q 400 100 900 200 T 1900 200"
                fill="none"
                stroke="url(#grad2)"
                strokeWidth="1.5"
              />
              {/* Bottom Curves */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  repeatDelay: 1.5,
                  delay: 1.5,
                }}
                d="M -200 700 Q 300 600 800 700 T 1800 700"
                fill="none"
                stroke="url(#grad1)"
                strokeWidth="1.5"
                className="hidden md:block"
              />
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  repeatDelay: 1.5,
                  delay: 2.25,
                }}
                d="M -200 800 Q 400 700 900 800 T 1900 800"
                fill="none"
                stroke="url(#grad2)"
                strokeWidth="1.5"
                className="hidden md:block"
              />
            </svg>

            {/* Straight Lines */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{
                    x: "-100%",
                    opacity: [0, 0.5, 0.5, 0],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    delay: i * 0.3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    ease: "linear",
                  }}
                  className="absolute right-0"
                  style={{
                    top: `${10 + i * 18}%`,
                    height: "1px",
                    width: "100%",
                    background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? "var(--hero-beam-start)" : "var(--hero-beam-end)"}60, transparent)`,
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Animated Background Glows */}
          <div className="absolute inset-0 z-[1]">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.4, scale: 1 }}
              transition={{ duration: 2, delay: 0.2 }}
              className="absolute -left-1/4 top-1/4 h-[400px] w-[400px] md:h-[600px] md:w-[600px] rounded-full bg-primary/30 dark:bg-primary/20 blur-3xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.4, scale: 1 }}
              transition={{ duration: 2, delay: 0.7 }}
              className="absolute -right-1/4 top-1/2 h-[400px] w-[400px] md:h-[600px] md:w-[600px] rounded-full bg-secondary/30 dark:bg-secondary/20 blur-3xl"
            />
          </div>

          {/* Content */}
          <div className="container relative z-[3] px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mx-auto max-w-3xl space-y-8"
            >
              <Badge className="mb-2 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Váš dôveryhodný IT partner
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-8xl">
                Poháňame Vašu <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-400">digitálnu</span> transformáciu
              </h1>
              <p className="mx-auto max-w-2xl text-muted-foreground sm:text-xl">
                {COMPANY_NAME} poskytuje špičkové IT riešenia a odbornú podporu, ktoré pomáhajú vášmu podnikaniu
                prosperovať v digitálnej ére.
              </p>
              <div className="flex flex-col pt-12 sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  size="lg"
                  asChild
                  className="rounded-full h-12 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Link href="/services">
                    Preskúmať naše služby
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="rounded-full h-12 px-8 text-base border-border hover:bg-muted"
                >
                  <Link href="/contact">Požiadať o konzultáciu</Link>
                </Button>
              </div>
              <div className="flex items-center justify-center gap-4 mt-6 text-[10px] sm:text-sm text-muted-foreground">
                <div className="flex flex-col sm:flex-row items-center gap-2">
                  <Check className="size-4 text-primary" />
                  <span>Odborné riešenia</span>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-2">
                  <Check className="size-4 text-primary" />
                  <span>Spoľahlivá podpora</span>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-2">
                  <Check className="size-4 text-primary" />
                  <span>Technológie budúcnosti</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Logos Section */}
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
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Naše kľúčové služby
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Komplexné IT riešenia</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Ponúkame širokú škálu IT služieb navrhnutých tak, aby vyhovovali potrebám vášho podnikania, zvýšili
                bezpečnosť a podporili rast.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {features.map((feature, i) => (
                <motion.div key={i} variants={item}>
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                      <Button variant="link" asChild className="mt-4 p-0 self-start">
                        <Link href="/services">
                          Dozvedieť sa viac <ArrowRight className="ml-1 size-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Courses Slider Section */}
        <CoursesSlider />

        {/* How It Works Section */}
        <section className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="animated-hero-grid absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>
          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Náš proces
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Efektívny prístup, hmatateľné výsledky</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Postupujeme podľa osvedčenej metodiky, aby sme poskytli efektívne IT riešenia prispôsobené vášmu
                podnikaniu.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0"></div>
              {[
                {
                  step: "01",
                  title: "Konzultácia a analýza",
                  description: "Začíname pochopením vášho podnikania, výziev a cieľov.",
                },
                {
                  step: "02",
                  title: "Návrh a plánovanie",
                  description: "Naši odborníci vytvoria prispôsobenú IT stratégiu a plán pre váš úspech.",
                },
                {
                  step: "03",
                  title: "Implementácia a podpora",
                  description: "Nasadíme riešenie a poskytujeme priebežnú podporu pre optimálny výkon.",
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative z-10 flex flex-col items-center text-center space-y-4"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-xl font-bold shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Úspech klientov
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Čo hovoria naši klienti</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Zistite, ako sme pomohli firmám, ako je tá vaša, dosiahnuť ich technologické ciele.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote: `${COMPANY_NAME} zrevolučnila našu IT infraštruktúru. Ich proaktívna podpora je výnimočná, minimalizuje prestoje a zvyšuje produktivitu.`,
                  author: "Jana Nováková",
                  role: "CEO, Alpha Solutions",
                  rating: 5,
                },
                {
                  quote:
                    "Riešenia kybernetickej bezpečnosti implementované spoločnosťou Innovatech nám priniesli pokoj. Ich odbornosť je zrejmá pri každej interakcii.",
                  author: "Ján Kováč",
                  role: "IT riaditeľ, Beta Corp",
                  rating: 5,
                },
                {
                  quote:
                    "Migrácia do cloudu bola s vedením Innovatechu bezproblémová. Naše operácie sú teraz agilnejšie a nákladovo efektívnejšie.",
                  author: "Alica Horváthová",
                  role: "Manažérka prevádzky, Gamma Inc.",
                  rating: 5,
                },
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex mb-4">
                        {Array(testimonial.rating)
                          .fill(0)
                          .map((_, j) => (
                            <Star key={j} className="size-4 text-yellow-500 fill-yellow-500" />
                          ))}
                      </div>
                      <p className="text-lg mb-6 flex-grow">{testimonial.quote}</p>
                      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/40">
                        <div className="size-10 rounded-full bg-muted flex items-center justify-center text-foreground font-medium">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/case-studies">
                  Zobraziť viac prípadových štúdií <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="animated-hero-grid absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>
          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Servisné plány
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Flexibilné plány pre každú potrebu</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Vyberte si servisný plán, ktorý zodpovedá veľkosti vášho podnikania a IT požiadavkám. K dispozícii sú aj
                vlastné riešenia.
              </p>
            </motion.div>

            <div className="mx-auto max-w-5xl">
              <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                {[
                  {
                    name: "Základná podpora",
                    price: "Individuálne",
                    pricePeriod: "Kontaktujte nás",
                    description: "Ideálne pre malé podniky, ktoré potrebujú spoľahlivú IT podporu.",
                    features: [
                      "Vzdialená a miestna podpora",
                      "Monitorovanie systémov",
                      "Základy bezpečnosti",
                      "Prístup k helpdesku",
                    ],
                    cta: "Vyžiadať cenovú ponuku",
                  },
                  {
                    name: "Proaktívna správa IT",
                    price: "Individuálne",
                    pricePeriod: "Kontaktujte nás",
                    description: "Komplexná správa IT pre rastúce podniky.",
                    features: [
                      "Všetky základné funkcie",
                      "Proaktívna údržba",
                      "Pokročilá kybernetická bezpečnosť",
                      "Správa cloudu",
                      "Strategické IT poradenstvo",
                    ],
                    cta: "Vyžiadať cenovú ponuku",
                    popular: true,
                  },
                  {
                    name: "Podnikové riešenia",
                    price: "Individuálne",
                    pricePeriod: "Kontaktujte nás",
                    description: "Prispôsobené IT služby pre veľké organizácie.",
                    features: [
                      "Všetky proaktívne funkcie",
                      "Vyhradený account manažér",
                      "Vývoj vlastného softvéru",
                      "Prioritná podpora 24/7",
                      "Súlad a správa",
                    ],
                    cta: "Kontaktovať obchod",
                  },
                ].map((plan, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Card
                      className={`relative overflow-hidden h-full ${plan.popular ? "border-primary shadow-lg" : "border-border/40 shadow-md"} bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                          Najpopulárnejšie
                        </div>
                      )}
                      <CardContent className="p-6 flex flex-col h-full">
                        <h3 className="text-2xl font-bold">{plan.name}</h3>
                        <div className="flex items-baseline mt-4">
                          <span className="text-4xl font-bold">{plan.price}</span>
                          {plan.pricePeriod && <span className="text-muted-foreground ml-1">{plan.pricePeriod}</span>}
                        </div>
                        <p className="text-muted-foreground mt-2">{plan.description}</p>
                        <ul className="space-y-3 my-6 flex-grow">
                          {plan.features.map((feature, j) => (
                            <li key={j} className="flex items-center">
                              <Check className="mr-2 size-4 text-primary" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button
                          asChild
                          className={`w-full mt-auto rounded-full ${plan.popular ? "bg-primary hover:bg-primary/90" : "bg-muted hover:bg-muted/80"}`}
                          variant={plan.popular ? "default" : "outline"}
                        >
                          <Link href="/contact">{plan.cta}</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Časté otázky
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Často kladené otázky</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Nájdite odpovede na bežné otázky o našich IT službách.
              </p>
            </motion.div>

            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "Aké typy podnikov podporujete?",
                    answer: `Podporujeme podniky všetkých veľkostí, od malých startupov až po veľké spoločnosti, naprieč rôznymi odvetviami. Naše riešenia sú škálovateľné a prispôsobené špecifickým potrebám.`,
                  },
                  {
                    question: "Ako rýchlo dokážete reagovať na IT problémy?",
                    answer:
                      "Naše reakčné časy sa líšia v závislosti od servisného plánu a závažnosti problému. Ponúkame možnosti prioritnej podpory pre kritické problémy, aby sme zabezpečili minimálne narušenie vášho podnikania.",
                  },
                  {
                    question: "Poskytujete podporu na mieste?",
                    answer:
                      "Áno, poskytujeme vzdialenú aj miestnu podporu v závislosti od vašich potrieb a lokality. Naším cieľom je efektívne riešiť problémy, či už na diaľku alebo s technikom na mieste.",
                  },
                  {
                    question: "Ako zabezpečujete bezpečnosť údajov?",
                    answer:
                      "Bezpečnosť údajov je našou hlavnou prioritou. Implementujeme viacvrstvové bezpečnostné opatrenia vrátane firewallov, šifrovania, pravidelných auditov a školení zamestnancov na ochranu vašich citlivých informácií.",
                  },
                  {
                    question: "Môžete nám pomôcť s migráciou do cloudu?",
                    answer:
                      "Určite. Máme rozsiahle skúsenosti s migráciou do cloudu a pomáhame podnikom plynulo prejsť na platformy ako AWS, Azure alebo Google Cloud, s optimalizáciou nákladov a výkonu.",
                  },
                ].map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <AccordionItem value={`item-${i}`} className="border-b border-border/40 py-2">
                      <AccordionTrigger className="text-left font-medium hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-6 text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Pripravení zlepšiť vaše IT?</h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                Spolupracujte so spoločnosťou {COMPANY_NAME} pre spoľahlivé, inovatívne a bezpečné IT riešenia.
                Porozprávajme sa o tom, ako môžeme pomôcť vášmu podnikaniu uspieť.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" variant="secondary" asChild className="rounded-full h-12 px-8 text-base">
                  <Link href="/contact">
                    Požiadať o bezplatnú konzultáciu
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="rounded-full h-12 px-8 text-base bg-transparent border-white text-white hover:bg-white/10"
                >
                  <Link href="/services">Preskúmať naše služby</Link>
                </Button>
              </div>
              <p className="text-sm text-primary-foreground/80 mt-4">
                Odborné poradenstvo. Prispôsobené riešenia. Merateľné výsledky.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
