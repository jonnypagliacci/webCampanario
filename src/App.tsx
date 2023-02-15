import Navbar from "./Components/Navbar";
import "./styleNavbar.css";
import Principal from "./Pages/Principal";
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
          <Route path="/Principal" element = {<Principal /> } />
          <Route path="/Contacto" element = {<Contacto /> } />
          <Route path="/Promociones" element = {<Promociones /> } />
          <Route path="/Servicios" element = {<Servicios /> } />
          <Route path="/QuienesSomos" element = {<QuienesSomos /> } />
        </Routes>
      </div>
    </>
  );
}

export default App;
