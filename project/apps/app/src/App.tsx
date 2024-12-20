import  { useEffect, useState } from "react";
import List from "ui/components/List";


function App() {
  const [pokemons, setPokemons] = useState<any[]>([]);

  useEffect(() => {
    async function fetchPokemons() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await response.json();
      setPokemons(data.results);
    }

    fetchPokemons();
  }, []);

  return (
    <div>
      <h1>Pokémon List</h1>
      <List pokemons={pokemons} />
    </div>
  );
}

export default App;
