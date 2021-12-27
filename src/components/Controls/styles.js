import styled, { css } from "styled-components";

import board from "../../assets/board.svg";

import filter_button from "../../assets/filter_button.svg";
import filter_button_active from "../../assets/filter_button_active.svg";


export const Wrapper = styled.div`
  display: flex;
  //border: 1px solid red;
  align-items: flex-start;

  top: 53%;
  height: 100%;

  position: absolute;

  margin-left: 2%;

  left: 0;
  z-index: 99;

  width: 35%;
`;

export const Lady = styled.img`
  position: absolute;
  z-index: 100;

  margin-left: -4%;
  width: 60%;
`;

export const Board = styled.div`
  background-image: url(${board});
  background-repeat: no-repeat;
  background-size: cover;

  -moz-background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  background-size: 100% 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-left: 4%;

  padding: 25%;

  z-index: 98;

  margin-top: 1.5%;

  //border: 1px solid red;
`;

export const SortBy = styled.div`
  margin-bottom: 5%;
  color: rgb(195,182,211);
  text-transform: capitalize;
  font-family: 'Arvo', serif;
  letter-spacing: 5px;
  font-size: 18px;
`;

export const BoardWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 100%;
`;

export const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5%;
`;

export const Filter = styled.div`
  background-image: ${(props) =>
    props.selected ? `url(${filter_button_active})` : `url(${filter_button})`};
  background-repeat: no-repeat;
  background-size: 100% 100%;

  width: 4.6vw;
  min-width: 4.5vw;

  display: flex;
  align-items: center;
  justify-content: center;

  //border: 1px solid red;

  //padding: 5px;

  &&:hover {
    cursor: pointer;
    opacity: 0.7;
    //border: 1px solid yellow;
  }

  img {
    //width: ${(props) => props.width};
    //padding: 10%;

    height: 2.5vh;
    padding: 20%;

    min-width: 80%;
  }
`;

export const Separator = styled.div`
  background-color: #E7DFEF;
  width: 100%;
  height: 5px;
  margin-bottom: 5%;
  margin-top: 3%;
`;

export const Organize = styled.img`
  width: 100%;

  &&:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;
