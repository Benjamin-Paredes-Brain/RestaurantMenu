import "./index.css"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Header } from "./components/Header/Header.jsx"
import { Navbar } from "./components/Navbar/Navbar.jsx"
import { Home } from "./components/Home/Home.jsx"
import { Menu } from "./components/Menu/Menu.jsx"
import { Postres } from "./components/Postres/Postres.jsx"
import { Bebidas } from "./components/Bebidas/Bebidas.jsx"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home/:variation" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/postres" element={<Postres />} />
        <Route path="/bebidas" element={<Bebidas />} />
        <Route path="*" element={<Navigate to={"/home/promociones"} />} />
      </Routes>
      <Navbar />
    </BrowserRouter>

  )
}

export default App
