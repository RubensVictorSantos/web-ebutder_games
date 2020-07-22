import React , {Component, Fragment } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import ComponentMain from './componentes/componentMain';


export class  Rotas extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" render={({ match: { url } }) => (
                        <Fragment>
                            <Route path={`${url}/`} component={ComponentMain} />

                        </Fragment>
                    )}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Rotas
