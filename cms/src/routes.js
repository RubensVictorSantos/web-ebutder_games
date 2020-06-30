import React , {Component, Fragment } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import { Cms } from './componentes/cms';
import { CmsLogin } from './componentes/login-cms/cms-login';
import { Cabecalho } from './componentes/cabecalho';
import indexCMS from './componentes';

export class  Rotas extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={indexCMS}/>
                    
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