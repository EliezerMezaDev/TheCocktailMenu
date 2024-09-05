import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper container">
        <nav className="navbar">
          <ul className="navbar__wrapper">
            <li>
              <NavLink to={`/`} title={"nav_home"}>
                <button className="navbar__item">Inicio</button>
              </NavLink>
            </li>

            <li title={"nav_cocktails"}>
              <NavLink to={`/search`}>
                <button className="navbar__item">Cocteles</button>
              </NavLink>
            </li>

            <li title={"nav_github"}>
              <a
                href={`https://github.com/EliezerMezaDev/TheCocktailMenu`}
                title="about"
              >
                <button className="navbar__item">Acerca de</button>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
