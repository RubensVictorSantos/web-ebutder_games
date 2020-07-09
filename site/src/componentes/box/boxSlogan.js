import React, { Component } from 'react'
import imagemLogo from './img/img_logo1.jpg';
import HeaderIndex, {ImgHeader} from './style'

export class ContainerHeader extends Component {
    render() {

        return (
            <HeaderIndex>
                <ImgHeader src={"./img/img_logo1.jpg"} ></ImgHeader>
            </HeaderIndex>
        )
    }
}

export default ContainerHeader;