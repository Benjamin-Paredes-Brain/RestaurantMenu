import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar/Navbar.jsx"
import { Home } from "./components/Home/Home.jsx"
import { Menu } from "./components/Menu/Menu.jsx"
import { Postres } from "./components/Postres/Postres.jsx"
import { Bebidas } from "./components/Bebidas/Bebidas.jsx"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/postres" element={<Postres />} />
        <Route path="/bebidas" element={<Bebidas />} />
      </Routes>
      <Navbar />
    </BrowserRouter>

  )
}

export default App
