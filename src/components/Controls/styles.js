import styled, { css } from "styled-components";

import board from "../../assets/board.svg";

import filter_button from "../../assets/filter_button.svg";
import filter_button_active from "../../assets/filter_button_active.svg";

export const Wrapper = styled.div`
  display: flex;
  //border: 1px solid red;
  align-items: flex-start;
  height: 100%;
  position: absolute;
  width: 35%;
  min-width: 260px;
  z-index: 99;

  left: 0;
  margin-left: 2%;
  top: 50%;

  // Moto G4/ Galaxy S5
  @media (width: 360px) and (height: 640px) {
    margin-left: 6%;
    top: 64.5%;
    width: 90%;
  }

  // Pixel 2
  @media (width: 411px) and (height: 731px) {
    margin-left: 6.5%;
    top: 64.5%;
    width: 90%;
  }

  // Pixel 2 XL
  @media (width: 411px) and (height: 823px) {
    margin-left: 5.8%;
    top: 68.5%;
    width: 90%;
  }

  // Iphone 5/ SE
  @media (width: 320px) and (height: 568px) {
    margin-left: 6.8%;
    top: 64.5%;
    width: 90%;
  }

  // Iphone 6/7/8
  @media (width: 375px) and (height: 667px) {
    margin-left: 6.8%;
    top: 64.5%;
    width: 90%;
  }

  // Iphone 6/7/8 Plus
  @media (width: 414px) and (height: 736px) {
    margin-left: 6%;
    top: 64.7%;
    width: 90%;
  }

  // Iphone X
  @media (width: 375px) and (height: 812px) {
    margin-left: 6.7%;
    top: 70.8%;
    width: 90%;
  }

  // Ipad
  @media (width: 768px) and (height: 1024px) {
    top: 68.5%;
    margin-left: 4%;
    width: 60%;
  }

  // Ipad Pro
  @media (width: 1024px) and (height: 1366px) {
    margin-left: 4%;
    top: 68.5%;
    width: 60%;
  }

  // Surface Duo
  @media (width: 540px) and (height: 720px) {
    margin-left: 4%;
    top: 68.3%;
    width: 60%;
  }

  // Galaxy Fold
  @media (width: 280px) and (height: 653px) {
    margin-left: 5%;
    top: 72%;
    width: 30%;
  }

  // Nest Hub
  @media (width: 1024px) and (height: 600px) {
    margin-left: 2%;
    top: 54%;
    width: 38%;
  }

  // Nest Hub Max
  @media (width: 1280px) and (height: 800px) {
    margin-left: 2%;
    top: 57%;
    width: 38%;
  }
`;

export const Lady = styled.img`
  position: absolute;
  z-index: 100;

  margin-left: -4%;
  width: 60%;

  min-width: 50%;
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

  min-width: 30%;

  //border: 1px solid red;
`;

export const SortBy = styled.div`
  margin-bottom: 5%;
  color: rgb(195, 182, 211);
  text-transform: capitalize;
  font-family: "Arvo", serif;
  letter-spacing: 5px;
  font-size: 11px;
`;

export const BoardWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 100%;

  width: 80%;
  min-width: 4.6vw;

  //border: 1px solid red;
  padding: 8%;
`;

export const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5%;

  min-width: 4vw;
`;

export const Filter = styled.div`
  background-image: ${(props) =>
    props.selected ? `url(${filter_button_active})` : `url(${filter_button})`};
  background-repeat: no-repeat;
  background-size: 100% 100%;

  width: 4.8vw;
  min-width: 35px;

  display: flex;
  align-items: center;
  justify-content: center;
  
  margin: 1%;

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
  background-color: #e7dfef;
  width: 100%;
  height: 5px;
  margin-bottom: 5%;
  margin-top: 3%;
`;

export const Organize = styled.img`
  width: 100%;

  filter: gray; /* IE6-9 */
  -webkit-filter: grayscale(1);

  // Sets organize button to gray if no filters are selected
  filter: ${(props) => (props.disabled ? `gray` : `none`)};

  // Changes the behavior when hovering the organize button
  &&:hover {
    opacity: ${(props) => (props.disabled ? `1` : `0.9`)};
    cursor: ${(props) => (props.disabled ? `normal` : `pointer`)};
  }

  cursor: ;
`;
