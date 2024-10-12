import express, { Request, Response } from 'express';
import cors from 'cors';
import { pokemonList } from './pokemonData';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());


app.get('/pokemon/:number', (req: Request, res: Response) => {
    const pokemonNumber = parseInt(req.params.number, 10);


    const pokemon = pokemonList.find(p => p.number === pokemonNumber);

    if (pokemon) {
        res.status(200).json(pokemon);
    } else {
        res.status(404).json({ error: 'Pokémon not found' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
