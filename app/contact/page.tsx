"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { useForm, type SubmitHandler } from "react-hook-form"
import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const COMPANY_NAME = "AXSA"

type Inputs = {
  name: string
  email: string
  company?: string
  phone?: string
  message: string
}

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsSubmitting(true)
    setSubmitStatus(null)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log("Form data:", data)
    // For now, we'll just simulate success
    setSubmitStatus("success")
    setIsSubmitting(false)
    reset()
    setTimeout(() => setSubmitStatus(null), 5000) // Clear status after 5s
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section for Contact Page */}
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
                Spojme sa
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Kontaktujte {COMPANY_NAME}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Máte projekt na mysli, otázku k našim službám alebo sa chcete len pozdraviť? Radi si s vami porozprávame.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form and Info Section */}
        <section className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="p-6 md:p-8 border-border/40 bg-gradient-to-br from-background to-muted/10 backdrop-blur">
                  <h2 className="text-2xl font-bold mb-6">Pošlite nám správu</h2>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Celé meno</Label>
                      <Input id="name" {...register("name", { required: "Meno je povinné" })} placeholder="Ján Novák" />
                      {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor="email">E-mailová adresa</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email", {
                          required: "E-mail je povinný",
                          pattern: { value: /^\S+@\S+$/i, message: "Neplatná e-mailová adresa" },
                        })}
                        placeholder="vas@email.sk"
                      />
                      {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="company">Spoločnosť (voliteľné)</Label>
                        <Input id="company" {...register("company")} placeholder="Vaša spoločnosť s.r.o." />
                      </div>
                      <div>
                        <Label htmlFor="phone">Telefón (voliteľné)</Label>
                        <Input id="phone" type="tel" {...register("phone")} placeholder="+421 903 123 456" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="message">Správa</Label>
                      <Textarea
                        id="message"
                        {...register("message", { required: "Správa je povinná" })}
                        placeholder="Ako vám môžeme pomôcť?"
                        rows={5}
                      />
                      {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>}
                    </div>
                    <Button type="submit" className="w-full rounded-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        "Odesilám..."
                      ) : (
                        <>
                          Odoslať správu <Send className="ml-2 size-4" />
                        </>
                      )}
                    </Button>
                    {submitStatus === "success" && (
                      <p className="text-sm text-green-600 mt-2 text-center">
                        Správa bola úspešne odoslaná! Čoskoro sa vám ozveme.
                      </p>
                    )}
                    {submitStatus === "error" && (
                      <p className="text-sm text-red-500 mt-2 text-center">
                        Nepodarilo sa odoslať správu. Skúste to prosím neskôr.
                      </p>
                    )}
                  </form>
                </Card>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold mb-4">Kontaktné informácie</h2>
                  <p className="text-muted-foreground mb-6">
                    Kontaktujte nás priamo telefonicky, e-mailom alebo navštívte našu kanceláriu. Sme tu, aby sme vám pomohli.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="size-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Naša kancelária</h3>
                        <p className="text-muted-foreground">Homolova 9 841 02 Bratislava</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="size-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Napíšte nám</h3>
                        <div className="space-y-1">
                          <Link href="mailto:axsa@axsa.sk" className="block text-primary hover:underline">
                            axsa@axsa.sk
                          </Link>
                          <Link href="mailto:helpdesk@axsa.sk" className="block text-primary hover:underline">
                            helpdesk@axsa.sk
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Phone className="size-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Zavolajte nám</h3>
                        <Link href="tel:+421903879849" className="text-primary hover:underline">
                          +421 903 879 849
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 mt-10">Prevádzkové hodiny</h2>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Pondelok - Piatok: 8:30 - 17:00</p>
                    <p>Sobota - Nedeľa: Zatvorené</p>
                    {/* <p>Podpora dostupná 24/7 pre klientov so správou IT služieb.</p> */}
                  </div>
                </div>

                {/* Placeholder for Map */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-3">Nájdite nás na mape</h3>
                  <div className="aspect-video rounded-lg overflow-hidden border border-border/40">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.8472847139896!2d17.10633847612956!3d48.14493554723867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8b5c5c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2sHomolova%209%2C%20841%2002%20Bratislava%2C%20Slovakia!5e0!3m2!1sen!2ssk!4v1642684800000!5m2!1sen!2ssk"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="AXSA - Poloha kancelárie"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
