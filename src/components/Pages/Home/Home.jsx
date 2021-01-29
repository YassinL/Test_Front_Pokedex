/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable promise/always-return */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable no-const-assign */
import React, { useEffect, useState, useMemo } from "react";
import { getPokemon, getAllPokemon } from "../../services/pokemon";
import CardPokemon from "../../organisms/CardPokemon/CardPokemon";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import "./Home.scss";

export default function Home() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const initialUrl = `https://pokeapi.co/api/v2/pokemon`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllPokemon(initialUrl);
      const pokemon = await loadingPokemon(response.results);
      setLoading(false);
    };

    fetchData();
  }, []);

  const loadingPokemon = async (data) => {
    const pokemons = await Promise.all(
      data.map(async (pokemon) => {
        const pokemonRecord = await getPokemon(pokemon);
        return pokemonRecord;
      })
    );
    setPokemonData(pokemons);
  };

  const [search, setSearch] = useState("");

  const pokemonfilter = useMemo(() => {
    if (!search) return pokemonData;
    return pokemonData.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(search.toLowerCase());
    });
  }, [search, pokemonData]);

  return (
    <>
      {loading ? (
        <h1 style={{ textAlign: "center" }}>Loading...</h1>
      ) : (
        <div className="home">
          <div className="home_searchBar">
            <SearchBar value={search} onChange={setSearch} />
          </div>
          <div className="home_card">
            {pokemonfilter.map((pokemon, i) => {
              return <CardPokemon key={i} pokemon={pokemon} />;
            })}
          </div>
        </div>
      )}
    </>
  );
}
