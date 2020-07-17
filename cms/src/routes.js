import React , {Component, Fragment } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
// -------->
import Menu from './componentes/menu/menu'
import IndexCms from './componentes/corpo/indexCms'
import Cms from './componentes/corpo/cms'

export class  Rotas extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>

                    {/* <Route path="/" exact component={cms}/> */}

                    <Route path="/" render={({ match: { url } }) => (
                            <Fragment>
                                <Menu/>
                                <Route path={`${url}/`} component={IndexCms} />
                                <Route path={`${url}cms`} exact component={Cms} />
                            </Fragment>
                        )}                   
                    />

                </Switch>        
            </BrowserRouter>
        );
    }
};

export default Rotas;