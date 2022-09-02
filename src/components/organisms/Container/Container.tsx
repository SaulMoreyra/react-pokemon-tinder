import React, { useCallback, useEffect, useRef, useState } from 'react'
import { COLORS } from '../../../theme'
import { getImage } from '../../../utils/Image'
import { getRandomNumber } from '../../../utils/Random'
import { Card, IconButton } from '../../atoms'
import { ExitIcon, HeadIcon, ThunderIcon } from '../../icons'
import * as PokemonApi from "../../../services/Pokemon";
import * as S from './Container.styled'
import { Pokemon } from '../../../interfaces/IPokemon'
import { IStatus } from '../../../interfaces/IStatus'


const Container = () => {
  const [status, setStatus] = useState<IStatus>("visible");
  const [id, setId] = useState(getRandomNumber(132));
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  
  const handleAccept = (status: IStatus)=> () => {
    setStatus(status)
    setTimeout(()=> {
      setStatus("invisible")
      setPokemon(null)
      setId(getRandomNumber(132))
    }, 500)
  }

  const handleCallPokemon = useCallback(
    async () => {
      if (!id) return;
      const data = await PokemonApi.get(id);
      setPokemon(data);
      setStatus("visible")
    },
    [id],
  )
  
  useEffect(() => {
    handleCallPokemon()
  }, [handleCallPokemon]);


  return (
    <S.Container>
      <Card image={pokemon?.id ? getImage(pokemon.id): ""} name={pokemon?.name || ""}  variant={status}/>
      <S.Buttons>
      <IconButton color={COLORS.basic.gray}>
        <ExitIcon fill={COLORS.yellow.main} height={32} width={32} onClick={handleAccept("reject")}/>
      </IconButton>
      <IconButton color={COLORS.blue.main}>
        <ThunderIcon fill={COLORS.basic.white} height={32} width={32} onClick={handleAccept("boost")} />
      </IconButton>
      <IconButton color={COLORS.basic.gray} >
        <HeadIcon fill={COLORS.pink.main} height={32} width={32} onClick={handleAccept("accept")} />
      </IconButton>
      </S.Buttons>
    </S.Container>
  )
}

export default Container