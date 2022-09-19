import React, { useState } from 'react';
import styled from "styled-components";
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom';

const HeaderStyled = styled.header`
    width: 100%;
    height: 100px;
    background-color: #8837b7;
    vertical-align: middle;
    line-height: 100px;

    h1 {
      text-align: center;
      color: white;
      font-size: 50px;
    }
`;


function Header() {
  return (
      <HeaderStyled>
        <h1>NARUTO`S ZOO</h1>
      </HeaderStyled>
  );
}

export default Header;
