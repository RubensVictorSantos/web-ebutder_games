import React , {Component, Fragment } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import { Cms } from './componentes/cms';
import Menu from './componentes/menu'
import { CmsLogin } from './componentes/login-cms/cms-login';
import { Mainbody } from './componentes/cabecalho';
import indexCMS from './componentes';

export class  Rotas extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/cms" render={({ match: { url } }) => (
                            <Fragment>

                                <Route path={`${url}/`} exact component={Menu} />
                                <Mainbody/>
                                <Route path={`${url}/login`} component={CmsLogin} />
                            </Fragment>
                        )}                   
                    />

                </Switch>        
            </BrowserRouter>
        );
    }
};

export default Rotas;