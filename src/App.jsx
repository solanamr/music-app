import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home"
import Login from './components/login/Login'
import Register from "./components/register/Register"





function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
