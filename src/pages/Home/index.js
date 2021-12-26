import { React, useState } from "react";
import { Wrapper } from "./styles";
import Bookcase from "../../components/Bookcase";
import Controls from "../../components/Controls";
import Clock from "../../components/Clock";
import Logo from "../../components/Logo";

const Home = () => {
  return (
    <Wrapper>
      <Clock />
      <Bookcase />
      {/**<Controls />**/}
      <Logo />
    </Wrapper>
  );
};

export default Home;
