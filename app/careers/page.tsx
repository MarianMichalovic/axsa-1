"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Users, Heart, Zap, Target, MapPin, Clock, Send, Building, GraduationCap } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const openPositions = [
  {
    title: "Senior IT Administrátor",
    location: "Bratislava",
    type: "Plný úväzok",
    department: "IT Operations",
    description: "Hľadáme skúseného IT administrátora pre správu serverov a sieťovej infraštruktúry.",
    requirements: ["5+ rokov skúseností", "Windows Server, Linux", "VMware, Hyper-V", "Anglický jazyk"],
    featured: true,
  },
  {
    title: "Kybernetický bezpečnostný analytik",
    location: "Bratislava",
    type: "Plný úväzok",
    department: "Security",
    description: "Pozícia pre odborníka na kybernetickú bezpečnosť s focus na monitoring a incident response.",
    requirements: ["3+ rokov skúseností", "SIEM nástroje", "Penetračné testovanie", "Certifikácie výhodou"],
    featured: true,
  },
  {
    title: "Cloud Architekt",
    location: "Bratislava / Remote",
    type: "Plný úväzok",
    department: "Cloud Services",
    description: "Navrhujte a implementujte cloudové riešenia pre našich klientov.",
    requirements: ["Azure/AWS skúsenosti", "Terraform, Kubernetes", "DevOps praktiky", "Architektúrne myslenie"],
    featured: false,
  },
  {
    title: "Junior Softvérový vývojár",
    location: "Bratislava",
    type: "Plný úväzok",
    department: "Development",
    description: "Príležitosť pre začínajúceho vývojára pripojiť sa k našemu tímu.",
    requirements: ["C#/.NET alebo JavaScript", "Základy databáz", "Git, Agile", "Ochota učiť sa"],
    featured: false,
  },
]

const benefits = [
  {
    title: "Konkurenčný plat",
    description: "Pravidelné prehodnocovanie platov a bonusy za výkon",
    icon: <Target className="size-6 text-primary" />,
  },
  {
    title: "Flexibilita",
    description: "Hybridná práca, flexibilný pracovný čas",
    icon: <Clock className="size-6 text-primary" />,
  },
  {
    title: "Vzdelávanie",
    description: "Certifikácie, kurzy a konferencie hradené firmou",
    icon: <GraduationCap className="size-6 text-primary" />,
  },
  {
    title: "Tímová práca",
    description: "Priateľský kolektív a otvorenou komunikáciou",
    icon: <Users className="size-6 text-primary" />,
  },
  {
    title: "Moderne prostredie",
    description: "Najnovšie technológie a nástroje",
    icon: <Zap className="size-6 text-primary" />,
  },
  {
    title: "Work-life balance",
    description: "5 týždňov dovolenky, sick days, wellness program",
    icon: <Heart className="size-6 text-primary" />,
  },
]

const values = [
  {
    title: "Inovácia",
    description: "Využívame najnovšie technológie a hľadáme kreativne riešenia",
  },
  {
    title: "Spolupráca",
    description: "Veríme v silu tímovej práce a otvorenej komunikácie",
  },
  {
    title: "Kvalita",
    description: "Dodávame riešenia najvyššej kvality s dôrazom na detail",
  },
  {
    title: "Rozvoj",
    description: "Investujeme do rozvoja našich ľudí a ich kariérneho rastu",
  },
]

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="animated-hero-grid absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>
          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-lg flex items-center justify-center mb-4">
                  <Users className="size-10 text-white" strokeWidth={1.25} />
                </div>
              </motion.div>
              <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium bg-green-600 text-white hover:bg-green-700 flex items-center gap-2 w-fit mx-auto" variant="secondary">
                <Building className="size-4" />
                Pridajte sa k nám
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Kariéra
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Pripojte sa k našemu tímu technologických nadšencov a budujte budúcnosť IT riešení s nami.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Otvorené pozície</h2>
              <p className="text-muted-foreground mt-4">
                Aktuálne hľadáme talentovaných odborníkov do našich tímov. Môžete byť ten ďalší?
              </p>
            </div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              variants={{
                show: { transition: { staggerChildren: 0.1 } },
                hidden: {},
              }}
              className="space-y-6"
            >
              {openPositions.map((position, index) => (
                <motion.div
                  key={position.title}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <Card className={`p-6 hover:shadow-lg transition-all duration-300 ${
                    position.featured 
                      ? 'border-primary/50 bg-gradient-to-r from-primary/5 to-primary/10 shadow-lg' 
                      : ''
                  }`}>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      <div className="flex-grow">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="flex-grow">
                            <div className="flex items-center gap-2 mb-2">
                              <CardTitle className="text-xl">{position.title}</CardTitle>
                              {position.featured && (
                                <Badge className="bg-primary text-primary-foreground text-xs">
                                  Urgentne
                                </Badge>
                              )}
                            </div>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                              <div className="flex items-center gap-1">
                                <MapPin className="size-4" />
                                {position.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="size-4" />
                                {position.type}
                              </div>
                              <div className="flex items-center gap-1">
                                <Building className="size-4" />
                                {position.department}
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4">{position.description}</p>
                        <div>
                          <h4 className="text-sm font-semibold mb-2">Požiadavky:</h4>
                          <div className="flex flex-wrap gap-2">
                            {position.requirements.map((req, reqIndex) => (
                              <Badge key={reqIndex} variant="outline" className="text-xs">
                                {req}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 lg:flex-shrink-0">
                        <Button size="lg" asChild>
                          <Link href={`mailto:hr@axsa.sk?subject=Záujem o pozíciu: ${position.title}`}>
                            <Send className="mr-2 size-4" />
                            Poslať životopis
                          </Link>
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                          <Link href="/contact">
                            Viac informácií
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-20 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Prečo pracovať s nami?</h2>
              <p className="text-muted-foreground mt-4">
                Ponúkame výhodné benefity a prostredie, kde môžete rásť a rozvíjať svoju kariéru.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full p-6 text-center hover:shadow-lg transition-shadow duration-300">
                    <div className="mb-4 flex justify-center">{benefit.icon}</div>
                    <CardHeader className="p-0">
                      <CardTitle className="text-lg mb-2">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        {/* <section className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Naše hodnoty</h2>
              <p className="text-muted-foreground mt-4">
                Tieto princípy nás vedú každý deň a tvoria základ našej firemnej kultúry.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center md:text-left"
                >
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Nevidíte vhodnú pozíciu?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Neváhajte nás kontaktovať! Radi sa zoznámime s talentovanými ľuďmi aj mimo aktuálnych otvorených pozícií.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="rounded-full">
                  <Link href="mailto:hr@axsa.sk?subject=Spontánna žiadosť">
                    <Send className="mr-2 size-4" />
                    Pošlite nám životopis
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="rounded-full">
                  <Link href="/contact">
                    Kontaktovať HR <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
