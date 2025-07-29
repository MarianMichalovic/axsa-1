"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Award, Shield, CheckCircle, Calendar, ExternalLink, Download } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const certifications = [
  {
    title: "ISO 27001",
    subtitle: "Information Security Management",
    description: "Medzinárodný štandard pre systémy riadenia informačnej bezpečnosti",
    issuer: "ISO",
    validUntil: "2025-12-31",
    status: "Aktívne",
    icon: <Shield className="size-8 text-primary" />,
    certificateUrl: "#",
    featured: true,
  },
  {
    title: "Microsoft Partner",
    subtitle: "Gold Cloud Platform",
    description: "Najvyššia úroveň partnerstva s Microsoft pre cloudové riešenia",
    issuer: "Microsoft",
    validUntil: "2025-06-30",
    status: "Aktívne",
    icon: <Award className="size-8 text-blue-600" />,
    certificateUrl: "#",
    featured: true,
  },
  {
    title: "AWS Partner",
    subtitle: "Advanced Tier Services",
    description: "Pokročilé partnerstvo pre Amazon Web Services",
    issuer: "Amazon Web Services",
    validUntil: "2025-09-15",
    status: "Aktívne",
    icon: <Award className="size-8 text-orange-500" />,
    certificateUrl: "#",
    featured: false,
  },
  {
    title: "ISO 9001",
    subtitle: "Quality Management Systems",
    description: "Štandard pre systémy riadenia kvality",
    issuer: "ISO",
    validUntil: "2025-11-20",
    status: "Aktívne",
    icon: <CheckCircle className="size-8 text-green-600" />,
    certificateUrl: "#",
    featured: false,
  },
  {
    title: "GDPR Compliance",
    subtitle: "Data Protection Certification",
    description: "Certifikácia súladu s nariadením GDPR",
    issuer: "EU Commission",
    validUntil: "2026-05-25",
    status: "Aktívne",
    icon: <Shield className="size-8 text-purple-600" />,
    certificateUrl: "#",
    featured: false,
  },
  {
    title: "CompTIA Security+",
    subtitle: "Cybersecurity Certification",
    description: "Certifikácia kybernetickej bezpečnosti pre náš tím",
    issuer: "CompTIA",
    validUntil: "2025-08-10",
    status: "Aktívne",
    icon: <Shield className="size-8 text-red-600" />,
    certificateUrl: "#",
    featured: false,
  },
]

const benefits = [
  "Garantovaná kvalita služieb",
  "Dodržiavanie medzinárodných štandardov",
  "Kontinuálne vzdelávanie tímu",
  "Bezpečnosť a dôveryhodnosť",
  "Pravidelné audity a kontroly",
  "Špičková odbornosť",
]

export default function CertificationsPage() {
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
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 shadow-lg flex items-center justify-center mb-4">
                  <Award className="size-10 text-white" strokeWidth={1.25}/>
                </div>
              </motion.div>
              <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium bg-yellow-600 text-white hover:bg-yellow-700 flex items-center gap-2 w-fit mx-auto" variant="secondary">
                <CheckCircle className="size-4" />
                Kvalita a dôveryhodnosť
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Certifikácie
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Naše certifikácie a akreditácie potvrdzujú našu odbornosť a záväzok poskytovať služby najvyššej kvality.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Certifications Grid */}
        <section className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Naše certifikácie</h2>
              <p className="text-muted-foreground mt-4">
                Držíme aktuálne certifikácie od popredných technologických spoločností a medzinárodných organizácií.
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
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <Card className={`h-full flex flex-col p-6 hover:shadow-lg transition-all duration-300 relative ${
                    cert.featured 
                      ? 'border-primary/50 bg-gradient-to-b from-primary/5 to-primary/10 shadow-lg scale-105' 
                      : ''
                  }`}>
                    {cert.featured && (
                      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                        Kľúčová certifikácia
                      </Badge>
                    )}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0">{cert.icon}</div>
                      <div className="flex-grow">
                        <CardHeader className="p-0">
                          <CardTitle className="text-lg mb-1">{cert.title}</CardTitle>
                          <p className="text-sm font-medium text-muted-foreground">{cert.subtitle}</p>
                        </CardHeader>
                      </div>
                    </div>
                    <CardContent className="p-0 flex-grow">
                      <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Vydavateľ:</span>
                          <span className="font-medium">{cert.issuer}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Platné do:</span>
                          <span className="font-medium">{new Date(cert.validUntil).toLocaleDateString('sk-SK')}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Status:</span>
                          <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                            {cert.status}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                    <Button variant="outline" size="sm" asChild className="mt-4">
                      <Link href={cert.certificateUrl}>
                        <ExternalLink className="mr-2 size-3" />
                        Zobraziť certifikát
                      </Link>
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-20 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  Prečo sú certifikácie důležité?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Naše certifikácie nie sú len papiere na stene. Predstavujú náš záväzok voči kvalite, 
                  bezpečnosti a kontinuálnemu vzdelávaniu. Pre našich klientov to znamená istotu a spoľahlivosť.
                </p>
                <div className="grid gap-3">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="size-5 text-green-500 flex-shrink-0" />
                      <span>{benefit}</span>
                    </motion.div>
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
                    <Shield className="size-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Bezpečnosť</h3>
                      <p className="text-blue-700 dark:text-blue-300 text-sm">
                        Naše bezpečnostné certifikácie garantujú najvyššiu úroveň ochrany vašich dát 
                        a systémov podľa medzinárodných štandardov.
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-950/50">
                  <div className="flex items-start gap-4">
                    <Award className="size-6 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">Kvalita</h3>
                      <p className="text-green-700 dark:text-green-300 text-sm">
                        Certifikácie kvality potvrdzujú, že naše procesy a služby spĺňajú 
                        najprísnejšie medzinárodné kritériá.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-purple-200 bg-purple-50/50 dark:border-purple-800 dark:bg-purple-950/50">
                  <div className="flex items-start gap-4">
                    <Calendar className="size-6 text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Kontinuita</h3>
                      <p className="text-purple-700 dark:text-purple-300 text-sm">
                        Pravidelne obnovujeme a rozširujeme naše certifikácie, aby sme zostali 
                        v súlade s najnovšími technológiami a štandardmi.
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

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
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Potrebujete overenie našich certifikácií?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Radi vám poskytneme kópie našich certifikátov alebo vás presmerujeme na oficiálne 
                stránky certifikačných orgánov pre overenie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="rounded-full">
                  <Link href="/contact">
                    Kontaktovať nás <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="rounded-full">
                  <Link href="#" target="_blank">
                    <Download className="mr-2 size-4" />
                    Stiahnuť certifikáty
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
