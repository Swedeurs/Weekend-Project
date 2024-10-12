const form = document.getElementById("pokemon-form");
const pokemonInfo = document.getElementById("pokemon-info");
const pokemonName = document.getElementById("pokemon-name");
const pokemonImage = document.getElementById("pokemon-image");
const pokemonType = document.getElementById("pokemon-type");
const pokemonAbilities = document.getElementById("pokemon-abilities");
const errorMessage = document.getElementById("error-message");

// Form submission event listener
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const pokemonNumber = parseInt(
    document.getElementById("pokemon-number").value
  );
  displayPokemon(pokemonNumber);
});

// Function to display Pokémon
async function displayPokemon(number) {
  try {
    const response = await fetch(`http://localhost:3000/pokemon/${number}`);
    const pokemon = await response.json();

    if (response.ok) {
      pokemonName.textContent = pokemon.name;
      pokemonImage.src = pokemon.image;
      pokemonType.textContent = pokemon.type.join(", ");
      pokemonAbilities.textContent = pokemon.abilities.join(", ");
      pokemonInfo.style.display = "block";
      errorMessage.style.display = "none";
    } else {
      throw new Error(pokemon.message);
    }
  } catch (error) {
    errorMessage.textContent = error.message;
    errorMessage.style.display = "block";
    pokemonInfo.style.display = "none";
  }
}

// Randomize button event listener
const randomizeButton = document.getElementById("randomize-button");
randomizeButton.addEventListener("click", async () => {
  try {
    const response = await fetch(`http://localhost:3000/pokemon/random`);
    if (response.ok) {
      const randomPokemon = await response.json();
      displayPokemon(randomPokemon.number); // Display the randomly selected Pokémon
    } else {
      throw new Error("Failed to fetch random Pokémon");
    }
  } catch (error) {
    errorMessage.textContent = error.message;
    errorMessage.style.display = "block";
    pokemonInfo.style.display = "none";
  }
});
