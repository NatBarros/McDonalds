import React from 'react'
import bigmac from "../assets/bigmac.png"
import batata from "../assets/batata.webp"
import sorvete from "../assets/sorvete.png"
import mequinosofa from "../assets/mequinosofa.png"
import restaurante from "../assets/restaurante.png"
import banner from "../assets/banner.png"
import * as S from "./Styled"
import { useState } from "react";
import Card from './Card'


export default function Main() {

   const [item, setItem] = useState(bigmac)

  return (
    <S.Main>
      <S.Cima>
        <S.Escolhido>
          <img src={item} alt=""/>
        </S.Escolhido>
          <S.Title>BATEU AQUELA <span>#FOME </span>DE <span>MÉQUI</span>?</S.Title>
      </S.Cima>
        <S.Produtos>
          <S.Bigmac onClick={()=>{setItem(bigmac)}} src={bigmac} alt="imagem de hamburguer"/>
          <S.Batata onClick={()=>{setItem(batata)}} src={batata} alt="imagem de batata"/>
          <S.Sorvete onClick={()=>{setItem(sorvete)}} src={sorvete} alt="imagem de sorvete"/>
        </S.Produtos>
      <S.Final>
        <h2>Promoção</h2>
        <S.Imagens>
          <Card imagem={mequinosofa} texto={"Que tal um #MéquiNoSofá?"}/>
          <Card imagem={restaurante} texto={"Venha conhecer nossa nova loja!"}/>
          <Card imagem={banner} texto={"Confira as medidas que o Méqui adotou!"}/>
        </S.Imagens>
      </S.Final>
    </S.Main>

  )
}
