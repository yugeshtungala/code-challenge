import React, { useEffect, useState } from "react";

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
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

// Question 1: "How did you manage to fetch the list and what tool did you use?"
// We used the fetch API to make a network request to the Pokémon API (https://pokeapi.co/api/v2/pokemon). It returns a list of Pokémon, which is stored in the component's state.

// Question 2: "What steps would you take to future improve this?"
// To improve this, you could:
// Use axios for better error handling and flexibility.
// Add loading and error states to handle network issues gracefully.
// Consider pagination for handling large datasets from the API.
