import styled from 'styled-components';

export const Container = styled.div`
    margin-left: 26px;

    // Lower shelf
    margin-top: 38px;

    // Upper shelf
    &&:first-child {
        margin-top: 64px;
    }
`;

export const Column = styled.div`
    display: 'flex';
    flex-direction: 'row';
    min-width: '100%';
`;
