import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkNav = styled(Link)`
    color: white;

    :hover {
        background-color:${props => props.cor};
    };
`;

export default LinkNav