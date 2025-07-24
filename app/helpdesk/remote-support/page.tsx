"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Download, Monitor, Shield, Clock, Users, CheckCircle, Info, AlertTriangle } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const downloadOptions = [
  {
    title: "TeamViewer QuickSupport",
    description: "Najrýchlejší spôsob pripojenia - nie je potrebná inštalácia",
    platform: "Windows",
    fileSize: "~3MB",
    icon: <Monitor className="size-8 text-primary" />,
    downloadUrl: "https://download.teamviewer.com/download/TeamViewerQS.exe",
    featured: true,
    badge: "Odporúčané",
  },
  {
    title: "TeamViewer Full Client",
    description: "Kompletný klient s všetkými funkciami",
    platform: "Windows / Mac / Linux",
    fileSize: "~25MB",
    icon: <Users className="size-8 text-primary" />,
    downloadUrl: "https://www.teamviewer.com/download/",
    featured: false,
  },
  {
    title: "AnyDesk",
    description: "Alternatívny klient pre vzdialený prístup",
    platform: "Windows / Mac / Linux",
    fileSize: "~5MB",
    icon: <Shield className="size-8 text-primary" />,
    downloadUrl: "https://anydesk.com/download",
    featured: false,
  },
]

const steps = [
  {
    step: "1",
    title: "Stiahnite klienta",
    description: "Vyberte a stiahnite si vhodný softvér pre váš operačný systém.",
    icon: <Download className="size-6 text-primary" />,
  },
  {
    step: "2",
    title: "Spustite aplikáciu",
    description: "Spustite stiahnutý súbor a postupujte podľa inštrukcií.",
    icon: <Monitor className="size-6 text-primary" />,
  },
  {
    step: "3",
    title: "Zdieľajte ID",
    description: "Zavolajte nám a poskytnite ID a heslo pre pripojenie.",
    icon: <Users className="size-6 text-primary" />,
  },
  {
    step: "4",
    title: "Začneme riešiť",
    description: "Náš technik sa pripojí a začne riešiť váš problém.",
    icon: <CheckCircle className="size-6 text-primary" />,
  },
]

const features = [
  "Okamžité riešenie problémov",
  "Bezpečné šifrované pripojenie",
  "Žiadna trvalá inštalácia potrebná",
  "Kompatibilné so všetkými OS",
  "Profesionálna technická podpora",
]

export default function RemoteSupportPage() {
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
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg flex items-center justify-center mb-4">
                  <Download className="size-10 text-white" />
                </div>
              </motion.div>
              <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2 w-fit mx-auto" variant="secondary">
                <Monitor className="size-4" />
                Vzdialená podpora
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Klientsky softvér
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Stiahnite si klientsky softvér pre vzdialený prístup a my vám okamžite pomôžeme vyriešiť vaše IT problémy.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Download Options Section */}
        <section className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Vyberte si klienta</h2>
              <p className="text-muted-foreground mt-4">
                Ponúkame niekoľko možností pre vzdialený prístup. Vyberte si tú, ktorá vám najviac vyhovuje.
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
              {downloadOptions.map((option) => (
                <motion.div
                  key={option.title}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <Card className={`h-full flex flex-col text-center items-center p-6 hover:shadow-lg transition-all duration-300 relative ${
                    option.featured 
                      ? 'border-primary/50 bg-gradient-to-b from-primary/5 to-primary/10 shadow-lg scale-105' 
                      : ''
                  }`}>
                    {option.featured && (
                      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                        {option.badge}
                      </Badge>
                    )}
                    <div className="mb-4">{option.icon}</div>
                    <CardHeader className="p-0">
                      <CardTitle className={`text-xl mb-2 ${option.featured ? 'text-primary' : ''}`}>
                        {option.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 flex-grow flex flex-col justify-between">
                      <div>
                        <p className="text-muted-foreground mb-3">{option.description}</p>
                        <div className="space-y-1 text-sm text-muted-foreground mb-4">
                          <p><strong>Platforma:</strong> {option.platform}</p>
                          <p><strong>Veľkosť:</strong> {option.fileSize}</p>
                        </div>
                      </div>
                      <Button 
                        variant={option.featured ? "default" : "outline"} 
                        asChild 
                        className="w-full mt-4"
                      >
                        <Link href={option.downloadUrl} target="_blank" rel="noopener noreferrer">
                          <Download className="mr-2 size-4" />
                          Stiahnuť
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="w-full py-20 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ako to funguje</h2>
              <p className="text-muted-foreground mt-4">
                Jednoduchý postup v 4 krokoch pre okamžitú technickou podporu.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center justify-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </span>
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  Prečo vzdialenou podporu?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Vzdialená podpora je najrýchlejší a najefektívnejší spôsob riešenia väčšiny IT problémov. 
                  Ušetríte čas a my vám pomôžeme okamžite.
                </p>
                <div className="grid gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="size-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                <Card className="p-6 border-blue-200 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-950/50">
                  <div className="flex items-start gap-4">
                    <Info className="size-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Bezpečnosť</h3>
                      <p className="text-blue-700 dark:text-blue-300 text-sm">
                        Všetky pripojenia sú šifrované pomocou 256-bit AES šifrovania. 
                        Váš počítač je v bezpečí a vy máte úplnú kontrolu nad session.
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 border-orange-200 bg-orange-50/50 dark:border-orange-800 dark:bg-orange-950/50">
                  <div className="flex items-start gap-4">
                    <Clock className="size-6 text-orange-600 dark:text-orange-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Rýchlosť</h3>
                      <p className="text-orange-700 dark:text-orange-300 text-sm">
                        Pripojenie trvá len pár minút. Väčšinu problémov vyriešime do 15 minút 
                        od prvého kontaktu.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-red-200 bg-red-50/50 dark:border-red-800 dark:bg-red-950/50">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="size-6 text-red-600 dark:text-red-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2">Dôležité</h3>
                      <p className="text-red-700 dark:text-red-300 text-sm">
                        Nikdy nespúšťajte vzdialený prístup pre neznáme osoby. 
                        Náš technik sa vždy najprv predstaví a overí váš ticket.
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
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
                Potrebujete pomoc s inštaláciou?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ak máte problémy so stiahnutím alebo spustením klientského softvéru, 
                neváhajte nás kontaktovať. Radi vám pomôžeme.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="rounded-full">
                  <Link href="tel:+421903879849">
                    Zavolať: +421 903 879 849
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="rounded-full">
                  <Link href="/contact">
                    Napísať e-mail <ArrowRight className="ml-2 size-4" />
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
