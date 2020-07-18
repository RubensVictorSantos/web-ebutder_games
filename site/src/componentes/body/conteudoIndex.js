import React, { Component } from 'react';
import $ from 'jquery'
/*+++++++++++++++ */
import ContainerHeader from '../box/boxSlogan';
import ContainerConteudo from './containerConteudo';

class ConteudoIndex extends Component {

    constructor(props) {
        super(props)

    }

    state = '';

    componentDidMount() {

        const url = 'http://localhost:3333/allConsoles';

        $.ajax({
            url: url,
            type: 'get',
            dataType: 'json',
            contentType: 'application/json',
            success: (result) => {

                let allconsoles = JSON.stringify(result[0])

                alert(allconsoles)
                this.setState({ allconsoles })
            },
            error: (status) => {

                alert(status)

            }
        })

    }

    render() {
        const consoles = this.state.allconsoles

        return (
            <>
                <ContainerHeader />
                <ContainerConteudo id="containerConteudo" consoles={consoles} />
            </>
        )
    }
}

export default ConteudoIndex