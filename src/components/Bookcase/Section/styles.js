import styled from "styled-components";

export const Container = styled.div`
  //border: 1px solid red;
  // Apply left margin to the sections
  margin-left: 8%;

  // Setting the section max size
  max-width: 84%;

  // Upper section
  &&:first-child {
    margin-top: 15.6%;
  }

  // Aply margin-top to the lower section
  &&:not(:first-child) {
    margin-top: 9.3%;
  }

  // Corrects the width of the sections on every screen that it was messy
  @media (width: 280px) and (max-height: 653px) {
    max-width: 83.5%;
  }

  @media (width: 1024px) and (max-height: 600px) {
    max-width: 83.5%;
  }

  @media (width: 1280px) and (max-height: 800px) {
    max-width: 83.5%;
  }
`;
