import { OptImg } from "../globals/OptImg";

//? icons
import { LiaCocktailSolid } from "react-icons/lia";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <article className="hero__data">
          <p className="hero__data__title">
            <span className="neon flicker">¿</span>
            <span className="neon blinker blinker_1">Tienes </span>
            <span className="neon blinker blinker_2">sed</span>
            <span className="neon flicker">?</span>
          </p>

          <span className="hero__data__desc">
            <p>
              Existen cientos de maravillosas y deliciosas combinaciones de tus
              bebidas alcoholicas favoritas que seguro aun no conoces.
            </p>

            <p className="main">
              ¿No te interesa encontrar el que mas se adapte a tus gustos?
            </p>
          </span>

          <span className="actions">
            <button className="actions__btn">Explorar</button>
            <button className="actions__btn main">
              Buscar un coctel <LiaCocktailSolid className="icon" />{" "}
            </button>
          </span>
        </article>
      </div>
    </section>
  );
};
