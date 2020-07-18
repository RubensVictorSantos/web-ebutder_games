import React, { Component } from 'react';
import ConteudoConsole, {
    BoxJogos,
    TituloJogo
} from './styled'

class ConsoleXbox extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    jogos(){
        
    }


    render() {
        return (
            <>
                <ConteudoConsole className="d-flex justify-content-center pt-2">
                    <BoxJogos className="p-2">
                        <TituloJogo className="">
                            <p>DARK SOULS III</p>
                        </TituloJogo>
                        <div className="box_img">
                            <img src="imagens/XboxdarkSoulse.png" className="img" />
                        </div>
                        <div className="preco_xbox">R$89,91</div>

                        {/* <div className="ts">
                            <div className="descricao">
                                <p>O jogo se passa na terra de Lothric, muitos anos após Dark Souls, dessa vez mundo está muito perto de chegar à plena escuridão porque o lorde dessa época não acendeu a Primeira Chama novamente.</p>
                            </div>
                            <div className="add_cart_xbox">adicionar ao carrinho</div>
                        </div> */}
                    </BoxJogos>

                    <BoxJogos className="">
                    </BoxJogos>
                    <BoxJogos className="">
                    </BoxJogos>
                    <BoxJogos className="">
                    </BoxJogos>
                </ConteudoConsole>

            </>
        )
    }

}

export default ConsoleXbox