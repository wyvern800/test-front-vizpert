import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    opacity: ${(props) =>
        props.isDragging
            ? '0.5'
            : '1'};

    box-shadow: ${(props) => props.isDragging ? 'rgba(0, 0, 0, 0.35) 0px 5px 15px' : ''};

    width: 35px;
    margin-left: 2px;
    margin-right: 2px;

    &&:first-child {
        margin-left: 10px;
    }
`;

export const BookCover = styled.svg`
    margin-top: -32px;
    margin-bottom: -32px;
`;
