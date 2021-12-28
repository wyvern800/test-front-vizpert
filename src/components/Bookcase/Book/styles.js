import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  opacity: ${(props) => (props.isDragging ? "0.5" : "1")};

  &&:hover {
    cursor: grabbing;
  }

  &&:not(:first-child) {
    margin-left: 1%;
  }

  //border: 1px solid yellow;

  width: 9%;
  height: 100%;
`;

export const BookCover = styled.svg`
  //margin-top: -32px;
  //margin-bottom: -32px;
`;
