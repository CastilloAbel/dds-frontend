import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Inicio from './components/Inicio.jsx';
import Articulos from './components/articulos/Articulos.jsx'
import Menu from './components/menu.jsx';
import Footer from './components/footer.jsx';
import ArticulosFamilias from './components/ArticulosFamilias.jsx';
import './App.css';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <div className="divBody">
          <Routes>
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/articulosfamilias" element={<ArticulosFamilias />} />
            <Route path="/articulos" element={<Articulos/>} />
            <Route path="*" element={<Navigate to="/Inicio" replace />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}
