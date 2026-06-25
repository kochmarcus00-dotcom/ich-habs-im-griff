export interface Product {
  id: string;
  title: string;
  type:
  | "journal"
  | "tracker"
  | "drink"
  | "tea"
  | "sleep"
  | "activity"
  | "creative"
  | "relax";
  description: string;
  url: string;
}

export const products = {

  sigg: {
    id: "sigg",
    title: "SIGG Traveller Trinkflasche",
    type: "drink",
    description:
      "Viele Menschen ersetzen das Feierabendbier durch Wasser oder Tee. Eine hochwertige Trinkflasche kann dabei helfen, daraus eine neue, gesunde Gewohnheit zu entwickeln.",
    url: "https://amzn.to/4eD1Ceo",
  },

  notebook: {
    id: "notebook",
    title: "Leuchtturm1917 Notizbuch",
    type: "journal",
    description:
      "Gedanken, Auslöser und Fortschritte aufzuschreiben hilft vielen Menschen, ihre Gewohnheiten besser zu verstehen und Veränderungen bewusst wahrzunehmen.",
    url: "https://amzn.to/3StisoG",
  },

  tea: {
    id: "tea",
    title: "Yogi Tea Abend",
    type: "tea",
    description:
      "Ein bewusstes Abendritual mit einer Tasse Tee kann dabei helfen, den Feierabend neu zu gestalten und alte Gewohnheiten zu ersetzen.",
    url: "https://amzn.to/3SsmkGt",
  },

  blanket: {
    id: "blanket",
    title: "Gewichtsdecke",
    type: "sleep",
    description:
      "Viele Menschen empfinden eine Gewichtsdecke als angenehm, um abends leichter zur Ruhe zu kommen und entspannter einzuschlafen.",
    url: "https://amzn.to/4xIOJrT",
  },

  sleepmask: {
    id: "sleepmask",
    title: "Schlafmaske",
    type: "sleep",
    description:
      "Ein dunkler Schlafraum kann die Schlafqualität verbessern und dabei helfen, feste Abendroutinen zu entwickeln.",
    url: "https://amzn.to/4wdaf6L",
  },

  mug: {
    id: "mug",
    title: "Thermobecher",
    type: "drink",
    description:
      "Ein hochwertiger Thermobecher macht Tee oder Kaffee zum festen Begleiter und unterstützt neue, alkoholfreie Alltagsrituale.",
    url: "https://amzn.to/4ev6AuT",
  },

  puzzle: {
    id: "puzzle",
    title: "Puzzle",
    type: "activity",
    description:
      "Eine sinnvolle Beschäftigung kann helfen, Suchtdruck zu überbrücken und den Fokus auf etwas Positives zu lenken.",
    url: "https://amzn.to/4gFay5A",
  },

  coloring: {
    id: "coloring",
    title: "Malbuch für Erwachsene",
    type: "creative",
    description:
      "Kreative Beschäftigung kann entspannen, den Kopf freimachen und den Moment bewusster erleben lassen.",
    url: "https://amzn.to/4uS1fCZ",
  },

  diffuser: {
    id: "diffuser",
    title: "Aromadiffusor",
    type: "relax",
    description:
      "Ein angenehmer Duft kann dabei helfen, den Feierabend bewusst neu zu gestalten und eine ruhige Atmosphäre zu schaffen.",
    url: "https://amzn.to/4uShpvV",
  },

  tracker: {
    id: "tracker",
    title: "Habit Tracker",
    type: "tracker",
    description:
      "Neue Gewohnheiten entstehen leichter, wenn Fortschritte sichtbar werden und kleine Erfolge regelmäßig festgehalten werden.",
    url: "https://amzn.to/4uS1yh7",
  },

} satisfies Record<string, Product>;

export type ProductKey = keyof typeof products;