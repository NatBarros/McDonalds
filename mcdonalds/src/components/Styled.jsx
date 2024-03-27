import styled, { createGlobalStyle, css} from "styled-components";


export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: bordex-box;
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Roboto:wght@100;300&display=swap');
    font-family: 'Inter', sans-serif;
}
`;

const Center = css`
    display:flex;
    justify-content: center;
    align-items:center;
`;

const Hover = css`
    transition: transform 0.3s;
    &:hover {
        transform: scale(1.1);
    }
`

export const Header = styled.section`
    height: 15vh;
    ${Center}
`

export const Logo = styled.div`
    margin-right: 58%;
    width: 5vw;
`

export const App = styled.div`
    width: 10vw;
    margin-right: 4%;
    border-radius: 10px;
    p {
        width: 6vw;
        font-size: 13px;
    }
    a {
        ${Center}
        text-decoration: none;
        color: black;
    }
    &:hover {
        background-color: #DE121B;
    }
`

export const Mequi = styled.div`
    a {
        text-decoration: none;
        color: black;
    }
`
export const Peca = styled.button`
    ${Center}
    justify-content: space-evenly;
    background-color: #FFBC0D;
    width: 12.5vw;
    height: 7.3vh;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
    &:hover {
        background-color: #DE121B;
    }
`

export const Main = styled.section`
    background-color: #FFC72C;
    height: auto;
`

export const Cima = styled.section`
    display: flex;
    justify-content: space-between;
`

export const Escolhido = styled.div`
    width: 20vw;
    height: 45vh;
    margin: 3% 0 0 4%;
    img {
        width: 25vw;
        height: 45vh;
        margin-top: 0;
    }
`

export const Produtos = styled.figure`
    width: 60vw;
    height: 33vh;
    margin: 5% 20% 0 20%;
    ${Center}
    justify-content: space-evenly;
    cursor: pointer;
`

export const Bigmac = styled.img`
    width: 8vw;
    ${Hover}
`

export const Batata = styled.img`
    width: 6vw;
    ${Hover}
`

export const Sorvete = styled.img`
    width: 6vw;
    ${Hover}
`

export const Title = styled.h1`
    font-size: 4.5rem;
    font-weight: bold;
    font-weight: 800;
    color: white;
    width: 60vw;
    height: 35vh;
    margin: 10% 2% 0 0%;
    span {
        color:#DB0007
    }
`
export const Final = styled.section`
    background-color: #FEB706;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    h2 {
       font-size: 2.5rem;
        color: white;
        margin-top: 4%;
    }

`

export const Imagens = styled.div`
    ${Center}
    justify-content: space-evenly;
    margin-top: 5%;
    width: 90vw;
    
`
export const Card = styled.div`
    background-color: white;
    width: 22vw;
    height: 50vh;
    border-radius: 20px;
    text-align: center;
    ${Center}
    flex-direction: column;
    justify-content: space-around;
    transition: transform 0.3s;
    &:hover {
        transform: scale(1.1);
    }
    img {
        margin-top: -8%;  
    } 
`


export const BotaoCard = styled.button`
     border-radius: 10px;
        background-color: #FFBC0D;
        height: 7vh;
        width: 13vw;
        font-size: 17px;
        font-weight: bold;
        border: none;
        cursor: pointer;
        &:hover {
            background-color: #DE121B;
    }
`

export const Footer = styled.section`
    height: 12vh;
    display: flex;
    justify-content: space-between;
`

export const Mc = styled.div`
    width: 14vw;
    ${Center};
    justify-content: space-between;
    margin-left: 5%;
    color: #6F7A8F;
    img {
        width: 2vw;
    }
`

export const Download = styled.div`
    ${Center};
    width: 25vw;
    justify-content: space-between;
    margin-right: 5%;
`