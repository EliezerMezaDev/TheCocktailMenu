import { useEffect, useState } from "react";
import axios from "axios";

//? components
import { Loading } from "../globals/Loading";
import { NotFound } from "../globals/NotFound";

//? icons
import { FaSearch } from "react-icons/fa";

//? others
import { endpoints } from "../../assets/data";

export const Cocktails = () => {
  const [inSearch, setInSearch] = useState<boolean>(false);
  const [searched, setSearched] = useState<boolean>(false);

  const [ingredients, setIngredients] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [glasses, setGlasses] = useState<string[]>([]);

  const [currentIngredient, setCurrentIngredient] = useState<string>('Vodka');
  const [currentCategory, setCurrentCategory] = useState<string>('');
  const [currentGlass, setCurrentGlass] = useState<string>('');

  const [cocktails, setCocktails] = useState<any[]>([]);

  function getAllData() {
    axios
      .all([
        axios.get(endpoints.getAllCategories),
        axios.get(endpoints.getAllGlasses),
        axios.get(endpoints.getAllIngredients),
      ])
      .then(
        axios.spread((...resp) => {
          const [respAllCategories, respAllGlasses, respAllIngredients] = resp;

          setCategories(
            respAllCategories.data.drinks.map(
              (c: { strCategory: string }) => c.strCategory
            )
          );
          setGlasses(
            respAllGlasses.data.drinks.map(
              (g: { strGlass: string }) => g.strGlass
            )
          );
          setIngredients(
            respAllIngredients.data.drinks.map(
              (i: { strIngredient1: string }) => i.strIngredient1
            )
          );
        })
      );
  }

  function getCocktailByFilter() {
    console.log(`<>>> asdasd <>>>`, );

    setCocktails([]);
    setInSearch(true);

    let url = endpoints.getCocktailsByFilter;

    if (currentIngredient !== "") url = `${url}i=${currentIngredient}`;
    if (currentCategory !== "") url = `${url}c=${currentCategory}`;
    if (currentGlass !== "") url = `${url}g=${currentGlass}`;

    console.log(`<>>> url <>>>`, url);

    return axios.get(url).then((resp: { data: { drinks: any[] } }) => {
      setSearched(true);
      setInSearch(false);

      if (!resp.data || resp.data.drinks.length === 0) return;

      setCocktails(resp.data.drinks.slice(0, 16));
    });
  }

  const handleFilter = (from: "category" | "ingredient" | "glass", e: any) => {
    setCurrentIngredient("");
    setCurrentCategory("");
    setCurrentGlass("");

    switch (from) {
      case "ingredient":
        setCurrentIngredient(e.target.value);

        break;

      case "category":
        setCurrentCategory(e.target.value);

        break;

      case "glass":
        setCurrentGlass(e.target.value);

        break;
    }
  };

  useEffect(() => {
    setCurrentIngredient("Vodka");
    setCurrentCategory("");
    setCurrentGlass("");

    getCocktailByFilter();
    getAllData();
  }, [0]);

  return (
    <section id="cocktails" className="section cocktails">
      <h2 className="cocktails__title neon-title --lite">
        <span className="neon flicker">¿</span>
        <span className="neon blinker blinker_2">Algo en </span>
        <span className="neon flicker">especifico?</span>
      </h2>

      <span className="filters">
        <span className="filter">
          Ingrediente:
          {ingredients.length > 0 && (
            <span className="inputWrapper">
              <select
                className="input select"
                value={currentIngredient}
                onChange={(e) => handleFilter("ingredient", e)}
              >
                <option key={`00`} value="">
                  ...
                </option>
                {ingredients.map((c: string, index) => {
                  return (
                    <option key={`ingredients_${index}`} value={c}>
                      {c}
                    </option>
                  );
                })}
              </select>
            </span>
          )}
        </span>

        <span className="filter">
          Categoria:
          {categories.length > 0 && (
            <span className="inputWrapper">
              <select
                className="input select"
                value={currentCategory}
                onChange={(e) => handleFilter("category", e)}
              >
                <option key={`00`} value="">
                  ...
                </option>
                {categories.map((c: string, index) => {
                  return (
                    <option key={`categories_${index}`} value={c}>
                      {c}
                    </option>
                  );
                })}
              </select>
            </span>
          )}
        </span>

        <span className="filter">
          Vasos:
          {glasses.length > 0 && (
            <span className="inputWrapper">
              <select
                className="input select"
                value={currentGlass}
                onChange={(e) => handleFilter("glass", e)}
              >
                <option key={`00`} value="">
                  ...
                </option>
                {glasses.map((c: string, index) => {
                  return (
                    <option key={`glasses_${index}`} value={c}>
                      {c}
                    </option>
                  );
                })}
              </select>
            </span>
          )}
        </span>

        <span className="filter button">
          <button onClick={() => getCocktailByFilter()}>
            buscar <FaSearch />
          </button>
        </span>
      </span>

      {inSearch ? (
        <Loading show={true} />
      ) : (
        <>
          {cocktails.length > 0 && searched ? (
            <div className="cocktails__wrapper">
              {cocktails &&
                cocktails.map(
                  (
                    c: {
                      idDrink: string;
                      strDrink: string;
                      strDrinkThumb: string;
                    },
                    index
                  ) => {
                    return (
                      <article key={`cocktail_${index}`} className="cocktail">
                        <span className="cocktail__image">
                          <img
                            title={`cocktail ${c.strDrink}`}
                            src={c.strDrinkThumb}
                            alt={`${c.strDrink}`}
                          />
                          <p>{""}</p>
                        </span>
                        <span className="cocktail__data">
                          <h3 className="cocktail__title">{c.strDrink}</h3>
                        </span>
                      </article>
                    );
                  }
                )}
            </div>
          ) : (
            <NotFound
              show={cocktails.length === 0 && searched}
              message="No se ha encontrado ningun coctel que coincida con su busqueda."
            />
          )}
        </>
      )}
    </section>
  );
};
