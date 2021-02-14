import Cookies from 'universal-cookie';
const cookies = new Cookies();

async function ValidateData (setValidatedMessage, data, e, setInitilized, supplierNumber) {  
    const reference = await fetchNewReference(data, supplierNumber)
    setValidatedMessage(reference.message);
    if(reference.message !== "El número de referencia ya existe en la base de datos" && 
    reference.message !== "Imposible conectar con el servidor. Inténtelo de nuevo más tarde"){
      setTimeout(() => {
        e.target.reset(); 
        setValidatedMessage("");
        setInitilized(true);
        }, 3000);
    }
  }

  async function fetchNewReference(data, supplierNumber) {
    // Fetch    
    try {
      const fetchResponse = await fetch(`http://localhost:3001/references/${supplierNumber}`, {
        method: 'POST',
        body: JSON.stringify({
          name: data.name, number: data.number, conditioning: data.conditioning, facing: data.facing, sales: data.sales}),
        headers: {
          'Content-Type':'application/json',
          'Authorization': `BEARER ${cookies.get('token')}`
        },
      })
      .then(response => response.json())
      .then(response => {
        if(response.message === "There was a problem trying to register the reference"){
          if(response.error.code === 11000){
            response.message = "El número de referencia ya existe en la base de datos";
          }
        }
        return response;
      })
    return fetchResponse;
    } catch (error) {
      let response = {message : "Imposible conectar con el servidor. Inténtelo de nuevo más tarde"};
      return response;
    }         
    
  }

  export default ValidateData;