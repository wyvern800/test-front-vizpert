import styled from 'styled-components';

import img from '../../assets/bookcase.svg';

export const Wrapper = styled.div`
    //border: 2px solid green;
    display: flex;
    flex-direction: column;

    max-width: 24vw;
    width: 24vw;

    max-height: 38vh;
    height: 100%; 

    //min-width: 24vh;
    min-width: 28vh;

    //background-image: url(${img});
    //background-size: contain;
    //background-repeat: no-repeat;

    position: relative;

    // To make sure the bookshelf shadow transpasses the div
    &&:before {
        content: ' ';
        position: absolute;
        width: 30vw;
        height: 38vh;
        background-image: url(${img});
        background-repeat: no-repeat;
        //min-width: 30vh;
        min-width: 35vh;
    }
`;
