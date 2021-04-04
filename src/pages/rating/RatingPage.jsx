import {
  useParams,
  useRouteMatch
} from "react-router-dom";
import '../estilos.css';
import { ContainerMain, Container__input, Container__aproved, Card } from '../Styles.jsx';
import { useEffect, useState } from "react";

import AxiosFetch from '../../libs/AxiosFetch.js';/*my functions axios*/
// import axios from 'axios';

const RatingPage = () => {
  let { pagina } = useParams(); // catch some params in URL "Calificaciones    /  :pagina"

  /*individual state */
  const [input, setSearchInput] = useState("");
  const [page, setPage] = useState(pagina ? pagina : 1);// exist  or not  param :pagina 
  const [people, setPeople] = useState([]);


  /*initial and global state*/
  let globalData = { input: input, page: page };

  //page value
  function capturePageValue(string) {
    if (string === "back" && page > 0) { // min value
      setPage(parseInt(page) - 1)
    }
    if (string === "next" && page < 100) { //max value
      setPage(parseInt(page) + 1)
    }
    globalData = { ...globalData, page }
  }

  //search value 
  function captureInputValue(event) {/*input search*/
    setSearchInput(event.target.value)
  }
  function saveInputValue() {  /*globalData  + input search*/
    globalData = { ...globalData, input }
  }

  /*methods*/
  //get all data on load page
  useEffect(() => {
    // AxiosFetch.AllData({ setPeople, input: input, pagina: page });
  }, []);

  // 

  // 
  // update variable on running
  // function match() {
  //   let qt = people.filter((item) => {
  //     if (item.name.first.includes(input)) {
  //       console.log('match');
  //       return item
  //     }
  //   })
  //   setPeople(qt)

  // }
  // buscador
  useEffect(() => {


    let res = AxiosFetch.AllData({ setPeople, input: input, page: page, people: people });

    // match()




  }, [input, page])

  return (

    < ContainerMain >

      < Container__input >
        <div className="content__search" >
          <input type="text" placeholder="Buscar.." name="search" id="inp" className="form_input"
            onChange={event => captureInputValue(event)} >
          </input>
          <button type="submit" className="form_icon" onClick={
            () => { saveInputValue() }
          }>
            <i className="material-icons">search</i>
          </button>
        </div>
        <button onClick={(e) => capturePageValue("back")}>prev</button>
        <h1>{globalData.page}</h1>
        <button onClick={(e) => capturePageValue("next")}>next</button>
      </Container__input >


      <Container__aproved>
        <h1 className="container_title">Calificados</h1>

        <div className="container_wrapper">

          {people.map((v) =>
            <Card>
              <button> X </button>
              <h4>{v.name.first}</h4>
              <p>{v.location.country}</p>
              <img src={v.picture.large}
                alt="" class="gallery_img" />
            </Card>
          )}

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
