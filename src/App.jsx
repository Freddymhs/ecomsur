import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  , useParams,
  useRouteMatch
} from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import Nav from './components//nav/Nav.jsx';
import RatingPage from './pages/RatingPage.jsx';

function App() {

  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/Soporte">
          <SupporPage />
        </Route>
        <Route path="/Calificaciones">
          <RatingPage />
        </Route>
        <Route path="/Resultados">
          <ResultPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>

  );
}


function SupporPage() {
  return <h2>SupporPage</h2>;
}
function ResultPage() {
  return <h2>Ratingpage</h2>;
}



export default App;
