import React, { Component } from 'react';

import {
    BoxJogos,
    TituloJogo,
    BoxImg,
    Img,
    PrecoXbox,
    InfoBox
} from './styled'

class ConsoleXbox extends Component {

    constructor(props) {
        super(props)
        this.state = { jogo: props.jogo }
    }

    componentDidMount(){

        alert(this.state.jogo)
    }

    render() {

        const { nome, imagem, preco } = this.state.jogo;
        const theme = this.props.theme;

        return (
            <BoxJogos className="d-flex p-2 m-2 flex-column justify-content-center">
                <TituloJogo className="d-flex justify-content-center align-items-center">
                    {nome}
                </TituloJogo>
                <BoxImg>
                    {/* <Img src={imagem}/> */}
                    <img src={imagem}/>
                </BoxImg>

                <PrecoXbox theme={theme} className="text-center font-weight-bold">{preco}</PrecoXbox>

                {/* <InfoBox className=""> */}
                    {/* <div className="descricao">
                        <p>O jogo se passa na terra de Lothric, muitos anos após Dark Souls, dessa vez mundo está muito perto de chegar à plena escuridão porque o lorde dessa época não acendeu a Primeira Chama novamente.</p>
                    </div>
                    <div className="add_cart_xbox">adicionar ao carrinho</div> */}
                {/* </InfoBox> */}
            </BoxJogos>
        )
    }

}

export default ConsoleXbox