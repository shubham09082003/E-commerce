import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Signup } from './pages/SignUp';
import './index.css';
import { SignIn } from './pages/SignIn';
import { Navbar } from './component/Navbar';
import { Product } from './pages/Product';
import { useState } from 'react';
import { AdminSignIn } from './pages/AdminSigin';
import { AdminHome } from './pages/AdminHome';
import { AddProduct } from './component/AddProduct';
import { UpdateProduct } from './component/UpdateProduct';

function App() {
  const [filter, setFilter] = useState("");

  return (
    <BrowserRouter>
      <Navbar setFilter={setFilter}/>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/home' element={<Home filter={filter}/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/in' element={<AdminSignIn/>}/>
        <Route path='/admin' element={<AdminHome/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/update/:id' element={<UpdateProduct/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
