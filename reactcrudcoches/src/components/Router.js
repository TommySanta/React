import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import React, { Component } from 'react'
import HomeCoches from './HomeCoches';
import CreateCoches from './CreateCoches';
import DeleteCoches from './DeleteCoches';
import UpdateCoches from './UpdateCoches';
import MenuCoches from './MenuCoches';
import DetalleCoches from './DetalleCoches';

export default class Router extends Component {

    render() {
        function DetalleCocheElement() {
            let {idcoche} = useParams();
            return(
                <DetalleCoches id={idcoche}/>
            )

        }

        function UpdateCochesElement(){
            let {id, marca, modelo,conductor} = useParams();
            return (<UpdateCoches id={id} marca={marca} modelo={modelo} conductor={conductor}/>)
        }

        // function DeleteDepartamentoElement() {
        //     let {iddepartamento} = useParams();
        //     return(
        //         <DeleteDepartamento id={iddepartamento}/>
        //     )

        // }
        return (
            <BrowserRouter>
            <MenuCoches/>
                <Routes>
                    <Route path="/" element={<HomeCoches/>}/>
                    <Route path="/create" element={<CreateCoches/>}/>
                    <Route path="/detalle/:idcoche" element={<DetalleCocheElement/>}/>
                    <Route path="/update/:id/:marca/:modelo/:conductor" element={<UpdateCochesElement/>}/>
                    {/* <Route path="/delete/:iddepartamento" element={<DeleteCoches/>}/> */}
                </Routes>
            </BrowserRouter>
        )
    }
}