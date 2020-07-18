import React, {Component} from "react"
import ConsoleXbox from "./container_jogos/xbox"

export class ContainerConteudo extends Component{

    constructor(props) {
        super(props)
    }

    
    componentDidMount(){
 
    }

    render(){
        // const consoles = this.props.consoles

        // for(let i in consoles){
        //     console.log(consoles[i])

        // }

        return(
            <div className="container p-0" style={{backgroundColor: "#0a0a0c"}}>
                <div className="container-fluid bg-success">

                    <h1 className="bg-success text-center text-white" style={{fontSize: "2.2rem",fontWeight: "bold"}}>
                        {/* {consoles} */}
                    </h1>
                </div>

                <ConsoleXbox/>

            </div>
        )
    }
}

export default ContainerConteudo