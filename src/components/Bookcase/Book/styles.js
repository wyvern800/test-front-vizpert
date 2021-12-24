import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    border: ${props => (props.isDragging ? '2px solid rgba(255, 140, 0, 0.49)': '1px solid red')};
    width: 30px;
    margin: 5px;
`;
