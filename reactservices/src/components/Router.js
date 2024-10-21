import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import React, { Component } from 'react'
import Home from './Home';
import TablaMultiplicar from './TablaMultiplicar';
import NotFound from './NotFound';
import MenuRutas from './MenuRutas';

export default class Router extends Component {
    render() {
        function TablaMultiplicarElement(){
            var {minumero } = useParams();
            return <TablaMultiplicar numero={minumero}/>
        }
        return (
            <BrowserRouter>
                <MenuRutas/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/tabla/:minumero" element={<TablaMultiplicarElement/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}
