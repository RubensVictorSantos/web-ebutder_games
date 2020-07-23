import React, { Component } from 'react';

import {LinkMenu, DropdownMenu} from './styled';

export class ItemMenu extends Component {
    render() {

        const id = this.props.console.id_console;
        var cor = '';

        switch (id) {
            case 1:
                cor = "#39ac46"

                break;
            case 2:
                cor = "#0052cc"

                break;
            case 3:
                cor = "#ff3333"

                break;

            default:
                // cor = "black"

                break;
        }

        return (
            <li className="nav-item dropdown" >
                <LinkMenu cor={cor} className="nav-link text-white dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {this.props.console.nome}
                </LinkMenu>
                <div className="dropdown-menu rounded-0 m-0 p-0" style={{backgroundColor: "black"}} ariaLabelledby={"navbarDropdown"}>
                    <LinkMenu cor={cor} className="dropdown-item text-white" to="#">XBOX 360</LinkMenu>
                    <LinkMenu cor={cor} className="dropdown-item text-white" to="#">XBOX ONE</LinkMenu>
                </div>
            </li>
        )
    }
}

export default ItemMenu