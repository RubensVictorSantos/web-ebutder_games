import React, { Component } from "react";
import $ from 'jquery';

import ConsoleXbox from "./container_jogos/xbox"

export class ContainerConteudo extends Component {

    constructor(props) {
        super(props)

        this.state = { jogos: [], theme: this.props.console.id_console}
    }

    componentDidMount() {

        this.setState({ jogos: []})

        const id = this.props.console.id_console
        const url = `http://localhost:3333/jogosConsole/${id}`

        $.ajax({
            url: url,
            type: 'get',
            data: JSON.stringify({ 'id': id }),
            dataType: 'json',
            contentType: 'application/json',
            success: (result) => {

                this.setState({ jogos: result})
            },
            error: (status) => {

                alert(status)

            }
        })

    }

    render() {

        const theme = this.props.theme

        return (
            <div className="container p-0" style={{ backgroundColor: "#0a0a0c" }}>
                <div className="container-fluid bg-success">

                    <h1 className="bg-success text-center text-white" style={{ fontSize: "2.2rem", fontWeight: "bold" }}>
                        {this.props.console.nome}
                    </h1>
                </div>
                <div className="d-flex flex-wrap justify-content-center p-2">
                    {this.state.jogos.map(jogo => (
                        <ConsoleXbox jogo={jogo} />
                    ))}

                </div>
            </div>
        )
    }
}

export default ContainerConteudo