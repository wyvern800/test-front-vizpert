import styled from "styled-components";

import img from "../../assets/bookcase.svg";

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
    content: " ";
    position: absolute;
    width: 30vw;
    height: 38vh;
    background-image: url(${img});
    background-repeat: no-repeat;

    min-width: 35vh;
  }

  @media (max-width: 414px) {
    order: 1;

    &&:nth-of-type(2) {
      margin-top: -22%;
    }
  }

  @media (max-width: 768px) {
    margin-top: 8%;
  }

  @media (width: 1024px) {
    margin-top: 8%;
  }

  @media (max-width: 540px) {
    margin-top: 8%;
  }

  @media (width: 1024px) and (min-height: 600px) {
    margin-top: 1%;
  }

  @media (width: 1024px) and (min-height: 1366px) {
    margin-top: 9%;
  }

  @media (width: 1280px) and (min-height: 800px) {
    margin-top: 1%;
  }

  @media (width: 280px) and (min-height: 653px) {
    margin-top: 5%;
  }

  @media (max-width: 410px) and (height: 822px) {
    margin-top: 40%;
  }
`;

export const ConfirmDeletion = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const ModalButton = styled.button`
  color: white;
  font-weight: bold;
  border: 0px;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  padding: 2%;
  width: 15%;
  margin: 2%;
  outline: none;
  transition: background-color 0.2s ease 0s;
  cursor: pointer;

  &&:hover {
    filter: brightness(85%);
  }
`;
