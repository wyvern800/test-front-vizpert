import { createGlobalStyle } from "styled-components";

import { ReactComponent as Logo } from '../assets/board.svg';

export default createGlobalStyle`
* {
  color: #000;
  background-image: url('../assets/board.svg');
  background-repeat: repeat;
}

body, html {


  
  margin: 0;
  padding: 0;

  // Remove selections
  -webkit-user-select: none;
     -moz-user-select: -moz-none;
      -ms-user-select: none;
          user-select: none;

input, textarea {
     user-select: text;
     -moz-user-select: text;
  }
}
`;
