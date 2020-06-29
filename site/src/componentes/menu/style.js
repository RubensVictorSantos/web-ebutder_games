import styled from 'styled-components';

export const TituloLogo = styled.h1` 
    font-family: Algerian;
    font-size: 40px;
    box-sizing: border-box;
`;

export const NavBar = styled.nav` 
    background-color: black;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    position: fixed;
`;

export const LinkMenu = styled.a` 
    background-color: black;
    color-white;
`;

export const LinkXbox = styled.a` 
    background-color: black;
    color-white;
`;

export const LinkPs = styled.a` 
    background-color: black;
    color-white;

`;

export const LinkNin = styled.a` 
    background-color: black;
    color-white;

`;

export const LiMenu = styled.li`
    background-color: black;
`;

export const LiXbox = styled.li`
    background-color: black;

    ${LinkXbox}:hover {
        background-color:#2d8637;
    };
    
`;

export const LiPs = styled.li`
    background-color: black;
    ${LinkPs}:hover {
        background-color:#0052cc
    };
`;

export const LiNin = styled.li`
    background-color: black;
    ${LinkNin}:hover {
        background-color:#ff3333
    };
`;

export const DropdownMenu = styled.li`
    margin-top: 0;
    padding: 0;
    background-color:#39ac46;
`;

export default NavBar