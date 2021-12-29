import styled from "styled-components";

import ground from "../../assets/ground.svg";

export const Wrapper = styled.div`
  //border: 1px solid blue;
  min-height: 100vh;

  margin: 0px;
  height: 100%;

  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;

  // Changes flex direction to column in smaller screens
  @media (max-width: 414px) {
    justify-content: center;
    flex-direction: column;
  }

  //background-image: url(${ground});
  //background-repeat: repeat-x;

  //background-position: center;
  //background-attachment: fixed;

  //background-size: 25%;
`;
