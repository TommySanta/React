import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import React, { Component } from 'react'
import Menu from './Menu';
import Equipos from './Equipos';
import Apuestas from './Apuestas';

export default class Router extends Component {

    render() {
        


        function EquiposElement() {
            let {idequipo} = useParams();
            return(
                <Equipos id={idequipo}/>
            )

        }
        return (
            <BrowserRouter>
            <Menu/>
                <Routes>
                    <Route path="/equipo/:idequipo" element={<EquiposElement/>}/>
                </Routes>
                <Routes>
                    <Route path="/apuestas" element={<Apuestas/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}