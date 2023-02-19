import axios from "axios";
import React, { lazy, Suspense, useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import { POKEMON_API_URL, IMAGE_URL } from "../config";
import "./Pokedex.css";

const PokemonCard = lazy(() => import("../components/PokemonCard"));

function zeroCount(i) {
  if (i > 9 && i <= 99) {
    return "0";
  } else {
    if (i > 99) return "";
  }
  return "00";
}

function Pokedex() {
  const [pokemonData, setPokemonData] = useState([]);
  useEffect(() => {
    axios.get(POKEMON_API_URL + "?limit=108").then((response) => {
      if (response.status >= 200 && response.status < 300) {
        const { results } = response.data;
        let newPokeData = [];
        let zero = "00";
        results.forEach((pokemon, i) => {
          i++;
          zero = zeroCount(i);
          let pokeObj = {
            id: i,
            url: IMAGE_URL + zero + i + ".png",
            name: pokemon.name,
          };
          newPokeData.push(pokeObj);
        });

        setPokemonData(newPokeData);
      }
    });
  }, []);

  return (
    <div>
      {pokemonData ? (
        <div className="content">
          <SearchBar/>
          <div className="grid">
            {pokemonData.map((pokemon) => (
              <div className="grid-item" key={pokemon.id}>
                <Suspense fallback={<h1>Loading...</h1>}>
                  <PokemonCard pokemon={pokemon} image={pokemon.url} />
                </Suspense>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <h1>{"Loading"}</h1>
      )}
    </div>
  );
}

export default Pokedex;
