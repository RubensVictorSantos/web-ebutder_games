import React, { Component, Fragment } from 'react';
import $ from 'jquery'
/*+++++++++++++++ */
import ContainerHeader from './head/containerHeader';
import ContainerConteudo from './body/secao_conteudo/containerConteudo';
import NavBar from './head/navbar/navBar';

class ComponentMain extends Component {

    constructor() {
        super()
        this.state = { allconsoles: [] }
    }

    componentDidMount() {

        this.setState({ allconsoles: [] })

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
            <Fragment>
                <NavBar />
                <ContainerHeader />
                {
                    this.state.allconsoles.map(console => (
                        <ContainerConteudo key={console.id_console} console={console} />
                    ))
                }

            </Fragment>
        )
    }
}

export default ComponentMain