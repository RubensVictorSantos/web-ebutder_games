import React, { Component } from 'react';
import $ from 'jquery'
/*+++++++++++++++ */
import ContainerHeader from '../box/boxSlogan';
import ContainerConteudo from './containerConteudo';

class ConteudoIndex extends Component {

    constructor() {
        super()
        this.state = { allconsoles: []}
    }

    state = '';

    componentDidMount() {

        this.setState({ allconsoles: []})

        const url = 'http://localhost:3333/consolesOn';

        $.ajax({
            url: url,
            type: 'get',
            dataType: 'json',
            contentType: 'application/json',
            success: (result) => {

                this.setState({ allconsoles: result })
            },
            error: (status) => {

                alert(status)

            }
        })

    }

    render() {
        return (
            <>
                {/* <ContainerHeader /> */}
                {this.state.allconsoles.map( console => (
                    <ContainerConteudo key={console.id_console} console={console}/>
                ))}
            </>
        )
    }
}

export default ConteudoIndex