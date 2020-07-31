import styled from 'styled-components'

export const InfoCard = styled.div`
    height: 390px;
    width: 250px;
	font-family: sans-serif;
    font-size: 1.1rem;
	margin-left: -10px;
    background-color:rgba(0,0,0,0.4);
    opacity:0;
    overflow: hidden;

    @media(max-width: 500px) {
        width: 100px;
        height: 150px;
        display: none!important;
        
    }
`
export const ImgCard = styled.img`

    height: 295px;
    width: 230px;

    @media(max-width: 500px) {
        width: 100px;
        height: 150px;
        
    }
`

export const Card = styled.div`
	background-color: #f2f2f2;
    border-radius: 2%;
    
    ${InfoCard}:hover {
        opacity:1;

    }

    @media(max-width: 500px) {
        padding: 0rem!important;
        margin: 0rem!important;
        border-radius: 0;
        
    }

`

export const TituloCard = styled.div`
    height: 45px;
    max-width: 230px;
    color: black;
	font-size:1rem;
	font-family: sans-serif;
    text-align: center;
	background-color:white;
    font-weight: bold;
    box-sizing: border-box;

    @media(max-width: 500px) {
        display: none!important;
        
    }


`

export const PrecoCard = styled.div`
    height:30px;
    width: 230px;
    font-family: sans-serif;
	background-color: white;
    color:${props => props.theme || "black"};
    
    @media(max-width: 500px) {
        display: none!important;
        
    }
`

export const DescricaoCard = styled.div`
	width:100%;
	height:82%;
	background-color:rgba(0,0,0,0.5);
`

export const AddCart = styled.div`
	background-color:${props => props.theme};
`

export default Card