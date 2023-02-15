import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Laboratorio Mèdico del Campanario
      </Link>
      <ul>
        <li>
          <Link to="/Quienes somos">Quienes somos</Link>
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
    </nav>
  );
};
