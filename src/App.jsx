import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home"
import Detail from "./components/Detail/Detail";


function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blog" element={<Detail/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
