import React, { Component } from 'react'
// --------------------
import Header, { HeaderBox } from './styled'

export class ContainerHeader extends Component {
    render() {

        return (
            <Header className="d-flex justify-content-center align-items-center bg-info">
                <HeaderBox className="text-white text-center">
                    <h1 className="text-uppercase " style={{ fontFamily: "Algerian", fontSize: "2.5em" }}>
                        EBUTDER GAMES
                            </h1>
                    <p className="" style={{ fontSize: "2.2em", lineHeight: "1.5em" }}>
                        "A melhor solução para quem quer jogar sem gastar."
                            </p>
                </HeaderBox>
            </Header>
        )
    }
}

export default ContainerHeader;