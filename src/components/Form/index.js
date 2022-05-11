import React from 'react';
import * as F from './styles';
import { useState } from "react"

const Form = () => {
    const [desc, setDesc] = useState([]);
    const [amount, setAmount] = useState([]);
    const [isExpense, setIsExpense] = useState(false);

    const handleSave = () => {
        if(!desc || !amount){
            alert('O valor deve ser positivo!');
            return;
        } else if( amount < 1 ) {
            alert('O valor deve ser positivo');
            return;
        }
    }

  return (
    <F.Container>
        <F.InputContent>
            <F.Label>Descrição</F.Label>
            <F.Input value={desc} onChange={(e)=>{setDesc(e.target.value)}} ></F.Input>
        </F.InputContent>
        
        <F.InputContent>
            <F.Label>Valor</F.Label>
            <F.Input value={amount} type='number' onChange={(e)=>{setAmount(e.target.value)}} ></F.Input>
        </F.InputContent>

        <F.RadioGroup>
            <F.Input type='radio' id='rIncome' defaultChecked name='group1' onChange={() => {setIsExpense(!isExpense)}}/>
            <F.Label htmlFor='rIncome'>Entrada</F.Label>
        </F.RadioGroup>

        <F.RadioGroup>
            <F.Input type='radio' id='rExpenses' name='group1' onChange={() => {setIsExpense(!isExpense)}}/>
            <F.Label htmlFor='rExpenses'>Saída</F.Label>
        </F.RadioGroup>

        <F.Button onClick={handleSave}>Adicionar</F.Button>
    </F.Container>
  )
}

export default Form