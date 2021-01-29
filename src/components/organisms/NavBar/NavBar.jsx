/* eslint-disable react/self-closing-comp */
import React from "react";
import { HashLink } from "react-router-hash-link";
import PokemonLogo from "../../assets/images/Pokemon.png";
import "./NavBar.scss";

export default function Header() {
  return (
    <div className="navBar">
      <HashLink to="/">
        <img src={PokemonLogo} alt="Logo Pokemon" />
      </HashLink>
    </div>
  );
}
