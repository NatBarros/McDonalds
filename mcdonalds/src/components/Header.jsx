import React from 'react'
import logo from "../assets/logo.png"
import celular from "../assets/celular.png"
import app from "../assets/app.png"
import * as S from "./Styled"


export default function Header() {
  return (
    <S.Header>
      <S.Logo>
        <a href=''><img src={logo} alt="logo do McDonald's"></img></a>
      </S.Logo>
      <S.App>
        <a href=''><img src={celular} alt="imagem de celular"></img>
        <p>Baixe o App</p></a>
      </S.App>
      <S.Mequi>
        <a href=''><S.Peca> Peça seu Méqui<img src={app} alt="imagem de celular"/></S.Peca></a>
      </S.Mequi>
    </S.Header>
  )
}
