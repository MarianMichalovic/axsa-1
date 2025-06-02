"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle, TrendingUp, ShieldCheck, CloudCog } from "lucide-react"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const COMPANY_NAME = "Innovatech IT"

const caseStudies = [
  {
    client: "Alpha Corp",
    industry: "Manufacturing",
    challenge: "Outdated IT infrastructure leading to inefficiencies and security vulnerabilities.",
    solution:
      "Implemented a hybrid cloud solution, modernized network infrastructure, and deployed advanced cybersecurity measures.",
    results: [
      "Reduced IT operational costs by 25%",
      "Improved system uptime by 99.9%",
      "Enhanced data security and compliance",
    ],
    image: "/1.jpg",
    icon: <CloudCog className="size-6 text-primary" />,
    tags: ["Cloud Migration", "Cybersecurity", "Infrastructure"],
  },
  {
    client: "Beta Retailers",
    industry: "E-commerce",
    challenge: "Scalability issues with their online platform during peak seasons and increasing cyber threats.",
    solution:
      "Developed a scalable microservices architecture, integrated robust payment gateways, and implemented a comprehensive security audit.",
    results: [
      "Successfully handled 300% increase in peak season traffic",
      "Reduced transaction fraud by 40%",
      "Improved customer satisfaction scores",
    ],
    image: "/3.jpg",
    icon: <ShieldCheck className="size-6 text-primary" />,
    tags: ["Software Development", "E-commerce", "Security"],
  },
  {
    client: "Gamma Healthcare",
    industry: "Healthcare",
    challenge:
      "Needed to ensure HIPAA compliance while improving patient data management and accessibility for authorized personnel.",
    solution:
      "Deployed a secure patient portal, implemented end-to-end encryption, and provided staff training on data privacy.",
    results: [
      "Achieved full HIPAA compliance",
      "Streamlined patient record management",
      "Enhanced data security and patient privacy",
    ],
    image: "/2.jpg",
    icon: <TrendingUp className="size-6 text-primary" />,
    tags: ["Healthcare IT", "Compliance", "Data Security"],
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

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section for Case Studies Page */}
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
                Proven Success
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Our Client Success Stories
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Discover how {COMPANY_NAME} has helped businesses overcome challenges and achieve remarkable results
                through strategic IT solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid Section */}
        <section className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {caseStudies.map((study) => (
                <motion.div key={study.client} variants={item}>
                  <Card className="h-full flex flex-col overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur hover:shadow-lg transition-all duration-300">
                    <Image
                      src={study.image || "/placeholder.svg"}
                      alt={`Case study for ${study.client}`}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        {study.icon}
                        <CardTitle className="text-2xl">{study.client}</CardTitle>
                      </div>
                      <Badge variant="outline">{study.industry}</Badge>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <h4 className="font-semibold mb-1 text-primary">Challenge:</h4>
                      <p className="text-sm text-muted-foreground mb-3">{study.challenge}</p>
                      <h4 className="font-semibold mb-1 text-primary">Solution:</h4>
                      <p className="text-sm text-muted-foreground mb-3">{study.solution}</p>
                      <h4 className="font-semibold mb-1 text-primary">Results:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {study.results.map((result) => (
                          <li key={result} className="flex items-start">
                            <CheckCircle className="size-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="mt-auto pt-4 border-t border-border/20">
                      <div className="flex flex-wrap gap-2">
                        {study.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

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
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Ready to Write Your Success Story?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Partner with {COMPANY_NAME} and let our IT expertise drive your business forward. Contact us for a
                consultation.
              </p>
              <Button size="lg" asChild className="rounded-full">
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2 size-4" />
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
