import React, { useState, useEffect } from "react";

import clock from "../../assets/clock_base.svg";

import { Wrapper } from "./styles";

const Clock = () => {
  return (
    <Wrapper>
      <img alt="clock" src={clock} />
    </Wrapper>
  );
};

export default Clock;
