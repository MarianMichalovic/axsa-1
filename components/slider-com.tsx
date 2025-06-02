"use client";

import { CardSlider } from "./slider";

const courses = [
  {
    title: "Ako vzniká IT projekt: krok za krokom",
    description:
      "Od prvého stretnutia cez analýzu až po nasadenie - ukážeme vám, čo všetko sa deje v zákulisí pri vývoji softvéru alebo webovej aplikácie.",
    image: "/2.jpg",
  },
  {
    title: "5 najčastejších chýb pri zadávaní IT projektu (a ako sa im vyhnúť)",
    description:
      "Zadanie je kľúč k úspechu. V tomto článku zhrnieme typické chyby klientov a tipy, ako pripraviť kvalitné podklady pre vývojárov.",
    image: "/3.jpg",
  },
  {
    title: "Bezpečnosť v cloude: mýty vs. realita",
    description:
      "Je cloud naozaj bezpečný? Vysvetlíme, ako funguje ochrana dát v cloude, čoho sa netreba báť - a na čo si dať pozor.",
    image: "/4.jpg",
  },
  {
    title: "Trendy v IT: Čo nás čaká v najbližších rokoch?",
    description:
      "Umelá inteligencia, automatizácia, low-code vývoj... Pozrieme sa na technológie, ktoré budú v najbližšom období hýbať svetom IT.",
    image: "/5.jpg",
  },
  {
    title: "Bezpečnosť v cloude: mýty vs. realita",
    description:
      "Je cloud naozaj bezpečný? Vysvetlíme, ako funguje ochrana dát v cloude, čoho sa netreba báť - a na čo si dať pozor.",
    image: "/4.jpg",
  },
  {
    title: "Bezpečnosť v cloude: mýty vs. realita",
    description:
      "Je cloud naozaj bezpečný? Vysvetlíme, ako funguje ochrana dát v cloude, čoho sa netreba báť - a na čo si dať pozor.",
    image: "/4.jpg",
  },
];

export function CoursesSlider() {
  return (
    <CardSlider
      title="Naše posledné projekty"
      description="Každý projekt je pre nás výzvou aj príležitosťou vytvoriť niečo, čo má zmysel. Navrhujeme riešenia, ktoré zjednodušujú prácu, šetria čas a prinášajú reálnu hodnotu klientom."
      cards={courses}
    />
  );
} 