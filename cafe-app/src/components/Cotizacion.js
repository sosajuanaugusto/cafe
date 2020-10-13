import React, {Fragment, useState} from 'react'
import styled from '@emotion/styled'
import Error from './Error'

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
    color: #fff;
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


const Cotizacion = ({total}) => {
    
    const [ pago, setPago] = useState(0)
    const [ error, setError] = useState(false);
    const [ mensaje, setMensaje] = useState("");
    const [validado, setValidado] = useState(false);

    const handleChange = e => {
        setPago(
            e.target.name = parseInt(e.target.value)            
        )
        setError(false);
        
    }

    const agregarPago = e => {
        e.preventDefault()
        
        if(isNaN(pago)){ 
            setMensaje("El campo es obligatorio");
            setError(true);
            return;
        }
        if(pago<total){ 
            setMensaje("El pago no puede ser menor al total");
            setError(true);
            return;
        }
        setError(false);
        setValidado(true);
       
    }


        

    return ( 
        <Fragment>
        <form
      //   onSubmit={agregarPago}
        >
        {total ? 
        <ResultadoDiv>
          <Title>Total a pagar $<span>{total}</span> </Title>

          <Title>Pagar con $<Input type="number"
                                   name="pago"                                   
                                   onChange={handleChange}
                                   /> 
          </Title>
          {error ? <Error mensaje={mensaje} /> : null}         

          <BotonPagar
                type="submit"
                value="Pagar"
                onClick={agregarPago}                
            />

        {validado ? <Title>Su vuelto es ${pago-total}. Gracias por su compra</Title> : null}

        </ResultadoDiv> : null}
        </form>
        
        

        </Fragment>
     );
}
 
export default Cotizacion;