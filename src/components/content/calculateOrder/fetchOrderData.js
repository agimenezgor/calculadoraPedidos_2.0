import Cookies from 'universal-cookie';
const cookies = new Cookies();
async function fetchOrderData(data, supplier) {         
    const fetchResponse = await fetch(`http://localhost:3001/order/${supplier}/${data}`, {
        method: 'GET',
        headers: {
          'Content-Type':'application/json',
          'Authorization': `BEARER ${cookies.get('token')}`
        },
      })
      .then(response => response.json())
      .then(response => {return response;})
    return fetchResponse;
  }

  export default fetchOrderData;