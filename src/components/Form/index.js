import React,{ useState } from 'react';
import * as F from './styles';
import Grid from '../Grid';



const Form = ({handleAdd, transactionsList, setTransactionsList}) => {
    const [desc, setDesc] = useState([]);
    const [amount, setAmount] = useState([]);
    const [isExpense, setIsExpense] = useState(false);

    const generateID = () => {
        Math.round(Math.random() * 1000);
    };

    
    const handleSave = () => {
        if(!desc || !amount){
            alert('Informe a descrição e o valor!');
            return;
        } else if( amount < 1 ) {
            alert('O valor deve ser positivo');
            return;
        }
    

        const transaction = {
            id:generateID(),
            desc:desc,
            amount:amount,
            expense:isExpense,
        };

        handleAdd(transaction);

        setDesc("");
        setAmount("");
    };

  return (
    <>
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
        <Grid itens={transactionsList} setItens={setTransactionsList}/>
    </>
  )
}

export default Form;