import axios from 'axios';



async function AllData(props) {
const {setPeople,input,page,people} = props;

  // console.log('buscar:'+input+';');
  // console.log('en la pagina:'+page+';');
  if(input == ""){
       return await axios.get(`https://randomuser.me/api/?page=${page}&seed=abc&results=9`)
      .then(res => {
        const data = res.data;
        setPeople(data.results);
      })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
  console.log('datos obtenidos !');
  });
  }else{
    let busqueda;
    return await axios.get(`https://randomuser.me/api/?page=${page}&seed=abc&results=9`)
    .then(res=>{ // get data
      const data = res.data;
      busqueda = data
    })
    .then( ()=>{ // filter
        console.log(busqueda);
        const filtered = busqueda.results.filter((item) => {
      if (item.name.first.includes(input)) {
        return item
      }
    })
      
      setPeople(filtered)  
    })
  }
}


function deleteFromData(cell,people,setPeople) {
    var total = people.filter(function (e) {
      return e.cell !== cell
    });
    console.log('nuevos valores aca');
    setPeople(total)
  }



let AxiosFetch;
export default AxiosFetch = { AllData ,deleteFromData};
