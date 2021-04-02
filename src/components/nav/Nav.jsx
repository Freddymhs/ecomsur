import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  , useParams, useRouteMatch, useLocation
} from "react-router-dom";

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

    <nav className="nav">
      <ul className="ul ul-left">

        <li >
          <Link to="/">Back</Link>
        </li>

      </ul>
      <ul className="ul ul-right">
        <li>
          <Link to="/Calificaciones">Calificaciones</Link>

        </li>
        <li>
          <Link to="/Resultados">Resultados</Link>
        </li>
        <li>
          <Link to="/Soporte">Soporte</Link>
        </li>
      </ul></nav>

  );
}







