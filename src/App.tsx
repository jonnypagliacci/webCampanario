import NavBarUp from  './Components/NavBarUp'
import './EstilosComponentes/styleNavBarUp.css'
import Navbar from "./Components/Navbar";
import WatsButton from "./Components/Wats"
import "./EstilosComponentes/styleNavbar.css";
import Principal from "./Pages/Principal";
import Contacto from "./Pages/Contacto";
import Promociones from "./Pages/Promociones";
import QuienesSomos from "./Pages/QuienesSomos";
import Servicios from "./Pages/Servicios";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBarUp />
      <Navbar />
      <WatsButton
        phoneNumber="5214427157000"
        placeholder="Escriba su mensaje" 
        chatMessage= "Hola, en que te puedo ayudar?"
        statusMessage= ' '/>
      <div>
        <Routes>
          <Route path="/Principal" element={<Principal />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Promociones" element={<Promociones />} />
          <Route path="/Servicios" element={<Servicios />} />
          <Route path="/QuienesSomos" element={<QuienesSomos />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
