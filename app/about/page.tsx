"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Target, Eye, ShieldCheck, ArrowRight, Building, Lightbulb, Award } from "lucide-react"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const COMPANY_NAME = "AXSA"

const teamMembers = [
  { name: "Alice Wonderland", role: "Generálna riaditeľka a zakladateľka", image: "/images/1.jpg" },
  { name: "Bob The Builder", role: "Technický riaditeľ", image: "/images/2.jpg" },
  { name: "Carol Danvers", role: "Vedúca kybernetickej bezpečnosti", image: "/images/3.jpg" },
  { name: "David Copperfield", role: "Hlavný architekt riešení", image: "/images/4.jpg" },
]

const values = [
  {
    icon: <Lightbulb className="size-6 text-primary" />,
    title: "Inovácie",
    description: "Neustále hľadáme nové a lepšie spôsoby riešenia výziev.",
  },
  {
    icon: <ShieldCheck className="size-6 text-primary" />,
    title: "Integrita",
    description: "Pracujeme transparentne a čestne vo všetkých našich činnostiach.",
  },
  {
    icon: <Users className="size-6 text-primary" />,
    title: "Zameranie na klienta",
    description: "Úspech našich klientov je našou najvyššou prioritou.",
  },
  {
    icon: <Award className="size-6 text-primary" />,
    title: "Excellencia",
    description: "Usilujeme sa o najvyššiu kvalitu v našej práci a službách.",
  },
]

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

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section for About Page */}
        <section className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="animated-hero-grid absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>
          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Kto sme
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                O {COMPANY_NAME}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Poháňame technologickú excelenciu a inovácie pre posilnenie podnikov v digitálnej budúcnosti. Zistite viac o
                našej ceste, misii a hodnotách, ktoré nás vedú.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <Badge className="mb-4 rounded-full px-3 py-1 text-sm" variant="outline">
                  Naša cesta
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  Priekopníci v IT riešeniach od roku 2011
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Založená s víziou zjednodušiť komplexné technológie, {COMPANY_NAME} sa vyvinula na popredného poskytovateľa IT
                  služieb. Našu cestu charakterizuje neustála snaha o inovácie, spokojnosť zákazníkov a prispôsobenie sa
                  neustále sa meniacemu technologickému prostrediu.
                </p>
                <p className="text-lg text-muted-foreground">
                  Veríme v budovanie dlhodobých partnerstiev s našimi klientmi, pochopenie ich jedinečných potrieb a
                  poskytovanie riešení na mieru, ktoré podporujú rast a efektivitu.
                </p>
              </div>
              <div>
                <Card className="overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                  <Image
                    src="/3.jpg"
                    alt="Innovatech IT Team"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="w-full py-20 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="h-full p-8 border-border/40 bg-gradient-to-br from-background to-muted/20 backdrop-blur">
                  <div className="flex items-center gap-4 mb-4">
                    <Target className="size-10 text-primary" />
                    <h3 className="text-2xl font-bold">Naša misia</h3>
                  </div>
                  <p className="text-muted-foreground text-lg">
                    Posilniť podniky inovatívnymi a spoľahlivými IT riešeniami, ktoré im umožnia dosiahnuť ich
                    strategické ciele, zvýšiť prevádzkovú efektivitu a zabezpečiť ich digitálne aktíva.
                  </p>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="h-full p-8 border-border/40 bg-gradient-to-br from-background to-muted/20 backdrop-blur">
                  <div className="flex items-center gap-4 mb-4">
                    <Eye className="size-10 text-primary" />
                    <h3 className="text-2xl font-bold">Naša vízia</h3>
                  </div>
                  <p className="text-muted-foreground text-lg">
                    Byť popredným IT partnerom uznávaným za transformáciu podnikov prostredníctvom technológií, podporu
                    inovácií a poskytovanie výnimočnej hodnoty a služieb.
                  </p>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <Badge className="mb-4 rounded-full px-3 py-1 text-sm" variant="outline">
                Základné princípy
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Naše hodnoty</h2>
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
                Tieto princípy sú základom našej firemnej kultúry a spôsobu, akým slúžime našim klientom.
              </p>
            </motion.div>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {values.map((value) => (
                <motion.div key={value.title} variants={item}>
                  <Card className="h-full text-center p-6 border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur hover:shadow-md transition-shadow">
                    <div className="flex justify-center mb-4">{value.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Meet The Team Section (Simplified) */}
        {/* <section className="w-full py-20 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <Badge className="mb-4 rounded-full px-3 py-1 text-sm" variant="secondary">
                Naši experti
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Pozrite sa na naše vedenie</h2>
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
                Náš skúsený tím vedenia je odhodlaný poháňať inovácie a poskytovať výnimočné výsledky
                pre našich klientov.
              </p>
            </motion.div>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {teamMembers.map((member) => (
                <motion.div key={member.name} variants={item}>
                  <Card className="text-center overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur hover:shadow-md transition-shadow">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="w-full h-auto object-cover aspect-square"
                    />
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold">{member.name}</h3>
                      <p className="text-sm text-primary">{member.role}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section> */}

        {/* Join Us CTA */}
        <section className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <Building className="size-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Partnerstvo s {COMPANY_NAME}</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Pripravený vziať svoj biznis na dalšiu úroveň?
              </p>
              <Button size="lg" asChild className="rounded-full">
                <Link href="/contact">
                  Kontaktujte Nás hneď <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
