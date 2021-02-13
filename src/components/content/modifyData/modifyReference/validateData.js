import Cookies from 'universal-cookie';
const cookies = new Cookies();

async function ValidateData (setValidatedMessage, data, e, setInitilized, number) {  
  /* setValidatedMessage("Referencia actualizada correctamente"); */
  setValidatedMessage("Error");
  /* const reference = await fetchModifyReference(data, number)
    setValidatedMessage(reference.message);
    if(reference.message !== "There was a problem trying to update the reference"){
      setTimeout(() => {
        e.target.reset(); 
        setValidatedMessage("");
        setInitilized(true);
        }, 3000);
    } */
  }

  async function fetchModifyReference(data, number) {
    // Fetch    
    try {
      const fetchResponse = await fetch(`http://localhost:3001/reference/${number}`, {
        method: 'PUT',
        body: JSON.stringify({
            name: data.name, number: data.number, conditioning: data.conditioning, facing: data.facing, sales: data.sales}),
        headers: {
          'Content-Type':'application/json',
          'Authorization': `BEARER ${cookies.get('token')}`
        },
      })
      .then(response => response.json())
      .then(response => {
        return response;})
    return fetchResponse;
    } catch (error) {
      let response = {message : "Imposible conectar con el servidor. Inténtelo de nuevo más tarde"};
      return response;
    }         
    
  }

  export default ValidateData;