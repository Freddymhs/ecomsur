import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  , useParams,
  useRouteMatch
} from "react-router-dom";
import './estilos.css';
import { ContainerMain, Container__input } from './Styles.jsx';

const RatingPage = () => {
  let match = useRouteMatch();
  return (
    // <div>
    //   <ul>

    //     <li>
    //       <Link to={`${match.url}/components`}>Components</Link>
    //     </li>
    //     <li>
    //       <Link to={`${match.url}/props-v-state`}>
    //         Props v. State
    //       </Link>
    //     </li>
    //   </ul>


    //   <Switch>
    //     <Route path={`${match.path}/:topicId`}>
    //       <Topic />
    //     </Route>
    //     <Route path={match.path}>
    //       <h3>Please select a topic.</h3>
    //     </Route>
    //   </Switch>
    // </div>
    <ContainerMain>
      {/* buscador  */}
      <Container__input>
        <div className="content__search" >
          <input type="text" placeholder="Buscar.." name="search" className="form_input" >
          </input>
          <button type="submit" className="form_icon" >
            <i class="material-icons">search</i>
          </button>
        </div>
      </Container__input>


      <div className="container__aproved">
        <h1 className="wrapper_title">Calificados</h1>
        <div className="wrapper">
          <div className="box">
            <button>X</button>
            <h4>Nombre</h4>
            <p>xxx  Puntos</p>
            <img src="https://picsum.photos/id/237/200/300"
              alt="" class="gallery_img" />
          </div>
          <div className="box">
            <button>X</button>
            <h4>Nombre</h4>
            <p>xxx  Puntos</p>
            <img src="https://picsum.photos/id/237/200/300"
              alt="" class="gallery_img" />
          </div>
          <div className="box">
            <button>X</button>
            <h4>Nombre</h4>
            <p>xxx  Puntos</p>
            <img src="https://picsum.photos/id/237/200/300"
              alt="" class="gallery_img" />
          </div>
          <div className="box">
            <button>X</button>
            <h4>Nombre</h4>
            <p>xxx  Puntos</p>
            <img src="https://picsum.photos/id/237/200/300"
              alt="" class="gallery_img" />
          </div>
          <div className="box">
            <button>X</button>
            <h4>Nombre</h4>
            <p>xxx  Puntos</p>
            <img src="https://picsum.photos/id/237/200/300"
              alt="" class="gallery_img" />
          </div>
          <div className="box">
            <button>X</button>
            <h4>Nombre</h4>
            <p>xxx  Puntos</p>
            <img src="https://picsum.photos/id/237/200/300"
              alt="" class="gallery_img" />
          </div>
          <div className="box">
            <button>X</button>
            <h4>Nombre</h4>
            <p>xxx  Puntos</p>
            <img src="https://picsum.photos/id/237/200/300"
              alt="" class="gallery_img" />
          </div>




        </div>
        {/*  */}



        {/* <div className="gallery_card" style={{ backgroundColor: 'red' }} >
            aca va una foto
            <button>tambien esto</button>
            <img src="https://picsum.photos/200/300?grayscale"
              alt="" class="gallery_img" />
            <p>sdadasda</p>
          </div> */}




        {/*  */}
      </div>
      <div className="container__removed" style={{ backgroundColor: 'white' }}>
        <h1 className="wrapper_title">Decalificados</h1>

      </div>
      <div className="container__footer">
        test front-end
      </div>









    </ContainerMain >
  );
}

export function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}
export default RatingPage;




  // <div className="content__search" >
  //       {/* <input type="text" placeholder="Search.." name="search" className="form_input" >

  //       </input>
  //       <button type="submit" className="form_icon">
  //         <i class="material-icons">search</i>
  //       </button> */}
  //       el buscador
  //     </div>