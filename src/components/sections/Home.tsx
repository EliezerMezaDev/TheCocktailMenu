import { useNavigate } from "react-router-dom";

//? icons
import { LiaCocktailSolid } from "react-icons/lia";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="hero">
      <div className="hero__wrapper">
        <article className="hero__data">
          <h1 className="hero__data__title neon-title">
            <span className="neon flicker">¿</span>
            <span className="neon blinker blinker_1">Tienes </span>
            <span className="neon blinker blinker_2">sed</span>
            <span className="neon flicker">?</span>
          </h1>

          <span className="hero__data__desc">
            <p>
              Existen cientos de maravillosas y deliciosas combinaciones de tus
              bebidas alcoholicas favoritas que seguro aun no conoces.
            </p>

            <p className="main">
              ¿Te interesa encontrar el que mas se adapte a tus gustos?
            </p>
          </span>

          <span className="actions">
            <button
              className="actions__btn button"
              onClick={() => navigate("/search", { replace: true })}
            >
              Explorar
            </button>

            <button
              className="actions__btn button --main"
              onClick={() => navigate("/cocktail", { replace: true })}
            >
              Buscar un coctel <LiaCocktailSolid className="icon" />
            </button>
          </span>
        </article>
      </div>
    </section>
  );
};
