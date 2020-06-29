import React, { Component } from 'react';
import NavBar, {
    LinkMenu,
    LinkXbox,
    LiXbox,
    LinkPs,
    LiPs,
    LiNin,
    LinkNin,
    LiMenu,
    DropdownMenu
} from './style';

class Menu extends Component {
    render() {
        return (
            <NavBar>
                <nav className="w-75 navbar navbar-expand-lg">

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="w-100 d-flex justify-content-around navbar-nav mr-auto ">
                            <a className="navbar-brand text-white" href="#">HOME</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <LiXbox className="nav-item dropdown" >
                                <LinkXbox className="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    XBOX
                                </LinkXbox>
                                <DropdownMenu className="p-0 dropdown-menu rounded-0" aria-labelledby="navbarDropdown">
                                    <LinkXbox className="dropdown-item text-white" href="#">XBOX 360</LinkXbox>
                                    <LinkXbox className="dropdown-item text-white" href="#">XBOX ONE</LinkXbox>
                                </DropdownMenu>
                            </LiXbox>
                            <LiPs className="nav-item dropdown">
                                <LinkPs className="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    PLAYSTATION
                                </LinkPs>
                                <DropdownMenu className="dropdown-menu  rounded-0" aria-labelledby="navbarDropdown">
                                    <LinkPs className="dropdown-item  text-white" href="#">PS5</LinkPs>
                                    <LinkPs className="dropdown-item  text-white" href="#">PS4</LinkPs>
                                    <LinkPs className="dropdown-item  text-white" href="#">PS3</LinkPs>
                                </DropdownMenu>
                            </LiPs>
                            <LiNin className="nav-item dropdown">
                                <LinkNin className="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    NINTENDO
                                </LinkNin>
                                <DropdownMenu className="dropdown-menu rounded-0 " aria-labelledby="navbarDropdown">
                                    <LinkNin className="dropdown-item  text-white" href="#">WII</LinkNin>
                                    <LinkNin className="dropdown-item  text-white" href="#">WII U</LinkNin>
                                </DropdownMenu>
                            </LiNin>
                            <LiMenu className="nav-item dropdown">
                                <LinkMenu className="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    TRADUZIR
                                </LinkMenu>
                                <DropdownMenu className="dropdown-menu rounded-0" aria-labelledby="navbarDropdown">
                                    <LinkMenu className="dropdown-item text-white" href="#">PT-BR</LinkMenu>
                                    <LinkMenu className="dropdown-item text-white" href="#">EN</LinkMenu>
                                </DropdownMenu>
                            </LiMenu>
                            <LiMenu>
                                <svg class="bi bi-cart3 text-white" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                </svg>
                            </LiMenu>
                        </ul>
                    </div>
                </nav>
            </NavBar>
        )
    }
}

export default Menu