/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import React from "react";
import { HashLink } from "react-router-hash-link";
import "./CardPokemon.scss";

export default function CardPokemon({ pokemon }) {
  return (
    <>
      <HashLink to={`/pokemon/${pokemon.id}/#`}>
        <div className="card">
          <img
            className="card_illustration"
            src={pokemon.sprites.front_default}
            alt="images par défaut"
          />
          <div className="card_informations">
            <div>
              <h2
                className="card_informations_name"
                style={{ textTransform: "capitalize" }}
              >
                {pokemon.name}
              </h2>
              <div className="card_informations_types">
                {pokemon.types.map((type) => {
                  return (
                    <div className="card_informations_types_type">
                      {type.type.name}
                    </div>
                  );
                })}
              </div>
            </div>
            <h2 className="card_informations_id">{pokemon.id}</h2>
          </div>
        </div>
      </HashLink>
    </>
  );
}
