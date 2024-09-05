import { useEffect, useState } from "react";
import axios from "axios";

//? components
import { Loading } from "../globals/Loading";

//? icons

//? others
import { endpoints } from "../../assets/data";
import { NavLink } from "react-router-dom";

type Drink = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strImageAttribution: string;
  strInstructionsES: string;
  strInstructions: string;
  strIngredient1: string;
  strIngredient2: string;
};

export const Random = () => {
  const [inSearch, setInSearch] = useState<boolean>(false);
  const [randomCocktail, setRandomCocktail] = useState<Drink>();

  function getRandomCocktail() {
    setInSearch(true);

    return axios.get(endpoints.getRandomCocktail).then((resp) => {
      setTimeout(() => {
        setInSearch(false);

        setRandomCocktail(resp.data.drinks[0]);
      }, 500);
    });
  }

  useEffect(() => {
    getRandomCocktail();
  }, []);

  return (
    <section id="random" className="section random">
      <h2
        className="random__title neon-title --lite"
        onClick={() => getRandomCocktail()}
      >
        <span className="neon flicker">¿</span>
        <span className="neon blinker blinker_2">Un </span>
        <span className="neon blinker blinker_1">cocktel aleatorio?</span>
      </h2>

      {inSearch ? (
        <Loading show={true} />
      ) : (
        <>
          {randomCocktail && (
            <>
              <div className="cocktail card">
                <NavLink to={`/cocktail/${randomCocktail.idDrink}`}>
                  <span className="cocktail__image">
                    <img
                      title={`cocktail ${randomCocktail!.strDrink}`}
                      src={`${randomCocktail!.strDrinkThumb}/preview`}
                      alt={`${randomCocktail!.strDrink}`}
                    />
                    <p>
                      {randomCocktail!.strImageAttribution ||
                        "Autor desconocido"}
                    </p>
                  </span>

                  <span className="cocktail__data">
                    <h3 className="cocktail__title">
                      {randomCocktail.strDrink}
                    </h3>
                    <span className="cocktail__ingredients">
                      <button className="ingredient">
                        {randomCocktail.strIngredient1}
                      </button>
                      <button className="ingredient">
                        {randomCocktail.strIngredient2}
                      </button>
                    </span>
                    <p className="cocktail__description">
                      {randomCocktail.strInstructionsES
                        ? randomCocktail.strInstructionsES
                        : randomCocktail.strInstructions}
                    </p>
                  </span>
                </NavLink>
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
};
