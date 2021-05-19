import React from 'react'
import './PokemonStyle.css'
import Color from '../../services/Color'


function PokemonList({pokemon}) {
    return (
        <div className='PokemonList'>
            <div className='image'>
                <img src={pokemon.sprites.front_default} alt=""/>
            </div>

            <div className='name'>
                {pokemon.name}
            </div>

            <div className='pokemon_types'>
                {pokemon.types.map(type => {
                    return (
                        <div className='pokemon-type' style={{backgroundColor: Color[type.type.name]}}>
                            {type.type.name}
                        </div>
                    )
                })}
            </div>

            <div className='info'>
                <div className='pokemon_info'>
                    <p className='pokemon_title'>Weight</p>
                    <p>{pokemon.weight}</p>
                </div>
            </div>


        </div>
    )
}
export default PokemonList;