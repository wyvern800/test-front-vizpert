import React, { useState, useEffect } from "react";

import { Wrapper } from "./styles";

import AnalogClock from 'analog-clock-react';

let options = {
  width: "12vw",
  border: false,
  backgroundImage: true,
  borderColor: "rgba(175,66,246,0)",
  baseColor: "rgba(175,66,246,0)",
  centerColor: "rgba(175,66,246,0)",
  centerBorderColor: "rgba(175,66,246,0)",
  handColors: {
    second: "rgba(175,66,246,0)",
    minute: "#9B6DBF",
    hour: "rgb(175,66,246)"
  }
};

const ClockComponent = () => {
  
  return (
    <Wrapper>
      <AnalogClock {...options} />
    </Wrapper>
  );
};

export default ClockComponent;
