import React, { useEffect, useState, Fragment, useRef} from 'react';
import styled from '@emotion/styled';
import axios from 'axios';


const H = styled.h3`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.5rem;    
    display: block;
`;

const Label = styled.label`
    font-family: 'Arial', cursive;
    color: #FFF;      
    display: block;
    float:left;
    margin: 6px 10px;
`;

const Select = styled.select`
    width: 100%;
    display:block;
    padding: 0.5rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`

const Boton = styled.input`
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

const Formulario = ({handleSubmit}) => {
    
    // state del listado de toppings
    const [ initialToppingsList, setToppingsList ] = useState([])

    // Ejecutar llamado a la API
    useEffect(() => {
        const consultarAPI = async () => {
            
            const url = 'http://localhost:5000/toppings';

            const resultado = await axios.get(url);
            setToppingsList(resultado.data);
        }
        consultarAPI();
    }, []);

    const calcTotal = () =>{
    let arrayCbs = []
    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
    for (let i = 0; i < checkboxes.length; i++) {
        arrayCbs.push(parseInt(checkboxes[i].value))
    }
        
        handleSubmit(arrayCbs)
    }


    return ( 
        <Fragment>
            <H>Café $50 / Elige tus toppings</H>
            
            {initialToppingsList.map(topping => ( 
            <div>             
            <Label>{topping.nombre}
            <input type="checkbox" key={topping.id} value={topping.id} /></Label>
            </div>
            ))}
            <Boton
                type="submit"
                value="Preparar Café"
                onClick={calcTotal}
            />
        </Fragment>
     );
}
 
export default Formulario;

