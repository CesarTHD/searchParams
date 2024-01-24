import { useState } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';

import Navbar from './components/Navbar';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import SearchBar from './components/SearchBar';
import Search from './pages/Search';

function App() {
  
  return (
    <>
      <div>
        <h1>React Router</h1>
        <BrowserRouter>
          <Navbar />
          <SearchBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/products/:id/info' element={<Info />} />
            <Route path='/products/:id' element={<Product />} />
            <Route path='/search' element={<Search />} />
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
