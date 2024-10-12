const pokemonList = document.getElementById("fetch-pokemon") as HTMLInputElement;
const submitButton = document.getElementById("submit") as HTMLButtonElement;
const pokemonDisplay = document.getElementById("pokemon-display") as HTMLDivElement;

submitButton?addEventListener('click', async (e) => {
    e.preventDefault();

const pokemonNumber = pokemonInput.value;
if(!pokemonNumber){
    return ("Please provide a number.");
}

try {
    const response = await fetch("http://localhost:3000"), {
        method: "GET",
        headers: {
            "accept": "application/json"
        }
    });

    if(!response.ok) {
        throw new Error("Pokémon not found. Please enter a valid number.");
    }

    const pokemonData = await response.json();
});
