import express, { req, res } from "express";
import cors from "cors";
import { pokemonList } from "./pokemonData";

const app = express();
const PORT = 3000;

app.use(cors());

// Endpoint to get a specific Pokémon by number
app.get("/pokemon/:number", (req, res) => {
  const number = parseInt(req.params.number);
  const pokemon = pokemonList.find((p) => p.number === number);
  if (pokemon) {
    res.json(pokemon);
  } else {
    res.status(404).json({ message: "Pokémon not found" });
  }
});

// Endpoint to get a random Pokémon
app.get("/pokemon/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * pokemonList.length);
  const randomPokemon = pokemonList[randomIndex];
  if (randomPokemon) {
    res.json(randomPokemon);
  } else {
    res.status(404).json({ message: "Pokémon not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
