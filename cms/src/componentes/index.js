import React, { Component} from 'react'
import {Link} from 'react-router-dom'
import Mainbody from './cabecalho'
import CmsLogin from './login-cms/cms-login'

class indexCMS extends Component {

    render() {
        return (
            <>
                {/* <Menu/> */}
                <nav className="navbar  navbar-expand-lg navbar-dark fixed-top bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link className="navbar-brand" to="#" style={{ fontFamily: "Algerian" }}>Ebutder</Link>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link className="nav-link" to="#">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Link</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" to="#" tabIndex={"-1"} aria-disabled="true">Disabled</Link>
                            </li>
                        </ul>
                        {/* <!-- Button trigger modal --> */}
                        <button type="button" className="btn btn-dark" data-toggle="modal" data-target="#exampleModal">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                                <path fillRule={"evenodd"} d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                <path fillRule={"evenodd"} d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                            </svg>
                        </button>
                    </div>
                </nav>
                    {/* <!-- Modal --> */}
                <CmsLogin/>

                <Mainbody/>
            </>
        )
    }
}

export default indexCMS