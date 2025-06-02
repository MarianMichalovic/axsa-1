"use client"

import { motion } from "framer-motion"
import { Cloud, ShieldCheck, Headphones, Code, Network, Briefcase, ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const COMPANY_NAME = "Innovatech IT"

const services = [
  {
    icon: <Headphones className="size-8 text-primary" />,
    title: "Spravované IT služby",
    description:
      "Komplexná, proaktívna IT podpora a správa na zabezpečenie optimálneho chodu vašich systémov. Staráme sa o všetko od podpory helpdesku až po strategické IT plánovanie.",
    details: [
      "Nepretržité monitorovanie a upozornenia",
      "Helpdesk a podpora na mieste",
      "Správa dodávateľov",
      "Správa IT aktív",
      "Pravidelná údržba systémov",
    ],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    icon: <ShieldCheck className="size-8 text-primary" />,
    title: "Riešenia kybernetickej bezpečnosti",
    description:
      "Chráňte svoje kritické podnikové aktíva pomocou našich pokročilých služieb kybernetickej bezpečnosti. Bránime sa proti vyvíjajúcim sa hrozbám a zabezpečujeme, aby vaše údaje zostali bezpečné a v súlade s predpismi.",
    details: [
      "Detekcia a reakcia na hrozby",
      "Sieťová bezpečnosť a firewally",
      "Šifrovanie a zálohovanie údajov",
      "Bezpečnostné audity a súlad",
      "Školenie povedomia zamestnancov",
    ],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    icon: <Cloud className="size-8 text-primary" />,
    title: "Cloudové služby",
    description:
      "Využite silu a škálovateľnosť cloudu. Pomáhame vám migrovať, spravovať a optimalizovať vašu cloudovú infraštruktúru pre lepší výkon a nákladovú efektívnosť.",
    details: [
      "Migrácia do cloudu a stratégia",
      "Infraštruktúra ako služba (IaaS)",
      "Platforma ako služba (PaaS)",
      "Integrácia softvéru ako služby (SaaS)",
      "Cloudové zálohovanie a obnova po havárii",
    ],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    icon: <Code className="size-8 text-primary" />,
    title: "Vývoj vlastného softvéru",
    description:
      "Prispôsobené softvérové riešenia navrhnuté tak, aby spĺňali vaše jedinečné podnikateľské výzvy a ciele. Od webových aplikácií po mobilné aplikácie vytvárame softvér, ktorý prináša výsledky.",
    details: [
      "Vývoj webových aplikácií",
      "Vývoj mobilných aplikácií (iOS a Android)",
      "Podnikové softvérové riešenia",
      "Vývoj a integrácia API",
      "Dizajn používateľského rozhrania",
    ],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    icon: <Network className="size-8 text-primary" />,
    title: "Sieťová infraštruktúra",
    description:
      "Návrh, implementácia a správa robustných, bezpečných a škálovateľných sieťových riešení. Zabezpečte spoľahlivé pripojenie a výkon pre vaše podnikové operácie.",
    details: [
      "Návrh a implementácia siete",
      "Riešenia bezdrôtových sietí",
      "VPN a vzdialený prístup",
      "Monitorovanie a správa siete",
      "Štruktúrovaná kabeláž",
    ],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    icon: <Briefcase className="size-8 text-primary" />,
    title: "IT konzultácie a stratégia",
    description:
      "Odborné IT poradenstvo, ktoré vám pomôže orientovať sa v zložitých technologických rozhodnutiach. Poskytujeme strategické rady na optimalizáciu vašich IT investícií a zosúladenie technológií s vašimi podnikovými cieľmi.",
    details: [
      "IT plán a strategické plánovanie",
      "Technologické hodnotenia",
      "Poradenstvo v oblasti digitálnej transformácie",
      "Projektový manažment",
      "IT rozpočtovanie a optimalizácia nákladov",
    ],
    image: "/placeholder.svg?height=300&width=500",
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

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section for Services Page */}
        <section className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="animated-hero-grid absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>
          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground dark:text-white mb-6">
                Naše služby
              </h1>
              <p className="text-lg text-muted-foreground dark:text-slate-300">
                Poskytujeme širokú škálu IT služieb, ktoré pomáhajú podnikom rásť a prosperovať v digitálnom svete.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="w-full py-20 md:py-32 bg-background dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {services.map((service, i) => (
                <motion.div key={i} variants={item}>
                  <div className="h-full p-6 rounded-lg border border-border/40 bg-gradient-to-b from-background to-muted/10 dark:from-slate-900 dark:to-slate-800/50 backdrop-blur hover:shadow-lg transition-all duration-300">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.details.map((detail, j) => (
                        <li key={j} className="flex items-center text-sm">
                          <span className="mr-2">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="animated-hero-grid absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>
          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground dark:text-white mb-6">
                Pripravení začať?
              </h2>
              <p className="text-lg text-muted-foreground dark:text-slate-300 mb-8">
                Kontaktujte nás ešte dnes a dozviete sa, ako vám môžeme pomôcť s vašimi IT potrebami.
              </p>
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact">
                  Kontaktujte nás <ArrowRight className="ml-2 size-4" />
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
