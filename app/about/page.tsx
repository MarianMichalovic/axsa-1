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

const COMPANY_NAME = "Innovatech IT"

const teamMembers = [
  { name: "Alice Wonderland", role: "CEO & Founder", image: "/images/1.jpg" },
  { name: "Bob The Builder", role: "Chief Technology Officer", image: "/images/2.jpg" },
  { name: "Carol Danvers", role: "Head of Cybersecurity", image: "/images/3.jpg" },
  { name: "David Copperfield", role: "Lead Solutions Architect", image: "/images/4.jpg" },
]

const values = [
  {
    icon: <Lightbulb className="size-6 text-primary" />,
    title: "Innovation",
    description: "We constantly seek new and better ways to solve challenges.",
  },
  {
    icon: <ShieldCheck className="size-6 text-primary" />,
    title: "Integrity",
    description: "We operate with transparency and honesty in all our dealings.",
  },
  {
    icon: <Users className="size-6 text-primary" />,
    title: "Customer Focus",
    description: "Our clients' success is our top priority.",
  },
  {
    icon: <Award className="size-6 text-primary" />,
    title: "Excellence",
    description: "We strive for the highest quality in our work and services.",
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
                Who We Are
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                About {COMPANY_NAME}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Driving technological excellence and innovation to empower businesses for a digital future. Learn about
                our journey, mission, and the values that guide us.
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
                  Our Journey
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  Pioneering IT Solutions Since 2010
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Founded with a vision to simplify complex technology, {COMPANY_NAME} has grown into a leading IT
                  service provider. Our journey is marked by a relentless commitment to innovation, customer
                  satisfaction, and adapting to the ever-changing tech landscape.
                </p>
                <p className="text-lg text-muted-foreground">
                  We believe in building long-term partnerships with our clients, understanding their unique needs, and
                  delivering tailored solutions that drive growth and efficiency.
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
                    <h3 className="text-2xl font-bold">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground text-lg">
                    To empower businesses with innovative and reliable IT solutions, enabling them to achieve their
                    strategic objectives, enhance operational efficiency, and secure their digital assets.
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
                    <h3 className="text-2xl font-bold">Our Vision</h3>
                  </div>
                  <p className="text-muted-foreground text-lg">
                    To be the leading IT partner recognized for transforming businesses through technology, fostering
                    innovation, and delivering exceptional value and service.
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
                Core Principles
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Guiding Values</h2>
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
                These principles are the foundation of our company culture and how we serve our clients.
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
        <section className="w-full py-20 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <Badge className="mb-4 rounded-full px-3 py-1 text-sm" variant="secondary">
                Our Experts
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Meet Our Leadership</h2>
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
                Our experienced leadership team is dedicated to driving innovation and delivering exceptional results
                for our clients.
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
        </section>

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
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Partner with {COMPANY_NAME}</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ready to take your business to the next level with cutting-edge IT solutions? Let's build the future
                together.
              </p>
              <Button size="lg" asChild className="rounded-full">
                <Link href="/contact">
                  Contact Us Today <ArrowRight className="ml-2 size-4" />
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
