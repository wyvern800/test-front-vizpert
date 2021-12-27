import { React, useState } from "react";
import { Wrapper, WrapperMobile } from "./styles";
import Bookcase from "../../components/Bookcase";
import Controls from "../../components/Controls";
import ClockComponent from "../../components/ClockComponent";
import Logo from "../../components/Logo";

const Home = () => {
  return (
    <>
      <Wrapper>
        <ClockComponent />
        <Bookcase />
        {/**<Controls />**/}
        <Logo />
      </Wrapper>
    </>
  );
};

export default Home;
