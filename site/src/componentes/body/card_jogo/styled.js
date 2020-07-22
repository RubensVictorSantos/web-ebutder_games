import styled from 'styled-components'

export const color = {greenXbox: "", redNintendo: ""} 

export const InfoBox = styled.div`
    height: 390px;
    width: 250px;
	font-family: sans-serif;
    font-size: 20px;
	font-weight: bold;
	margin-left: -10px;
	padding-top:10px;
	padding-bottom:10px;
	padding-left:10px;
	padding-right:10px;
    position: absolute;
    background-color:rgba(0,0,0,0.4);
    opacity:0;
	text-align:center;
    visibility:hidden;
    box-sizing: border-box;
    overflow: hidden
`

export const BoxJogos = styled.div`
	background-color: #f2f2f2;
    border-radius: 2%;
    ${InfoBox}:hover &{

        opacity:1;
        margin-top: -380px;
        margin-left: -10px;
        color:white;
        transition: 0.6s;
        visibility: visible;
        color: white;

    }
`

export const TituloJogo = styled.div`
    height: 45px;
    max-width: 230px;
    color: black;
	font-size:15px;
	font-family: sans-serif;
    text-align: center;
	background-color:white;
    font-weight: bold;
    box-sizing: border-box;
`

export const PrecoXbox = styled.div`
    height:30px;
    width: 230px;
    font-family: sans-serif;
	background-color: white;
	color:${props => props.theme || "black"};
`

// export const InfoBox = styled.div`
//     height: 390px;
//     width: 250px;
// 	font-family: sans-serif;
//     font-size: 20px;
// 	font-weight: bold;
// 	margin-left: -10px;
// 	padding-top:10px;
// 	padding-bottom:10px;
// 	padding-left:10px;
// 	padding-right:10px;
//     position: absolute;
//     background-color:rgba(0,0,0,0.4);
//     opacity:0;
// 	text-align:center;
//     visibility:hidden;
//     box-sizing: border-box;
//     overflow: hidden
// `

// .descricao{
// 	width:100%;
// 	height:82%;
// 	background-color:rgba(0,0,0,0.5);
// }
// .add_cart_xbox{
// 	text-align:center;
// 	margin-bottom:5px;
// 	width:100%;
// 	height:13%;
// 	padding-top:10px;
// 	background-color:#39ac46;
// 	color:white;
// 	box-sizing:border-box;
// 	border-radius: 2%;
// }

// .box_jogos:hover > .ts{
    
    // opacity:1;
    // margin-top: -380px;
    // margin-left: -10px;
    // color:white;
    // transition: 0.6s;
    // visibility: visible;
    // color: white;
// }

export default BoxJogos