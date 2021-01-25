import React from "react";
import { mockPokemonData } from "../mock/pokeData";

function RenderPokeCard() {
  return (
    <div>
      <h1>{mockPokemonData.name} </h1>
      <img src={mockPokemonData.sprites.front_default} alt="normal"></img>
      <img src={mockPokemonData.sprites.front_shiny} alt="shiny"></img>
      <a href={mockPokemonData.video}>See video</a>
    </div>
  );
}

export default RenderPokeCard;
