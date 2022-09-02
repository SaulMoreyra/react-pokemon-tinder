import { average } from 'color.js';
import Color from "color";
import { ButtonHTMLAttributes, FC, useEffect, useState } from 'react';
import * as S from './Card.styled'
import { IStatus } from '../../../interfaces/IStatus';

export type CardProps = ButtonHTMLAttributes<HTMLDivElement> & {
  name: string;
  image: string;
  variant:  IStatus
};

const Card: FC<CardProps> = ({name, image, variant}) => {
  const [color, setColor] =useState("")

  useEffect(() => {
    if(!image) return;
    average(`${image}`).then((dominat) => {
      const cardColor: string = Color(dominat).hex();
      setColor(cardColor);
    });
  }, [image]);

  if(!color) return <S.BaseCard/>

  return (
    <S.Card color={color} variant={variant}>
      <img src={image} alt={name}/>
    </S.Card>
  )
}

export default Card