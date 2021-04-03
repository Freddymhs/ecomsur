
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './pages/home/HomePage.jsx';
import Nav from './components//nav/Nav.jsx';
import RatingPage from './pages/rating/RatingPage.jsx';

function App() {

  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/Soporte">
          <SupporPage />

        </Route>

        {/* path to  dinamic page */}
        <Route path="/Calificaciones/:pagina" children={<RatingPage />}></Route>
        {/* path to specific page  */}
        <Route path="/Calificaciones/" >   <RatingPage />   </Route>



        <Route path="/Resultados">
          <ResultPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router >

  );
}



function ResultPage() {
  return <h2>Ratingpage</h2>;
}
function SupporPage() {
  return <h2>SupporPage</h2>;
}


export default App;
