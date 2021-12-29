import styled from "styled-components";

export const Wrapper = styled.div`
  //border: 1px solid red;
  margin-top: -20%;
  width: 15%;

  // Increases the logo size on smaller screens
  @media (max-width: 414px) {
    width: 35%;
    margin-bottom: 30%;
    margin-top: -33%;
  }

  img {
    // Remove drag effects
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }
`;
