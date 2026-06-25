import { products } from "./products";
import { articles } from "./articles";

type ProductKey = keyof typeof products;
type Article = (typeof articles)[keyof typeof articles];

export const blogConfig = {
    wenigerTrinken: {
        products: ["sigg", "notebook", "tea"],
    },

    tage30: {
        products: ["tracker", "tea", "sleepmask"],
    },

    alkoholabhaengig: {
        products: ["notebook", "tracker", "sigg"],
    },

    alkoholBeziehung: {
        products: ["notebook", "diffuser", "tea"],
    },

    alkoholSchlaf: {
        products: ["sleepmask", "blanket", "tea"],
    },

    alkoholAngst: {
        products: ["tea", "diffuser", "blanket"],
    },

    alkoholArbeit: {
        products: ["notebook", "tracker", "mug"],
    },

    rueckfall: {
        products: ["tracker", "notebook", "tea"],
    },

    funktionierenderAlkoholiker: {
        products: ["notebook", "tracker", "sigg"],
    },

    warnzeichen: {
        products: ["notebook", "tracker", "sigg"],
    },

    feierabendbier: {
        products: ["sigg", "mug", "tea"],
    },

    alkoholLangeweile: {
        products: ["puzzle", "coloring", "tracker"],
    },

    alkoholDepression: {
        products: ["tea", "blanket", "diffuser"],
    },

    alkoholEinsamkeit: {
        products: ["notebook", "diffuser", "tea"],
    },

    allesImGriff: {
        products: ["notebook", "tracker", "sigg"],
    },

    alkoholScham: {
        products: ["notebook", "diffuser", "tea"],
    },

    wochenende: {
        products: ["sigg", "mug", "tracker"],
    },

    kontrolliertesTrinken: {
        products: ["notebook", "tracker", "sigg"],
    },

    unsichtbar: {
        products: ["notebook", "tracker", "sigg"],
    },

    angstVorAufhoeren: {
        products: ["tea", "diffuser", "notebook"],
    },

    jederzeitAufhoeren: {
        products: ["notebook", "tracker", "sigg"],
    },

    heimlichTrinken: {
        products: ["notebook", "tracker", "diffuser"],
    },

    alkoholBelohnung: {
        products: ["mug", "tea", "diffuser"],
    },

    gewohnheit: {
        products: ["tracker", "sigg", "mug"],
    },

    keinAlkoholiker: {
        products: ["notebook", "tracker", "sigg"],
    },

    selbstbetrug: {
        products: ["notebook", "tracker", "sigg"],
    },

    erstesGlas: {
        products: ["notebook", "sigg", "mug"],
    },

    spaetEhrlich: {
        products: ["notebook", "tracker", "tea"],
    },

    alkoholStress: {
        products: ["diffuser", "tea", "blanket"],
    },

    jahrOhneAlkohol: {
        products: ["tracker", "notebook", "sigg"],
    },
} as const;