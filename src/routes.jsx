import {BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './pages/Header';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Contato from './pages/Contato';

function RoutesApp(){
 return(
    <BrowserRouter>
        <Header />
            <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/produtos" element={<Produtos/>}/>
                    <Route path="/contato" element={<Contato/>}/>
            </Routes>
    </BrowserRouter>
 )
}
export default RoutesApp;
