import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import imagen from './cafe.png';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width:992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 2rem;
`;
const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align:left;
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 30px;
  margin-top: 20px;
  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display:block;
  }
`;

function App() {
  
  const [total, setTotal] = useState();
  const [cargando, guardarCargando] = useState(false);


const handleSubmit = async (list) => {

          const url = `http://localhost:5000/selected`;
          
          const response = await axios.post(url, {"list" : list})
          // mostrar el spinner
          guardarCargando(true);

          setTimeout(() => {

            // cambiar el estado de cargando
            guardarCargando(false);

            // guardar cotizacion
            setTotal(response.data);            
          }, 2000);

          }
       

  // Mostrar spinner o resultado
  const componente = (cargando) ? <Spinner /> :  <Cotizacion total={total} />

  return (
    <Contenedor>
        <div>
          <Imagen 
            src={imagen}
            alt="imagen Café"
          />
        </div>
        <div>
            <Heading>Máquina expendedora de café</Heading>

            <Formulario               
              handleSubmit={handleSubmit}
            />

            {componente}
            
        </div>
    </Contenedor>
  );
}

export default App;