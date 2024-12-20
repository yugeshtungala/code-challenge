// App.tsx
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPokemonList } from 'ui/src/pokemonSlice';
import List from 'ui/components/List';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
      .then(response => response.json())
      .then(data => dispatch(setPokemonList(data.results)));
  }, [dispatch]);

  return (

    <div>
      <h1>Pokémon List</h1>
      <List />
    </div>
    
  );
};

export default App;