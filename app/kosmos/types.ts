export interface Theme {

  id: string;

  title: string;

  description: string;

  situationen: string[];

  emotionen: string[];

  suchbegriffe: string[];

  relations: string[];

  gedanke: {
    title: string;
    text: string;
  };

  gefuehl: {
    title: string;
    text: string;
  };

  verstehen: {
    title: string;
    text: string;
  };

  wissen: {
    title: string;
    text: string;
  };

  marcus: {
    title: string;
    text: string;
  };

  faq: string[];

  lexikon: string[];

  blog: string[];

  buch: string[];

  app: string[];

  weitergehen: string[];

}