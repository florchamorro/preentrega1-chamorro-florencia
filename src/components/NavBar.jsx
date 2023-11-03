import "./NavBar.css";
import Card from "./CartWidget";

export default function NavBar() {
  return ( 
    <div>
      <nav className="navbar">
        <ul className="nav-ul">
          <li className="nav-list-item tamImg">
            <img className="imgTam" src="src/assets/img/Logo.png" alt="" />
          </li>
          <li className="nav-list-item">
            <a href="#" className="nav-href">Inicio</a>
          </li>
          <li className="nav-list-item">
            <a href="#" className="nav-href">Nosotros!</a>
          </li>
          <li className="nav-list-item">
            <a href="#" className="nav-href">Mas clases!</a>
          </li>
          <Card />
        </ul>
      </nav>
    </div>
  );
}