import PokeApi from "../api/PokeApi";
import { Pokemon } from "../interfaces/IPokemon";

export const get = async (id: number) => {
  const { data } = await PokeApi.get<Pokemon>(`/pokemon/${id}`);
  return data;
};
