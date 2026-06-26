export interface Thought {
  id: string;
  slug: string;

  title: string;
  description: string;

  priority: number;

  emotion:
    | "hope"
    | "fear"
    | "craving"
    | "shame"
    | "loneliness"
    | "motivation"
    | "health"
    | "family";

  feelings: string[];
  thoughts: string[];
  synonyms: string[];
  keywords: string[];

  articles: string[];
  lexicon: string[];
  faq: string[];

  relatedThoughts: string[];

  icon: string;
  color: string;

  quote?: string;
}

export const thoughts: Thought[] = [
  {
    id: "thinking-about-alcohol",

    slug: "ich-denke-staendig-an-alkohol",

    title: "Ich denke ständig an Alkohol.",

    description:
      "Gedanken rund um Suchtdruck, Verlangen und den Wunsch zu trinken.",

    priority: 100,

    emotion: "craving",

    feelings: [
      "Unruhe",
      "Verlangen",
      "Frustration"
    ],

    thoughts: [
      "Ich denke ständig an Alkohol.",
      "Ich bekomme den Gedanken nicht aus dem Kopf.",
      "Ich würde jetzt am liebsten trinken.",
      "Ich habe ständig Lust auf Alkohol.",
      "Ich halte den Suchtdruck kaum aus."
    ],

    synonyms: [
      "Ich will trinken.",
      "Ich brauche Alkohol.",
      "Ich habe Suchtdruck.",
      "Ich denke nur noch ans Trinken."
    ],

    keywords: [
      "Craving",
      "Suchtdruck",
      "Verlangen",
      "Trigger"
    ],

    articles: [
      "craving-verstehen"
    ],

    lexicon: [
      "craving"
    ],

    faq: [
      "warum-denke-ich-staendig-an-alkohol"
    ],

    relatedThoughts: [
      "cant-sleep",
      "want-to-be-free"
    ],

    icon: "wine",

    color: "orange",

    quote:
      "Verlangen ist kein Befehl. Es ist ein Gedanke, der wieder gehen darf."
  }
];