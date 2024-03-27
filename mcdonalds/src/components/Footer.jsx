import React from 'react'
import * as S from './Styled'
import logo from '../assets/logo.png'
import google from '../assets/google.png'
import apple from '../assets/apple.png'

export default function Footer() {
  return (
    <S.Footer>
      <S.Mc>
        <a href=''><img src={logo} alt="logo do McDonald's"></img></a>
        <p>© McDonald’s 2024</p>
      </S.Mc>
      <S.Download>
        <a href=''><img src={google} alt="logo do Google Play"></img></a>
        <a href=''><img src={apple} alt="logo do Apple Store"></img></a>
      </S.Download>
    </S.Footer>
  )
}
