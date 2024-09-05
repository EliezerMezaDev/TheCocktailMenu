//? interfaces
import { Link } from "../../interfaces";

//? data
import { NAV_ITEMS } from "../../assets/data";
import { HashLink } from "react-router-hash-link";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper container">
        <nav className="navbar">
          <ul className="navbar__wrapper">
            {NAV_ITEMS &&
              NAV_ITEMS.map((item: Link, index: number) => {
                return (
                  <li key={index} title={item.title}>
                    <HashLink to={`${item.url}`}>
                      <button className="navbar__item">{item.label}</button>
                    </HashLink>
                  </li>
                );
              })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
