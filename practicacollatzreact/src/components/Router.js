import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useParams } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './Home';
import NotFound from './NotFound';
import Collatz from './Collatz';

export default class Router extends Component {
    render() {
        function NumeroCollatz(){
            var {auxnum} = useParams();
            return <Collatz numeroparam={auxnum}/>
        }
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/collatz/:auxnum" element={<NumeroCollatz/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}
