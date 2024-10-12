# Weekend-Project-PokéNetor
![BPP](https://github.com/user-attachments/assets/d1744c47-b542-4ef1-a4b8-3e66940693ee)
PokéNetor
A simple web application that allows users to view Pokémon details by their number and randomly select a Pokémon to display. This project utilizes an API to fetch Pokémon data.

Features
Search for a Pokémon by entering its number.
Randomly select a Pokémon to display its details.
Displays Pokémon name, image, types, and abilities.
Technologies Used
HTML: Structure of the web page.
JavaScript: Handling API requests and dynamic content rendering.
Node.js: Backend server (assumed, based on the API endpoint structure).

Usage

Enter a Pokémon number in the input field and press "Submit" to view its details.
Click the "Randomize Pokémon" button to fetch and display a random Pokémon's details.
API Endpoints
GET /pokemon/:number: Fetches Pokémon data by its number.
GET /pokemon/random: Fetches a random Pokémon.
Example Response
When fetching a Pokémon by number, the expected JSON response structure is as follows:

json
{
    "number": 25,
    "name": "Pikachu",
    "image": "https://pokeapi.co/media/sprites/pokemon/25.png",
    "type": ["Electric"],
    "abilities": ["Static", "Lightning Rod"]
}

Acknowledgements
Pokémon API for providing the Pokémon data.
