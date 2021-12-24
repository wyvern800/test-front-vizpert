import styled from 'styled-components';

import img from '../../assets/bookcase.svg';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    //border: 1px solid green;
    width: 548px;
    padding: 5px;
    margin: 5px;
    height: 333px;
    background-image: url(${img});
`;

