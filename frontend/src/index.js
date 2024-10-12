document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('pokemon-form');
    const pokemonInfoSection = document.getElementById('pokemon-info');
    const errorMessage = document.getElementById('error-message');
    const pokemonNameEl = document.getElementById('pokemon-name');
    const pokemonImageEl = document.getElementById('pokemon-image');
    const pokemonTypeEl = document.getElementById('pokemon-type');
    const pokemonAbilitiesEl = document.getElementById('pokemon-abilities');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const pokemonNumber = document.getElementById('pokemon-number').value;

        try {
            const response = await fetch(`http://localhost:3000/pokemon/${pokemonNumber}`);

            if (!response.ok) {
                throw new Error('Pokémon not found');
            }

            const pokemonData = await response.json();


            pokemonNameEl.textContent = pokemonData.name;
            pokemonImageEl.src = pokemonData.image;
            pokemonImageEl.alt = pokemonData.name;
            pokemonTypeEl.textContent = pokemonData.type.join(', ');
            pokemonAbilitiesEl.textContent = pokemonData.abilities.join(', ');


            pokemonInfoSection.style.display = 'block';
            errorMessage.style.display = 'none';

        } catch (error) {

            errorMessage.style.display = 'block';
            pokemonInfoSection.style.display = 'none';
        }
    });
});
