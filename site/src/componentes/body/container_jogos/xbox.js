import React, { Component } from 'react';
import $ from 'jquery';

import {
    BoxJogos,
    TituloJogo,
    BoxImg,
    Img,
    PrecoXbox
} from './styled'

class ConsoleXbox extends Component {

    constructor(props) {
        super(props)
        this.state = { jogo: props.jogo }
    }


    render() {

        const { nome, imagem, preco } = this.state.jogo;

        return (
            <>
                <BoxJogos className="d-flex p-2 m-2 flex-column justify-content-center">
                    <TituloJogo className="">
                        <p>{nome}</p>
                    </TituloJogo>
                    <BoxImg>
                        <Img src={imagem} className="img" />
                    </BoxImg>

                    <PrecoXbox className="">{preco}</PrecoXbox>

                    {/* <div className="ts">
                            <div className="descricao">
                                <p>O jogo se passa na terra de Lothric, muitos anos após Dark Souls, dessa vez mundo está muito perto de chegar à plena escuridão porque o lorde dessa época não acendeu a Primeira Chama novamente.</p>
                            </div>
                            <div className="add_cart_xbox">adicionar ao carrinho</div>
                        </div> */}
                </BoxJogos>
            </>
        )
    }

}

export default ConsoleXbox