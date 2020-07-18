import React, { Component } from 'react'
import imagemLogo from './img/img_logo1.jpg';
import HeaderIndex, {
    ImgHeader,
} from './style'

export class ContainerHeader extends Component {
    render() {

        return (
            <HeaderIndex className="d-flex justify-content-center align-items-center">
                <ImgHeader src={imagemLogo} />
                <div className="d-flex justify-content-center position-absolute w-75">
                    <div className="d-flex w-75 p-5 flex-column text-white text-center" style={{backgroundColor: "rgba(0,0,0,0.5)"}}>
                        <h1 className="text-uppercase " style={{fontFamily: "Algerian", fontSize: "2.5rem"}}>
                            EBUTDER GAMES
					    </h1>
                        <p className="" style={{fontSize: "2.2rem",lineHeight: 1.5 }}>
                            "A melhor solução para quem quer jogar sem gastar."
					    </p>
                    </div>
                </div>
            </HeaderIndex>
        )
    }
}

export default ContainerHeader;