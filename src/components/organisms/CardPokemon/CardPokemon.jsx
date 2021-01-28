/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import React from "react";
import "./CardPokemon.scss";
// import PreviewImages from "../../atoms/SVG/PreviewImages";

export default function CardPokemon({ pokemon }) {
  return (
    <div className="card">
      <img
        className="card_illustration"
        src={pokemon.sprites.front_default}
        alt="images par défaut"
      />
      <div className="card_informations">
        <div>
          <h2 className="card_informations_name">{pokemon.name}</h2>
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
  );
}
