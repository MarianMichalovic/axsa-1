"use client"

import Link from "next/link"

const COMPANY_NAME = "AXSA, s.r.o."

const navLinks = [
  { href: "/services", label: "Služby" },
  { href: "/about", label: "O nás" },
  // { href: "/case-studies", label: "Prípadové štúdie" },
  { href: "/contact", label: "Kontakt" },
]

const services = [
  { title: "Spravované IT služby", href: "/services" },
  { title: "Kybernetická bezpečnosť", href: "/services" },
  { title: "Cloud computing", href: "/services" },
  { title: "Vývoj softvéru", href: "/services" },
]

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
      <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
                I
              </div>
              <span>{COMPANY_NAME}</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Váš spoľahlivý partner pre inovatívne IT riešenia a odbornú podporu.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold">Rýchle odkazy</h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href + "-footer"}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold">Služby</h4>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.title + "-footer"}>
                  <Link href={service.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold">Spoločnosť</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  O nás
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">
                  Kariéra
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="text-muted-foreground hover:text-foreground transition-colors">
                  Certifikácie
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-8">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. Všetky práva vyhradené.
          </p>
        </div>
      </div>
    </footer>
  )
}
