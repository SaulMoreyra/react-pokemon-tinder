import { useEffect, useState } from "react";
import { ExitIcon, HeadIcon, IconButton, ThunderIcon } from "./components";
import Container from "./components/organisms/Container";
import PokemonCard from "./components/organisms/PokemonCard/PokemonCard";
import { Pokemon } from "./interfaces/IPokemon";
import * as PokemonApi from "./services/Pokemon";
import { COLORS } from "./theme";
import { getRandomNumber } from "./utils/Random";

function App() {
  const [pokemon,setPokemon] = useState<Pokemon>();
  
  useEffect(() => {
    PokemonApi.get(getRandomNumber(130)).then(setPokemon)
  }, [])

  if(!pokemon) return null;

  return (
    <div>
     <Container/>
    </div>
  );
}

export default App;
