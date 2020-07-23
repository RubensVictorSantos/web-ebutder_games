import styled from 'styled-components';

export const LinkMenu = styled.a` 
    color-white;

    :hover {
        background-color:${props => props.cor};
    };
`;

export default LinkMenu