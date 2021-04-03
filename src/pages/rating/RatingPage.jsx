import {
  useParams,
  useRouteMatch
} from "react-router-dom";
import '../estilos.css';
import { ContainerMain, Container__input, Container__aproved, Card } from '../Styles.jsx';

/*my functions axios*/
import AxiosFetch from '../../libs/AxiosFetch.js';
import { useEffect, useState } from "react";

const RatingPage = () => {
  /*datos iniciales y globales*/
  const [globalData, setglobalData] = useState(
    {
      input: 'vacio',
      page: 1,
    }
  );
  /*estados individuales */
  const [input, setSearchInput] = useState("vacio");
  const [page, setPage] = useState(1);
  const [people, setPeople] = useState({})


  //pagination
  const capurePageValue = (string) => { /*input search*/
    if (string === "back" && page > 1) { // minimo valor del estado
      setPage(page - 1)
    }
    if (string === "next" && page < 100) { //maximo valor del estado
      setPage(page + 1)
    }
    setglobalData(prevState => ({ ...prevState, page })) /*actualiza datos globales + page */
  }

  //input search
  const captureInputValue = (event) => { /*input search*/
    setSearchInput(event.target.value)
  }
  const saveInputValue = () => { /*actualiza datos globales + input search*/
    setglobalData(prevState => ({ ...prevState, input }))
  }

  /*metodos de para busqueda y filtros*/


  /*metodos*/

  useEffect(() => {   /* document on ready*/
    // setpeople(AxiosFetch.AllData())
    console.log(people);

    // if (searchInput !== 'vacio') {
    //   console.log("busqueda basica");
    // } else {
    //   console.log("busqueda de nombre...");
    // }
    console.log('los datos van cambiando');



  }, [globalData])
  return (

    <ContainerMain>
      {/* buscador  */}
      <Container__input>
        <div className="content__search" >
          <input type="text" placeholder="Buscar.." name="search" className="form_input"
            onChange={event => captureInputValue(event)} >
          </input>
          <button type="submit" className="form_icon" onClick={
            () => { saveInputValue() }
          }>
            <i class="material-icons">search</i>
          </button>
        </div>
        <button onClick={() => capurePageValue("back")}>prev</button>
        <h1>{page}</h1>
        <button onClick={() => capurePageValue("next")}>next</button>
      </Container__input>


      <Container__aproved>
        <h1 className="container_title">Calificados</h1>

        <div className="container_wrapper">

          <Card>
            <button>X</button>
            <h4>Nombre</h4>
            <p>xxx  Puntos</p>
            <img src="https://picsum.photos/id/237/200/300"
              alt="" class="gallery_img" />
          </Card>
        </div>
      </Container__aproved>



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
