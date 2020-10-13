import React,{Fragment} from 'react'
import styled from '@emotion/styled'

const ResultadoDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;

const Title = styled.p`
    font-size: 20px;
    span {
        font-weight:bold;
    }
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;        
    display: block;
`
const Input = styled.input`
    border: 1px solid #eee;
    border-radius: 0.25rem;
    background-color: transparent;
    outline: none;
    padding: 12px 3px 12px 15px;
    margin-left: 10px;
    font-size: 16px;
    transition: all 0.2s ease;
    z-index: 500;
`
const BotonPagar = styled.input`
    margin-top: 5px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;
    &:hover {
        background-color: #326AC0;
        cursor:pointer;
    }
`


const Cotizacion = ({total, billete, handlePago}) => {

    const calcPago = () =>{

            debugger
            handlePago({total}, {billete})
        }




    return ( 
        <Fragment>
        {total ? 
        <ResultadoDiv>
          <Title>Total a pagar $<span>{total}</span> </Title>
          <Title>Pagar con $<Input type="text" value="100" /> </Title>
          <BotonPagar
                type="submit"
                value={billete} 
                onClick={calcPago}
            />

        </ResultadoDiv> : null}


        </Fragment>
     );
}
 
export default Cotizacion;