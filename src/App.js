import './App.css';
import {useState, useEffect} from 'react';
import getPokemons from "./services/getPokemons";
import getPokemon from "./services/getPokemon"
import PokemonList from "../src/components/Pokemon/PokemonList"


function App() {
    const [pokemonCount, setPokemon] = useState([]);
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=12'

    useEffect(() => {
        async function pokemon() {
            let res = await getPokemons(url);
            await downloadPokemon(res.results);
            // console.log(res);
        }

        pokemon();

    }, [])

    const downloadPokemon = async data => {
        let _pokemonCount = await Promise.all(data.map(async pokemon => {
                let recording = await getPokemon(pokemon.url);
                return recording;
            })
        )

        setPokemon(_pokemonCount)
    }
    console.log(pokemonCount);

    return (
        <div>
            <div className='Pokedex'>
                <h1 className='title'>
                    Pokedex
                </h1>
            </div>
            <div className='Pokemon'>
                {pokemonCount.map((pokemon, i) => {
                    return <PokemonList key={i} pokemon={pokemon}/>
                })}
            </div>
            <div className='btn'>
                <button>Load More</button>
            </div>
        </div>
    )
}

export default App;