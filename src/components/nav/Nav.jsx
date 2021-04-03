import React from "react";
import {
  Link
  , useLocation
} from "react-router-dom";
import { Menu } from '../../pages/Styles.jsx';



const Nav = () => {
  const { pathname } = useLocation();
  return (
    <>
      { pathname !== '/' && <List />}

    </>

  );
}

export default Nav;


const List = () => {
  return (

    <Menu>
      <ul className="ul ul-left">
        <li >
          <Link to="/">
            <i class="large material-icons"> arrow_back</i>
          </Link>
        </li>

      </ul>
      <ul className="ul ul-right">
        <li>
          <Link to="/Calificaciones/">Calificaciones</Link>

        </li>
        <li>
          <Link to="/Resultados">Resultados</Link>
        </li>
        <li>
          <Link to="/Soporte">Soporte</Link>
        </li>
      </ul>
    </Menu>

  );
}







