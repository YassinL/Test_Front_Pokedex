/* eslint-disable react/prop-types */
import React from "react";

export default function InfoType({ infoPokemon, fallback }) {
  if (!infoPokemon || infoPokemon.length === 0) {
    return fallback;
  }
  return (
    <>
      {infoPokemon.types.map((type) => {
        return (
          <div className="infoType" key={type.type.name}>
            {type.type.name}
          </div>
        );
      })}
    </>
  );
}
