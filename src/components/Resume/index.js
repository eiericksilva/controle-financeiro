/* import styled from "styled-components" */
import * as R from "./styles"
import { 
  FaRegArrowAltCircleUp, 
  FaRegArrowAltCircleDown, 
  FaDollarSign } from "react-icons/fa"

import React from 'react'
import ResumeItem from "../ResumeItem"

export const Resume = ({income, expense, total}) => {
  return (
    <R.Container>
      <ResumeItem title='Entradas' Icon={FaRegArrowAltCircleUp} value={income}/>
      <ResumeItem title='Saídas' Icon={FaRegArrowAltCircleDown} value={expense}/>
      <ResumeItem title='Total' Icon={FaDollarSign} value={total}/>
    </R.Container>
  )
}

