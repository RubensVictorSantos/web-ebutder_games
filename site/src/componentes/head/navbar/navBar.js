import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import $ from 'jquery';
// --------------------------------
import ItemNav from './itemNav';


class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = { console: [] }
    }

    componentDidMount() {
        this.itemsMenu()
    }

    itemsMenu() {

        const url = "http://localhost:3333/allConsoles"

        $.ajax({
            url: url,
            type: 'get',
            dataType: 'json',
            contentType: 'application/json',
            success: function (result) {

                this.setState({ console: result })

            }.bind(this),
            error: function (status) {

                alert(status)

            }
        })
    }

    render() {
        const cons = this.state.console;

        return (
            <nav className="navbar navbar-expand-sm fixed-top" style={{ backgroundColor: "black" }}>
                <div className="container">

                    <Link className="navbar-brand text-white" to="/">HOME</Link>
                    <button className="navbar-toggler p-0 rounded-0" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <svg viewBox="0 0 30 30" height="1.5em" width="1.5em">
                            <line x1="3" y1="7" x2="27" y2="7" style={{ stroke: 'white', strokeWidth: 3 }} />
                            <line x1="3" y1="15" x2="27" y2="15" style={{ stroke: 'white', strokeWidth: 3 }} />
                            <line x1="3" y1="23" x2="27" y2="23" style={{ stroke: 'white', strokeWidth: 3 }} />
                        </svg>
                    </button>

                    <div className="collapse navbar-collapse justify-content-center " id="navbarTogglerDemo02">
                        <ul className="navbar-nav w-75 justify-content-around">
                            {
                                cons.map(cons => (
                                    <ItemNav key={cons.id_console} console={cons} />
                                ))
                            }
                            <li className="nav-item">
                                <svg className="img-thumbnail bi bi-cart3 text-white border-0" style={{ backgroundColor: 'black' }} width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="htt ">
                                    <path fillRule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar