import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import React, { Component } from 'react'
import HomeDepartamentos from './HomeDepartamentos';
import MenuDepartamentos from './MenuDepartamentos';
import CreateDepartamentos from './CreateDepartamentos';
import DetalleDepartamento from './DetalleDepartamento';
import UpdateDepartamento from './UpdateDepartamento';

export default class Router extends Component {

    render() {
        function DetalleDepartamentoElement() {
            let {iddepartamento} = useParams();
            return(
                <DetalleDepartamento id={iddepartamento}/>
            )

        }

        function UpdateDepartamentoElement(){
            let {id, nombre, localidad} = useParams();
            return (<UpdateDepartamento id={id} nombre={nombre} localidad={localidad}/>)
        }
        return (
            <BrowserRouter>
            <MenuDepartamentos/>
                <Routes>
                    <Route path="/" element={<HomeDepartamentos/>}/>
                    <Route path="/create" element={<CreateDepartamentos/>}/>
                    <Route path="/detalle/:iddepartamento" element={<DetalleDepartamentoElement/>}/>
                    <Route path="/update/:id/:nombre/:localidad" element={<UpdateDepartamentoElement/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}