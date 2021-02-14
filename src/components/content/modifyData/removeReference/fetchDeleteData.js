import Cookies from 'universal-cookie';
const cookies = new Cookies();
async function fetchData(supplier, number) {         
    const fetchResponse = await fetch(`http://localhost:3001/references/${supplier}/${number}`, {
        method: 'DELETE',
        headers: {
          'Content-Type':'application/json',
          'Authorization': `BEARER ${cookies.get('token')}`
        },
      })
      .then(response => response.json())
      .then(response => {return response;})
    return fetchResponse;
  }

  export default fetchData;