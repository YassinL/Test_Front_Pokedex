import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import "./OnePokemon.scss";
// import Capacities from "../../atoms/inputs/Capacities/Capacities";

export default function OnePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    console.log("render");
    const fetchData = async () => {
      const result = await Axios(`https://pokeapi.co/api/v2/pokemon/${id}`);

      setPokemon(result.data);
    };

    fetchData();
  }, []);

  console.log("OnePokemon POKEMON", pokemon);

  //   return <div>{pokemon.name}</div>;
  return (
    <div className="pokemon">
      <div className="pokemon_image">
        <img
          // src={pokemon.sprites.front_default}
          alt="images par défaut"
        />
      </div>
      <div className="pokemon_informations">
        <h2>{pokemon.name}</h2>
        <div>
          {/* {pokemon.types.map((type) => {
              return <div>{type.type.name}</div>;
            })} */}
        </div>
        <h2>{pokemon.id}</h2>
      </div>
      <div className="pokemon_body">
        <h4>{pokemon.height}</h4>
        <h4>{pokemon.weight}</h4>
      </div>
      <div className="pokemon_capacities">
        {/* <Capacities pokemon={pokemon} /> */}
      </div>
    </div>
  );
}
