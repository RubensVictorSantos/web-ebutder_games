import styled from 'styled-components';

export const LinkNav = styled.a` 
    color: white;

    :hover {
        background-color:${props => props.cor};
    };
`;

export default LinkNav