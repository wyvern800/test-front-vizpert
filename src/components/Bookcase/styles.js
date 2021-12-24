import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid green;
    width: 400px;
    padding: 5px;
    margin: 5px;
`;

export const Shelf = styled.ul`
  width: 95%;
  display: flex;
  border: 2px solid purple;
  min-height: 85px;

  list-style-type: none;
  margin: 0;
  padding: 0;

  transition: background-color 0.2s ease;
  
  background-color: ${(props) => (props.isDraggingOver ? 'skyblue' : 'white')};

  &&:not(:first-child) {
    margin-top: 20px;
  }

  &&:first-child {
    margin-top: 30px;
  }

  &&:last-child {
    margin-bottom: 18px;
  }
`;

export const Book = styled.li`
    min-width: 25px;
    border: 1px solid black;
    margin: 2px;
    cursor: grab;

    transition: background-color 0.2s ease;

    background-color: ${(props) =>
        props.isDragging
            ? 'lightgreen'
            : 'white'};

    &&:hover {
        border: 3px solid gold;
    }
`;
