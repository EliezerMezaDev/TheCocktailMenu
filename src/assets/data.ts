import { Link } from "../interfaces";

export const endpoints = {
  getAllCategories:
    "http://www.thecocktaildb.com/api/json/v1/1/list.php?c=list",
  getAllGlasses: "http://www.thecocktaildb.com/api/json/v1/1/list.php?g=list",
  getAllIngredients:
    "http://www.thecocktaildb.com/api/json/v1/1/list.php?i=list",
  getAllAlcholicFilters:
    "http://www.thecocktaildb.com/api/json/v1/1/list.php?a=list",
};

export const NAV_ITEMS: Link[] = [
  {
    url: "#home",
    title: "home",
    label: "Inicio",
  },
  {
    url: "#categories",
    title: "categories",
    label: "Categorias",
  },
  {
    url: "#ingredients",
    title: "ingredients",
    label: "Ingredientes",
  },
  {
    url: "#about",
    title: "about",
    label: "Acerca de",
  },
];
