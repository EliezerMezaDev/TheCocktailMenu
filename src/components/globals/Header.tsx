import { HashLink } from "react-router-hash-link";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper container">
        <nav className="navbar">
          <ul className="navbar__wrapper">
            <li>
              <HashLink to={`/#home`} title={"nav_home"}>
                <button className="navbar__item">Inicio</button>
              </HashLink>
            </li>

            <li title={"nav_cocktails"}>
              <HashLink to={`/#cocktails`}>
                <button className="navbar__item">Cocteles</button>
              </HashLink>
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
