import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/Principal" className="site-title">
        Laboratorio Mèdico del Campanario
      </Link>
      <ul>
        <li>
          <Link to="/QuienesSomos">Quienes somos</Link>
        </li>
        <li>
          <Link to="/Servicios">Servicios</Link>
        </li>
        <li>
          <Link to="/Promociones">Promociones</Link>
        </li>
        <li>
          <Link to="/Contacto">Contacto</Link>
        </li>
      </ul>
        <Outlet />
    </nav>
  );
};



