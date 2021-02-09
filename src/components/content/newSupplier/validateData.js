import Cookies from 'universal-cookie';
const cookies = new Cookies();

async function ValidateData (setValidatedMessage, data, e, setInitilized) {  
    console.log("datos del usuario: ", data);
    const supplier = await fetchNewSupplier(data)
    console.log("despues del fetch: ", supplier)
    setValidatedMessage("Proveedor registrado correctamente");
    setTimeout(() => {
      e.target.reset(); 
      setValidatedMessage("");
      setInitilized(true);
      }, 3000);
  }

  async function fetchNewSupplier(data) {
    // Fetch             
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
      .then(response => {return response;})
    return fetchResponse;
  }

  export default ValidateData;