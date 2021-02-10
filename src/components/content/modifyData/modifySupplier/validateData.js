import Cookies from 'universal-cookie';
const cookies = new Cookies();

async function ValidateData (setValidatedMessage, data, e, setInitilized, number) {  
    const supplier = await fetchModifySupplier(data, number)
    console.log("data en validateData: ", data)
    setValidatedMessage(supplier.message);
    if(supplier.message !== "There was a problem trying to update the supplier"){
      setTimeout(() => {
        e.target.reset(); 
        setValidatedMessage("");
        setInitilized(true);
        }, 3000);
    }
  }

  async function fetchModifySupplier(data, number) {
    // Fetch    
    try {
      const fetchResponse = await fetch(`http://localhost:3001/suppliers/${number}`, {
        method: 'PUT',
        body: JSON.stringify({
          name: data.name, number: data.number, days: data.days, calculateType: data.calculateType, 
          money: data.money, minKilos: data.minKilos, maxKilos: data.maxKilos, minPalets: data.minPalets, maxPalets: data.maxPalets}),
        headers: {
          'Content-Type':'application/json',
          'Authorization': `BEARER ${cookies.get('token')}`
        },
      })
      .then(response => response.json())
      .then(response => {
        console.log("respuesta en fetch", response)  
        return response;})
    return fetchResponse;
    } catch (error) {
      let response = {message : "Imposible conectar con el servidor. Inténtelo de nuevo más tarde"};
      return response;
    }         
    
  }

  export default ValidateData;