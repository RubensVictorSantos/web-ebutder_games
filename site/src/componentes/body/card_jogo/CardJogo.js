import React, { Component } from 'react';
// ----------------------
import PASTA_IMG from '../../../links_config'
import ImgNotFound from '../../../imagens/not-found.jpg'
import {
    Card,
    TituloCard,
    PrecoCard,
    InfoCard,
    DescricaoCard,
    AddCart,
    ImgCard
} from './styled'

class CardJogo extends Component {

    constructor(props) {
        super(props)
        this.state = { jogo: this.props.jogo }
    }

    render() {

        const { nome, imagem, preco, descricao } = this.state.jogo;
        const theme = this.props.theme;

        return (
            <Card className="d-flex p-2 m-2 flex-column justify-content-center">
                <TituloCard className="d-flex justify-content-center align-items-center">{nome}</TituloCard>

                <ImgCard className="text-capitalize" src={typeof (imagem) == null ? ImgNotFound : imagem} alt={"Imagem do jogo " + nome} />

                <PrecoCard theme={theme} className="text-center font-weight-bold">R$ {preco}</PrecoCard>

                <InfoCard className="d-flex flex-column text-white justify-content-end position-absolute p-2 text-center">
                    <DescricaoCard className="p-2">
                        <p>{descricao}</p>
                    </DescricaoCard>

                    <AddCart className="p-2 w-100" theme={theme}>adicionar ao carrinho</AddCart>
                </InfoCard>
                
            </Card>
        )
    }

}

export default CardJogo