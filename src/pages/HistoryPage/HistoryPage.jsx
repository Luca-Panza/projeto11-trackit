import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import styled from "styled-components";

/*import HistoryContainerSC from "./HistorySC";*/
import { URL } from '/src/assets/constants';
import { AppContext } from '/src/context/AppContext';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function HistoryPage () {
  return (
    <>
    <Header />

      <HistoryContainerSC>
        <h2>History</h2>
        <p>Soon you will be able to see the history of your habits here!</p>
      </HistoryContainerSC>

    <Footer />
    </>
  );
}

const HistoryContainerSC = styled.div`
  width:100%;
  height:100%;

  padding-top:60px;
  padding-bottom:30px;
  h2{
    margin-top:30px;
    margin-left:5%;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;

    color: #126BA5;
  }
  p{
    margin:  10px 5% 0% 5%;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    color: #666666;
  }
`;