import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import Landing from './pages/Landing'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import { ToastContainer } from 'react-toastify'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App
