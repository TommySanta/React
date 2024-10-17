import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Component } from 'react'
import Home from './home';
import Cine from './Cine';
import Musica from './Musica';
import FormSimple from './FormSimple';
import Collatz from './Collatz';
import TablaMultiplicar from './TablaMultiplicar';
import TablaMultiplicarv2 from './TablaMultiplicarv2';
import SeleccionMultiple from './SeleccionMultiple';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cine" element={<Cine/>}/>
                    <Route path="/musica" element={<Musica/>}/>
                    <Route path="/formulario" element={<FormSimple/>}/>
                    <Route path="/collatz" element={<Collatz/>}/>
                    <Route path="/tablamultiplicar" element={<TablaMultiplicar/>}/>
                    <Route path="/tablamultiplicarv2" element={<TablaMultiplicarv2/>}/>
                    <Route path="/SeleccionMultiple" element={<SeleccionMultiple/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}
