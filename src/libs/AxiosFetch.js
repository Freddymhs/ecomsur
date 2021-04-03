import axios from 'axios';


async function AllData() {

  let resQuery = await axios.get('https://randomuser.me/api/?results=15')
  .then(function (response) { 
    console.log('consulta realizada');
  })
  .catch(function (err) {
    console.log('errores en la consulta');
    console.log(err)
  })


return resQuery;
}




let AxiosFetch;
export default AxiosFetch = { AllData };
