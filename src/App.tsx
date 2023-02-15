import Navbar from "./Components/Navbar";
import "./styleNavbar.css";
import Contacto from "./Pages/Contacto";
import Promociones from "./Pages/Promociones";
import QuienesSomos from "./Pages/QuienesSomos";
import Servicios from "./Pages/Servicios";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element = {<Contacto /> } />
          <Route path="/Promociones" element = {<Promociones /> } />
          <Route path="/QuienesSomos" element = {<QuienesSomos /> } />
          <Route path="/Servicios" element = {<Servicios /> } />
        </Routes>
      </div>
    </>
  );
}

export default App;
