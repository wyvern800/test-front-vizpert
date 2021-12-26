import { createGlobalStyle } from "styled-components";

import bg_stripes from "../assets/bg_stripes.svg";
import ground from "../assets/ground.svg";

export default createGlobalStyle`
* {
  color: #000;
}

body {
  overflow: hidden; /* Hide scrollbars */
}

body, html {
  background-image: url(${ground}), url(${bg_stripes});
  background-position: bottom, top;
  background-size: 50vh, 60vh;
  
  background-repeat: repeat-x, repeat;
  //background-position: bottom, top;
  
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
