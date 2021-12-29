import styled, { css } from "styled-components";

import board from "../../assets/board.svg";

import filter_button from "../../assets/filter_button.svg";
import filter_button_active from "../../assets/filter_button_active.svg";

export const Wrapper = styled.div`
  background-image: url(${board});
  background-repeat: no-repeat;
  background-size: cover;

  -moz-background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  background-size: 100% 100%;

  //display: flex;
  //border: 1px solid cyan;
  //align-items: flex-end;
  //justify-content: flex-end;
  height: auto;
  position: fixed;
  width: 35vw;
  min-width: 265px;
  z-index: 99;

  left: 1.2%;
  bottom: 1%;

  //top: 50%;
  //bottom: 0;

  // Responsive
  @media (max-width: 409px) {
    left: auto;
    width: 95vw;
  }

  // Moto G4/ Galaxy S5
  @media (width: 360px) and (height: 640px) {
    left: auto;
    width: 95vw;
  }

  // Pixel 2
  @media (width: 411px) and (height: 731px) {
    left: auto;
    width: 95vw;
  }

  // Pixel 2 XL
  @media (width: 411px) and (height: 823px) {
    left: auto;
    width: 95vw;
  }

  // Iphone 5/ SE
  @media (width: 320px) and (height: 568px) {
    left: auto;
    width: 95vw;
  }

  // Iphone 6/7/8
  @media (width: 375px) and (height: 667px) {
    left: auto;
    width: 95vw;
  }

  // Iphone 6/7/8 Plus
  @media (width: 414px) and (height: 736px) {
    left: auto;
    width: 95vw;
  }

  // Iphone X
  @media (width: 375px) and (height: 812px) {
    left: auto;
    width: 95vw;
  }

  // Ipad
  @media (width: 768px) and (height: 1024px) {
    width: 70vw;
  }

  // Ipad Pro
  @media (width: 1024px) and (height: 1366px) {
    width: 70vw;
  }

  // Surface Duo
  @media (width: 540px) and (height: 720px) {
    width: 70vw;
  }

  // Galaxy Fold
  @media (width: 280px) and (height: 653px) {
    left: auto;
    width: 95vw;
  }

  // Nest Hub
  /*@media (width: 1024px) and (height: 600px) {
    margin-left: 2%;
    top: 54%;
    width: 38%;
  }*/

  // Nest Hub Max
  /*@media (width: 1280px) and (height: 800px) {
    margin-left: 2%;
    top: 57%;
    width: 38%;
  }*/
`;

export const Lady = styled.img`
  position: absolute;
  z-index: 100;

  left: 0;
  bottom: -5%;

  margin-left: -2%;
  width: 60%;

  min-width: 50%;

  // Remove drag effects
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;

  // border: 1px solid yellow;
`;

export const Board = styled.div`
  //background-image: url(${board});
  //background-repeat: no-repeat;
  //background-size: cover;

  //-moz-background-size: 100% 100%;
  //-webkit-background-size: 100% 100%;
  // background-size: 100% 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  //margin-left: 4%;

  //padding: 25%;

  z-index: 98;

  //margin-top: 1.5%;

  width: 100%;

  //border: 1px solid pink;
`;

export const SortBy = styled.div`
  margin-bottom: 3%;
  color: rgb(195, 182, 211);
  text-transform: capitalize;
  font-family: "Arvo", serif;
  letter-spacing: 5px;
  font-size: 12px;
`;

export const BoardWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  //margin-left: 100%;

  width: 100%;
  //min-width: 4.6vw;

  //border: 1px solid red;
  //margin: 8%;
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

  // Ipad
  @media (width: 768px) and (height: 1024px) {
    width: 9.8vw;
  }

  // Ipad Pro
  @media (width: 1024px) and (height: 1366px) {
    width: 9.8vw;
  }

  //margin: 1%;

  //border: 1px solid red;

  &&:hover {
    cursor: pointer;
    opacity: 0.7;
    //border: 1px solid yellow;
  }

  img {
    height: 2.5vh;
    padding: 20%;
    min-width: 80%;

    // Remove drag effects
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }
`;

export const Separator = styled.div`
  background-color: #e7dfef;
  width: 100%;
  height: 5px;
  margin-bottom: 3%;
`;

export const Organize = styled.img`
  filter: gray; /* IE6-9 */
  -webkit-filter: grayscale(1);

  // Sets organize button to gray if no filters are selected
  filter: ${(props) => (props.disabled ? `gray` : `none`)};

  // Changes the behavior when hovering the organize button
  &&:hover {
    opacity: ${(props) => (props.disabled ? `1` : `0.9`)};
    cursor: ${(props) => (props.disabled ? `normal` : `pointer`)};
  }

  // Remove drag effects
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
`;
