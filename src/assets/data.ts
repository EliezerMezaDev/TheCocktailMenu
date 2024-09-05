import { Link } from "../interfaces";

export const endpoints = {
  getAllCategories:
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list",
  getAllGlasses: "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list",
  getAllIngredients:
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list",
  getAllAlcholicFilters:
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list",

  getCocktailsByFilter:
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?",

  getRandomCocktail: "https://www.thecocktaildb.com/api/json/v1/1/random.php",

  getOneCocktail:
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=",
};

export const NAV_ITEMS: Link[] = [
  {
    url: "./#home",
    title: "home",
    label: "Inicio",
  },
  {
    url: "./#cocktails",
    title: "cocktails",
    label: "Cocteles",
  },
  {
    url: "https://github.com/EliezerMezaDev/TheCocktailMenu",
    title: "about",
    label: "Acerca de",
  },
];
