import React from "react";
import "./Reset.css";
import "./Vars.css";
import "./Header.css";
import "./Media-queries.css";

import smallRight from "../assets/icons/small-right.png";
import smallLeft from "../assets/icons/small-left.png";
import search from "../assets/icons/search.png";

const Header = ({ onChange }) => {
  return (
    <nav className="header__navigation">
      <div className="navigation">
        <button className="arrow-left">
          <img src={smallLeft} alt="" />
        </button>
        <button className="arrow-right">
          <img src={smallRight} alt="" />
        </button>
      </div>
      <div className="header__search">
        <img src={search} alt="" />
        <input
          id="search-input"
          maxLength="800"
          placeholder="O que você quer ouvir?"
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      <div className="header__login">
        <button className="premium">Premium</button>
        <button className="suport">Suporte</button>
        <button className="baixar">Baixar</button>
        <hr />
        <button className="subscribe">Inscreva-se</button>
        <button className="login">Entrar</button>
      </div>
    </nav>
  );
};
export default Header;
