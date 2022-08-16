import React from 'react'
import { Button } from '@mui/material'
import HomeMapa from './HomeMapa'
import { useState } from 'react'
function Buscador() {

    const [mapa, setMapa] = useState([]);
    

    const handleBuscador = () => {
        setMapa(mapa.push(<HomeMapa />))
    }


  return (
    <div className='container text-center'>
        <div className="row">
            <div className="col-12">
                <h1>Conoce nuestra <b>cobertura</b></h1>
                <p></p>
                <h3>Selecciona tu país</h3>
            </div>
            <div className="col-12 align-content-center">
                <Button variant="contained" color="primary">Argentina</Button>
                <Button variant="contained" color="primary">Mexico</Button>
                <Button variant="contained" color="primary">Chile</Button>
                <Button variant="contained" color="primary">Paraguay</Button>
                <Button variant="contained" color="primary">Uruguay</Button>
                <Button variant="contained" color="primary">Colombia</Button>
                <Button variant="contained" color="primary">Brazil</Button>
            </div>
        </div>
        <HomeMapa />
    </div>
    
  )
}

export default Buscador;