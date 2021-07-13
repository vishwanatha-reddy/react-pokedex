import React from 'react'
import PokemonCards from './core-components/PokemonCards';
import CompareTable from './core-components/CompareTable';
const Pokemon = (props) => {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-5 offset-2">
                    <div>
                        <h1>Compare Pokemons</h1>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12 shadow-lg">
                    <PokemonCards/>
                </div>
            </div>
        </div>
    )
}

export default Pokemon
