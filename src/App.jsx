import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './templates/Header'
import Main from './page/Main'
import Home from './page/Home'
import Login from './page/Login'
import Register from './page/Register'
import Footer from './templates/Footer';
import Cart from './page/Cart';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" 
        element={<Main />} />
        <Route path="/Home" 
        element={<><Header/> <Home/> <Footer/></>}/>
        <Route path="/Login" 
        element={<Login />} />
        <Route path="/Register" 
        element={<Register />} />
        <Route path="/Cart" 
        element={<Cart />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
