import React from 'react';

interface ListProps {
  pokemons: { name: string }[];
}

const List: React.FC<ListProps> = ({ pokemons }) => {
  return (
    <div className="pokemon-list">
      {pokemons.map((pokemon, index) => (
        <div key={index} className="pokemon-item">
          {pokemon.name}
        </div>
      ))}
    </div>
  );
};

export default List;
