import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "ui/components/List";
import { setPokemons } from "ui/src/pokemonSlice";
import { RootState } from "ui/src/store";

function App() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state: RootState) => state.pokemons.list);

  useEffect(() => {
    async function fetchPokemons() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await response.json();
      dispatch(setPokemons(data.results));
    }

    fetchPokemons();
  }, [dispatch]);

  return (
    <div>
      <h1>Pokémon List</h1>
      <List pokemons={pokemons} />
    </div>
  );
}

export default App;
