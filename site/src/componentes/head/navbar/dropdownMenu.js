import React, { Component } from 'react'
import $ from 'jquery'
// -----------------------
import DropdownItem from './dropdownItem'

export class DropdownMenu extends Component {
    constructor(props) {
        super(props)
        this.state = { consoleVariante: [] };
    }

    componentDidMount() {
        this.buscarSubItem()
    }

    buscarSubItem() {

        this.setState({ consoleVariante: [] });

        const id = this.props.id_console
        const url = `http://localhost:3333/consolesVarianteIdConsole/${id}`

        $.ajax({
            url: url,
            dataType: 'json',
            type: 'GET',
            contentType: 'application/json',
            success: function (result) {

                this.setState({ consoleVariante: result });

            }.bind(this),
            error: function (state) {
                alert(state)
            }
        })

    }


    render() {

        const consoleVariante = this.state.consoleVariante
        let cor = this.props.cor;

        return (
            <div className="dropdown-menu border-0 rounded-0 m-0 p-0" style={{ backgroundColor: cor.cor }} >
                {
                    consoleVariante.map(consoleVariante => (
                        <DropdownItem key={consoleVariante.id_console_variante} cor={cor} consoleVariante={consoleVariante} />
                    ))

                }

            </div>
        )
    }
}

export default DropdownMenu