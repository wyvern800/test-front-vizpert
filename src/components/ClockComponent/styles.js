import styled from "styled-components";

import clock from "../../assets/clock_base.svg";

export const Wrapper = styled.div`
  background-image: url(${clock});
  background-repeat: no-repeat;

  //border: 1px solid red;

  margin-top: -20%;

  // Removing clock on lower resolutions
  @media (max-width: 414px) {
    display: none;
  }
  

  // Horrible but works =)
  div {
    div {
      div {
        div {
          margin-left: -2%;
          div {
            margin-left: 50%;
          }
        }
      }
    }
  }

  img {
  }
`;
