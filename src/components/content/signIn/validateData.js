import Cookies from 'universal-cookie';

async function fetchDataLogin(data) {
  const fetchResponse = await fetch('http://localhost:3001/users/login', {
      method: 'POST',
      body: JSON.stringify({ email: data.email, password: data.password }),
      headers:{ 'Content-Type': 'application/json' },
    })
    .then(response => response.json())
    .then(response => {return response;})
  return fetchResponse;
}

async function ValidateData (setInitialized, setValidatedMessage, data, e) {  
    const user = await fetchDataLogin(data);
    console.log(user);
    setValidatedMessage(user.message);
    if(user.message === "Sesión iniciada correctamente"){
      // SetCockies
      const cookies = new Cookies();
      cookies.set('name', user.user.name, {path: '/'});
      cookies.set('token', user.token, {path: '/'});

      // Redirect
      setTimeout(() => {
        e.target.reset(); 
        setValidatedMessage("");
        setInitialized(true);
        }, 2000);
    }
  }
  export default ValidateData;