import React , {Component, Fragment } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import { Cms } from './componentes/cms';
import { CmsLogin } from './componentes/cms-login';
import { Cabecalho } from './componentes/cabecalho';

export class  Rotas extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/Login" component={CmsLogin} />

                    <Route path="/cms" render={({ match: { url } }) => (
                            <Fragment>
                                <Cabecalho/>
                                <Route path={`${url}/`} exact component={Cms} />
                            </Fragment>
                        )}                   
                    />

                </Switch>        
            </BrowserRouter>
        );
    }
};

export default Rotas;