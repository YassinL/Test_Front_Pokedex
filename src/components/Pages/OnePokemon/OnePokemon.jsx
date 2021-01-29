import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import InfoPokemon from "../../organisms/Informations/InfoType/InfoType";
import InfoAbilities from "../../organisms/Informations/InfoAbilities/InfoAbilities";
import "./OnePokemon.scss";

export default function OnePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonImage, setPokemonImage] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    console.log("render");
    const fetchData = async () => {
      const result = await Axios(`https://pokeapi.co/api/v2/pokemon/${id}`);

      setPokemon(result.data);
      setPokemonImage(result.data.sprites);
    };

    fetchData();
  }, []);

  return (
    <div className="pokemon">
      <div className="pokemon_image">
        <img
          src={pokemonImage && pokemonImage.front_default}
          alt="images par défaut"
        />
      </div>
      <div className="pokemon_informations">
        <div className="pokemon_informations_name">
          <h2 style={{ textTransform: "capitalize" }}>{pokemon.name}</h2>
          <div>
            <h2>{pokemon.id}</h2>
          </div>
        </div>
        <div className="pokemon_informations_type">
          <InfoPokemon infoPokemon={pokemon} fallback="Loading..." />
        </div>
        <div className="pokemon_informations_body">
          <h4>height : 0,{pokemon.height} m</h4>
          <h4>weight : {pokemon.weight} kg</h4>
        </div>
        <div className="pokemon_informations_capacities">
          <InfoAbilities infoPokemon={pokemon} fallback="Loading..." />
        </div>
      </div>
    </div>
  );
}
