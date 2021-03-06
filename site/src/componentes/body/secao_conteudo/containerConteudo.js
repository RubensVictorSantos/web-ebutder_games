import React, { Component } from "react";
import $ from 'jquery';

import TituloSession from './styled'
import CardJogo from "../card_jogo/cardJogo";

export class ContainerConteudo extends Component {

    constructor(props) {
        super(props)

        this.state = { jogos: []}
    }

    componentDidMount() {

        this.setState({ jogos: [] })

        const id = this.props.console.id_console
        const url = `http://localhost:3333/jogosConsole/${id}`

        $.ajax({
            url: url,
            type: 'get',
            data: JSON.stringify({ 'id': id }),
            dataType: 'json',
            contentType: 'application/json',
            success: (result) => {

                this.setState({ jogos: result })
            },
            error: (status) => {

                alert(status)

            }
        })

    }

    render() {

        const id = this.props.console.id_console;
        const nome = this.props.console.nome;
        var theme = ''

        switch (id) {
            case 1:
                theme = "#39ac46"

                break;
            case 2:
                theme = "#0052cc"

                break;
            default:
                theme = "#ff3333"

                break;
        }

        return (
            <div className="container p-0" style={{ backgroundColor: "#0a0a0c" }}>
                <div className="container-fluid p-0">

                    <TituloSession theme={theme} className="text-center text-white p-1">
                        {nome}
                    </TituloSession>
                </div>
                <div className="d-flex flex-wrap justify-content-center p-2">
                    {this.state.jogos.map(jogo => (
                        <CardJogo key={jogo.id_jogo} jogo={jogo} theme={theme}/>
                    ))}

                </div>
            </div>
        )
    }
}

export default ContainerConteudo