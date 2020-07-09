import React, {Component} from 'react';
import 'bootstrap';
import { Menu } from './menu';

export class Cms extends Component {
    render(){
        return (
            <div className="d-flex justify-content-center w-75 shadow-lg" style={{minHeight:"100vh"}}>
                <Menu/>
            
            </div>
        )
    }
}

export default Cms