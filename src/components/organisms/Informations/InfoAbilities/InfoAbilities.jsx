/* eslint-disable react/prop-types */
import React from "react";
import "./InfoAbilities.scss";

export default function InfoType({ infoPokemon, fallback }) {
  if (!infoPokemon || infoPokemon.length === 0) {
    return fallback;
  }
  return (
    <>
      {infoPokemon.abilities.map((ability) => {
        return (
          <div
            style={{ textTransform: "capitalize" }}
            className="infoCard"
            key={ability.ability.name}
          >
            {ability.ability.name}
          </div>
        );
      })}
    </>
  );
}
