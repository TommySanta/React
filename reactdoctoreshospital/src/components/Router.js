import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import MenuHospitales from './MenuHospitales'
import Home from './Home'
import Doctores from './Doctores'
import Doctoresv2 from './Doctoresv2'

export default class Router extends Component {
    render() {
        function DoctoresElement (){
            var {idhospital} = useParams();
            return <Doctores idhospital={idhospital}/>
        }
        function DoctoresElementv2 (){
            var {idhospital} = useParams();
            return <Doctoresv2 idhospital={idhospital}/>
        }
        return (
            <BrowserRouter>
                <MenuHospitales/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/doctores/:idhospital" element={<DoctoresElement/>} />
                    <Route path="/doctoresv2/:idhospital" element={<DoctoresElementv2/>} />
                </Routes>
            </BrowserRouter>
        )
    }
}
