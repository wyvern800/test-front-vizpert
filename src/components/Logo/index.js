import React, { useState, useEffect } from "react";

import logo from "../../assets/logo.svg";

import { Wrapper } from "./styles";

const Logo = () => {
  return (
    <Wrapper>
      <img alt="logo" src={logo} />
    </Wrapper>
  );
};

export default Logo;
