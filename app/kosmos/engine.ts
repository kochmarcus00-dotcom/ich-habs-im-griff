import { Theme } from "./types";
import schlaf from "./themes/schlaf.json";

const themes: Theme[] = [schlaf];

function findTheme(query: string): Theme | undefined {

  const input = query.toLowerCase();

  return themes.find(theme => {

    const words = [

      ...theme.situationen,

      ...theme.suchbegriffe,

      ...theme.emotionen

    ];

    return words.some(word =>
      input.includes(word.toLowerCase())
    );

  });

}

export function getOrientation(query: string) {

  const theme = findTheme(query);

  if (!theme) return null;

  return {

    theme,

    gedanke: theme.gedanke,

    gefuehl: theme.gefuehl,

    verstehen: theme.verstehen,

    wissen: theme.wissen,

    marcus: theme.marcus,

    faq: theme.faq,

    lexikon: theme.lexikon,

    blog: theme.blog,

    buch: theme.buch,

    app: theme.app,

    weitergehen: theme.weitergehen

  };

}

export function getTheme(id: string): Theme | undefined {

  return themes.find(theme => theme.id === id);

}