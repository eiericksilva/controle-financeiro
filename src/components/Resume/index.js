import styled from "styled-components"
import * as R from "./styles"
import { 
  FaRegArrowAltCircleUp, 
  FaRegArrowAltCircleDown, 
  FaDollarSign } from "react-icons/fa"

import React from 'react'
import ResumeItem from "../ResumeItem"

export const Resume = () => {
  return (
    <R.Container>
      <ResumeItem title='Entradas' Icon={FaRegArrowAltCircleUp} value="1000"/>
      <ResumeItem title='Saídas' Icon={FaRegArrowAltCircleDown} value="1000"/>
      <ResumeItem title='Total' Icon={FaDollarSign} value="1000"/>
    </R.Container>
  )
}

