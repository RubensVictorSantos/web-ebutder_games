import React , {Component, Fragment } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import { Cms } from './componentes/cms';
import indexCMS from './componentes';

export class  Rotas extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>

                    <Route path="/" exact component={indexCMS}/>

                    <Route path="/cms" render={({ match: { url } }) => (
                            <Fragment>
                                <Route path={`${url}/`} component={Cms} />
                            </Fragment>
                        )}                   
                    />

                </Switch>        
            </BrowserRouter>
        );
    }
};

export default Rotas;