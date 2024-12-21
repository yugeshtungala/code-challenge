import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'project/Redux/store';

import { removePokemon } from 'project/Redux/feature/pokemonSlice';

import './List.css'

interface Pokemon {
  name: string;
}

const List: React.FC = () => {
  const pokemonList = useSelector((state: RootState) => state.pokemons.pokemonList);

  const dispatch = useDispatch();

  const handleRemove = (pokemonName: string) => {
    dispatch(removePokemon(pokemonName));
  };

  return (
    <div>
      <ul>
        {pokemonList.map((pokemon: Pokemon, index: number) => (
          <li key={index}>
            {pokemon.name} <button onClick={() => handleRemove(pokemon.name)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
