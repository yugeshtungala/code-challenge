import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './feature/pokemonSlice';

const store = configureStore({
  reducer: {
    pokemons: pokemonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
