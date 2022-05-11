import * as R from "./styles"
import { 
  FaRegArrowAltCircleUp, 
  FaRegArrowAltCircleDown, 
  FaDollarSign } from "react-icons/fa"
import ResumeItem from "../ResumeItem"

import React from 'react'
export const Resume = ({income, expense, total}) => {
  return (
    <R.Container>
      <ResumeItem title='Entradas' Icon={FaRegArrowAltCircleUp} value={income} />
      <ResumeItem title='Saídas' Icon={FaRegArrowAltCircleDown} value={expense}/>
      <ResumeItem title='Total' Icon={FaDollarSign} value={total}/>
    </R.Container>
  )
}

