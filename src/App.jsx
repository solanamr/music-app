import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home"
import Login from './components/login/Login'



function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
