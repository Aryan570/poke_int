"use client"
import React, { useState, useEffect } from "react";
import {PokemonCard} from "./PokemonCard";

interface Pokemon {
  id: number;
  name: string;
  type: string;
  sprite: string;
  values : number[];
}
const arr = ["electric", "fire", "water", "geo"];
export const PokedexGrid: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * 20}&limit=20`);
      const data = await response.json();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const formattedData = data.results.map((pokemon: any, index: number) => ({
        id: index + 1 + (page - 1) * 20,
        name: pokemon.name,
        type: arr[Math.floor(Math.random() * arr.length)],
        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1 + (page - 1) * 20}.png`,
        values : [Math.floor(Math.random() * 100),Math.floor(Math.random() * 100),Math.floor(Math.random() * 100),Math.floor(Math.random() * 100),Math.floor(Math.random() * 100)],
      }));
      setPokemonList((prev) => [...prev, ...formattedData]);
      setLoading(false);
    };

    fetchPokemon();
  }, [page]);

  const filteredList = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );
  // if(loading) return <Loading/>;
  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search Pokémon"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-3 py-2 mb-4 border rounded"
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredList.map((pokemon) => (
          <PokemonCard key={pokemon.id} {...pokemon} />
        ))}
      </div>
      {loading && <p>Loading...</p>}
      <div className="flex justify-center items-center">
      <button
        onClick={() => setPage((prev) => prev + 1)}
        className="px-4 py-2 mt-4 text-white bg-red-400 rounded hover:bg-red-600"
      >
        Load More
      </button>
      </div>
    </div>
  );
};
