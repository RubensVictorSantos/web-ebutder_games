import React , {Component, Fragment } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './componentes/menu/menu';
import ConteudoIndex from './componentes/body/conteudoIndex';
/* -------------------------- */


export class  Rotas extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" render={({ match: { url } }) => (
                        <Fragment>
                            {/* <Menu/> */}
                            <Route path={`${url}/`} component={ConteudoIndex} />

                        </Fragment>
                    )}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Rotas
