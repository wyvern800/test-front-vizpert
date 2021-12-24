import { React, useState } from "react";
import { Wrapper } from "./styles";
import Bookcase from "../../components/Bookcase";
import Controls from "../../components/Controls";

const Home = () => {
  return (
    <Wrapper>
      <Bookcase/>
      <Controls />
    </Wrapper>
  );
};

export default Home;
