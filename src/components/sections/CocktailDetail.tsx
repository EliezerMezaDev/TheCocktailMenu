import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

//? others
import { endpoints } from "../../assets/data";
import { Loading } from "../globals/Loading";
import { getIngredientsAndMeasures } from "../../utils/functions";

export const CocktailDetail = () => {
  const { id } = useParams();

  const [cocktail, setCocktail] = useState<any>();
  const [inSearch, setInSearch] = useState<boolean>(false);

  function getCocktail() {
    setInSearch(true);

    return axios.get(`${endpoints.getOneCocktail}${id}`).then((resp) => {
      setTimeout(() => {
        setInSearch(false);

        let cocktail = resp.data.drinks[0];

        cocktail["ingredients"] = getIngredientsAndMeasures(
          cocktail
        ).ingredients.map((i: string) => {
          return {
            ingredientName: i,
            ingredientImage: `https://www.thecocktaildb.com/images/ingredients/${i}-Small.png`,
          };
        });

        cocktail["measures"] = getIngredientsAndMeasures(cocktail).measures;

        console.log(`<>>> cocktail <>>>`, cocktail);

        setCocktail(cocktail);
      }, 500);
    });
  }

  useEffect(() => {
    getCocktail();
  }, []);

  return (
    <section id="cocktailDetail" className="section cocktailDetail">
      {inSearch ? (
        <Loading show={true} />
      ) : (
        <>
          {cocktail && (
            <>
              <div className="cocktail card">
                <span className="cocktail__image">
                  <img
                    title={`cocktail ${cocktail!.strDrink}`}
                    src={cocktail!.strDrinkThumb}
                    alt={`${cocktail!.strDrink}`}
                  />
                  <p>{cocktail!.strImageAttribution || "Autor desconocido"}</p>
                </span>

                <span className="cocktail__data">
                  <h3 className="cocktail__title">{cocktail.strDrink}</h3>

                  <span className="badges">
                    <span className="badges__item">{cocktail.strCategory}</span>
                    <span className="badges__item">
                      {cocktail.strAlcoholic}
                    </span>
                  </span>

                  <span className="cocktail__sec description">
                    <h4>Preparacion: </h4>

                    <p>
                      {cocktail.strInstructionsES
                        ? cocktail.strInstructionsES
                        : cocktail.strInstructions}
                    </p>
                  </span>

                  <span className="cocktail__sec ingredients">
                    <h4>Ingredientes: </h4>

                    <ul className="ingredients__list">
                      {cocktail.ingredients.length > 0 &&
                        cocktail.ingredients.map((i: any, index: number) => {
                          return (
                            <li
                              key={`ingredient_${index}`}
                              className="ingredient"
                            >
                              {i.ingredientName}

                              <img
                                src={i.ingredientImage}
                                alt={i.ingredientName}
                              />
                            </li>
                          );
                        })}
                    </ul>
                  </span>

                  <span className="cocktail__sec measures">
                    <h4>Medidas: </h4>

                    <ul className="measures__list">
                      {cocktail.measures.length > 0 &&
                        cocktail.measures.map((m: any, index: number) => {
                          return (
                            <li key={`measure_${index}`} className="measure">
                              {m}
                            </li>
                          );
                        })}
                    </ul>
                  </span>
                </span>
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
};
