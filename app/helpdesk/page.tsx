"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Search, LifeBuoy, BookOpen, Wrench, Phone, Mail, MessageCircle, User, Clock, Shield, Laptop, Smartphone, Headphones } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const helpCategories = [
  {
    title: "Prvé kroky",
    description: "Návody a tipy, ako začať používať naše služby a produkty.",
    icon: <BookOpen className="size-6 text-primary" />,
    link: "/helpdesk/getting-started",
  },
  {
    title: "Technická podpora",
    description: "Riešenia bežných technických problémov a konfigurácie.",
    icon: <Wrench className="size-6 text-primary" />,
    link: "/helpdesk/technical-support",
  },
  {
    title: "Fakturácia a platby",
    description: "Všetko o faktúrach, platobných metódach a správe účtu.",
    icon: <LifeBuoy className="size-6 text-primary" />,
    link: "/helpdesk/billing",
  },
]

const contactMethods = [
  {
    title: "Telefón",
    subtitle: "+421 903 879 849",
    description: "Okamžitá pomoc pre kritické problémy",
    badge: "24/7",
    action: "Zavolať",
    icon: <Phone className="size-6 text-primary" />,
    href: "tel:+421903879849",
  },
  {
    title: "Email",
    subtitle: "helpdesk@axsa.sk",
    description: "Podrobné riešenie vašich problémov",
    badge: "Odpoveď do 1 hodiny",
    action: "Napísať",
    icon: <Mail className="size-6 text-primary" />,
    href: "mailto:helpdesk@axsa.sk",
  },
  // {
  //   title: "Live Chat",
  //   subtitle: "Spustiť chat",
  //   description: "Rýchla komunikácia s našimi odborníkmi",
  //   badge: "Po-Pi 8:00-18:00",
  //   action: "Chatovať",
  //   icon: <MessageCircle className="size-6 text-primary" />,
  //   href: "#chat",
  // },
  // {
  //   title: "Klientsky portál",
  //   subtitle: "portal.axsa.sk",
  //   description: "Spravujte tickets a sledujte status",
  //   badge: "Vždy dostupný",
  //   action: "Prihlásiť sa",
  //   icon: <User className="size-6 text-primary" />,
  //   href: "https://portal.axsa.sk",
  // },
]

const services = [
  {
    title: "Vzdialená správa",
    description: "Okamžité riešenie problémov cez vzdialený prístup",
    response: "< 15 minút",
    icon: <Laptop className="size-6 text-primary" />,
    featured: true,
    badge: "Najrýchlejšie",
  },
  {
    title: "Mobilná podpora",
    description: "Podpora cez mobilnú aplikáciu",
    response: "< 30 minút",
    icon: <Smartphone className="size-6 text-primary" />,
    featured: false,
  },
  {
    title: "Onsite servis",
    description: "Osobná návšteva technika priamo u vás",
    response: "< 4 hodiny",
    icon: <Wrench className="size-6 text-primary" />,
    featured: false,
  },
]

const priorityLevels = [
  {
    level: "Kritický",
    response: "15 minút",
    description: "Výpadok servera, bezpečnostný incident",
    color: "bg-red-500",
  },
  {
    level: "Vysoký",
    response: "1 hodina",
    description: "Problémy s email, sieťové výpadky",
    color: "bg-orange-500",
  },
  {
    level: "Stredný",
    response: "4 hodiny",
    description: "Softvérové problémy, pomalý výkon",
    color: "bg-yellow-500",
  },
  {
    level: "Nízky",
    response: "1 deň",
    description: "Požiadavky na zmeny, školenia",
    color: "bg-green-500",
  },
]

const faqItems = [
  {
    question: "Ako môžem resetovať svoje heslo?",
    answer:
      "Svoje heslo si môžete resetovať kliknutím na odkaz 'Zabudli ste heslo?' na prihlasovacej stránke. Po zadaní vašej e-mailovej adresy vám pošleme inštrukcie na obnovu hesla.",
  },
  {
    question: "Kde nájdem svoje faktúry?",
    answer:
      "Všetky vaše faktúry sú dostupné vo vašom zákazníckom účte v sekcii 'Fakturácia'. Môžete si ich tam kedykoľvek zobraziť a stiahnuť vo formáte PDF.",
  },
  {
    question: "Ako dlho trvá odpoveď od technickej podpory?",
    answer:
      "Našim cieľom je odpovedať na všetky požiadavky do 24 hodín počas pracovných dní. V prípade urgentných problémov odporúčame využiť našu telefonickú podporu pre rýchlejšiu odozvu.",
  },
  {
    question: "Poskytujete zľavy pre neziskové organizácie?",
    answer:
      "Áno, ponúkame špeciálne zľavy pre neziskové a vzdelávacie inštitúcie. Pre viac informácií a posúdenie nároku nás prosím kontaktujte priamo.",
  },
]

export default function HelpdeskPage() {
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
              <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium bg-red-600 text-white hover:bg-red-700 flex items-center gap-2 w-fit mx-auto" variant="secondary">
                <Headphones className="size-4" />
                Centrum pomoci
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                IT Helpdesk
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Naša technická podpora je k dispozícii pre riešenie vašich IT problémov. Garantujeme rýchle riešenie a profesionálny prístup.
              </p>
              <div className="max-w-xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Hľadajte v článkoch pomoci..."
                    className="w-full rounded-full pl-12 pr-4 py-3 text-base h-12"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods Section */}
        <section className="w-full py-20 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Kontaktujte nás</h2>
              <p className="text-muted-foreground mt-4">
                Vyberte si najvhodnejší spôsob komunikácie pre váš problém.
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
              className="grid md:grid-cols-2 lg:grid-cols-2 gap-6"
            >
              {contactMethods.map((method) => (
                <motion.div
                  key={method.title}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <Card className="h-full flex flex-col text-center items-center p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="mb-4">{method.icon}</div>
                    <CardHeader className="p-0">
                      <CardTitle className="text-lg mb-1">{method.title}</CardTitle>
                      <p className="text-sm font-medium text-primary">{method.subtitle}</p>
                    </CardHeader>
                    <CardContent className="p-0 flex-grow">
                      <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                      <Badge variant="secondary" className="text-xs mb-3">
                        {method.badge}
                      </Badge>
                    </CardContent>
                    <Button variant="outline" asChild className="mt-auto">
                      <Link href={method.href}>
                        {method.action}
                      </Link>
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Prehľadávať témy</h2>
              <p className="text-muted-foreground mt-4">
                Preskúmajte naše kategórie a nájdite riešenia a návody krok za krokom.
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
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {helpCategories.map((category) => (
                <motion.div
                  key={category.title}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <Card className="h-full flex flex-col text-center items-center p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="mb-4">{category.icon}</div>
                    <CardHeader className="p-0">
                      <CardTitle className="text-xl mb-2">{category.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 flex-grow">
                      <p className="text-muted-foreground">{category.description}</p>
                    </CardContent>
                    <Button variant="link" asChild className="mt-4">
                      <Link href={category.link}>
                        Zobraziť viac <ArrowRight className="ml-2 size-4" />
                      </Link>
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Naše služby</h2>
              <p className="text-muted-foreground mt-4">
                Rôzne spôsoby, ako vám môžeme pomôcť vyriešiť vaše IT problémy.
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
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service) => (
                <motion.div
                  key={service.title}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <Card className={`h-full flex flex-col text-center items-center justify-center p-6 hover:shadow-lg transition-all duration-300 relative ${
                    service.featured 
                      ? 'border-primary/50 bg-gradient-to-b from-primary/5 to-primary/10 shadow-lg scale-105' 
                      : ''
                  }`}>
                    {service.featured && (
                      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                        {service.badge}
                      </Badge>
                    )}
                    <div className="flex flex-col items-center justify-center text-center">
                      <div className="mb-4">{service.icon}</div>
                      <CardHeader className="p-0">
                        <CardTitle className={`text-xl mb-2 ${service.featured ? 'text-primary' : ''}`}>
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <p className="text-muted-foreground">{service.description}</p>
                        {/* <Badge variant={service.featured ? "default" : "outline"} className="text-sm">
                          Odozva: {service.response}
                        </Badge> */}
                      </CardContent>
                    </div>
                    {service.featured && (
                      <Button className="mt-6" asChild>
                        <Link href="/contact">
                          Začať vzdialenú session <ArrowRight className="ml-2 size-4" />
                        </Link>
                      </Button>
                    )}
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Priority Levels Section */}
        <section className="w-full py-20 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Úrovne priority</h2>
              <p className="text-muted-foreground mt-4">
                Klasifikujeme problémy podľa závažnosti pre zabezpečenie správnej priority riešenia.
              </p>
            </div>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {priorityLevels.map((priority) => (
                <Card key={priority.level} className="p-6 text-center">
                  <div className={`w-4 h-4 rounded-full ${priority.color} mx-auto mb-4`}></div>
                  <CardHeader className="p-0">
                    <CardTitle className="text-lg mb-1">{priority.level}</CardTitle>
                    {/* <p className="text-sm font-medium text-primary">Odozva: {priority.response}</p> */}
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-sm text-muted-foreground mt-3">{priority.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Working Hours Section */}
        <section className="w-full py-20 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Pracovné hodiny</h2>
              <div className="grid gap-4 text-left">
                <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                  <span className="font-medium">Pondelok - Piatok:</span>
                  <span>8:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-muted/50 rounded-lg">
                  <span className="font-medium">Sobota - Nedeľa:</span>
                  <span>Zatvorené</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <span className="font-medium flex items-center gap-2">
                    <Shield className="size-4 text-primary" />
                    Kritické problémy:
                  </span>
                  <span className="font-bold text-primary">24/7</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {/* <section className="w-full py-20 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Často kladené otázky</h2>
              <p className="text-muted-foreground mt-4">
                Tu sú niektoré z najčastejších otázok, ktoré dostávame od našich zákazníkov.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index + 1}`}>
                    <AccordionTrigger className="text-lg text-left">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Nenašli ste, čo ste hľadali?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Náš tím podpory je pripravený vám pomôcť. Kontaktujte nás a my sa vám čo najskôr ozveme.
              </p>
              <Button size="lg" asChild className="rounded-full">
                <Link href="/contact">
                  Kontaktovať podporu <ArrowRight className="ml-2 size-4" />
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
