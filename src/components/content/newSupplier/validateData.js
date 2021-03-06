import Cookies from 'universal-cookie';
const cookies = new Cookies();

async function ValidateData (setValidatedMessage, data, e, setInitilized) {  
    const supplier = await fetchNewSupplier(data)
    setValidatedMessage(supplier.message);
    if(supplier.message !== "El número de proveedor ya existe en la base de datos" && 
    supplier.message !== "Imposible conectar con el servidor. Inténtelo de nuevo más tarde"){
      setTimeout(() => {
        e.target.reset(); 
        setValidatedMessage("");
        setInitilized(true);
        }, 3000);
    }
  }

  async function fetchNewSupplier(data) {
    // Fetch    
    try {
      const fetchResponse = await fetch('http://localhost:3001/suppliers', {
        method: 'POST',
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
        if(response.message === "There was a problem trying to register the Supplier"){
          if(response.error.code === 11000){
            response.message = "El número de proveedor ya existe en la base de datos";
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