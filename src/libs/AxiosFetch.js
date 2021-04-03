import axios from 'axios';



async function AllData(props) {
const {setPeople} = props;
     return await axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        
        
        const persons = res.data;
        setPeople({ persons });
      })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
  console.log('datos obtenidos !');
   
  });

    
  
}




let AxiosFetch;
export default AxiosFetch = { AllData };
