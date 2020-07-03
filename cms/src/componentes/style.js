import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const DivMain = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    height: 100% ;
    background-color: #0a0a0c ;
`
export const Logo = styled(Link)`
    
    @media(min-width: 700px) {
        [class *= "text-logo"]{
            display: block;
            background-color: red;

            
        }
    }

    @media(max-width: 600px) {
        [class *= "text-logo"]{ 
            display: none;
            backgroun-color:green;
        }
    }

    

 `

export default DivMain;