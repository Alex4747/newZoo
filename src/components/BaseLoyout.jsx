import React, { useState } from 'react';
import styled from "styled-components";
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom';
import Header from "./Header";
import Background from "./Background";

function BaseLoyout() {
  return (
    <>
    <Header />
    <Background />
    </>
  );
}

export default BaseLoyout;
