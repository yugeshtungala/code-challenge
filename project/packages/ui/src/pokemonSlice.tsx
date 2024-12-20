import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Pokemon {
  name: string;
}

interface PokemonState {
  pokemonList: Pokemon[];
}

const initialState: PokemonState = {
  pokemonList: [], 
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemonList: (state, action: PayloadAction<Pokemon[]>) => {
      state.pokemonList = action.payload;
    },
    removePokemon: (state, action: PayloadAction<string>) => {
      state.pokemonList = state.pokemonList.filter(pokemon => pokemon.name !== action.payload);
    },
  },
});

export const { setPokemonList, removePokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
