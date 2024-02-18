import "./index.css"
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom"
import { Header } from "./components/Header/Header.jsx"
import { Navbar } from "./components/Navbar/Navbar.jsx"
import { Home } from "./components/Home/Home.jsx"
import { Menu } from "./components/Menu/Menu.jsx"
import { Postres } from "./components/Postres/Postres.jsx"
import { Bebidas } from "./components/Bebidas/Bebidas.jsx"
import { ItemDetail } from "./components/Item/ItemDetail.jsx"

function App() {

  const HomeWrapper = () => {
    const { variation } = useParams();
    if (variation === "promociones" || variation === "recomendados") {
      return <Home />;
    } else {
      return <Navigate to="/home/promociones" />;
    }
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home/:variation" element={<HomeWrapper />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/postres" element={<Postres />} />
        <Route path="/bebidas" element={<Bebidas />} />
        <Route path="/:page/item/:id" element={<ItemDetail />} />
        <Route path="*" element={<Navigate to={"/home/promociones"} />} />
      </Routes>
      <Navbar />
    </BrowserRouter>

  )
}

export default App
