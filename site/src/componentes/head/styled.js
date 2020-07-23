import styled from 'styled-components';
import imagemLogo from './img/img_logo1.jpg';

export const Header = styled.header`
    min-height: 100vmin;
    background-repeat: no-repeat;
    background-size: cover;
    background-image:url(${imagemLogo})
`
export const HeaderBox = styled.div`
    background-color: rgba(0,0,0,0.5);
    display: flex;
    flex-direction: column;
    width: 50%!important;

    @media(max-width: 480px) {
        min-width: 100vmin!important;
        min-height: 100vmin;
        justify-content: center;
    };

    @media(max-width: 280px) {
        display: none;

    }

`


export default Header