async function fetchDataLogin(data) {
  // capitalize first letter
  const test = data.name
  const username = test.toLowerCase()
                        .trim()
                        .split(' ')
                        .map( v => v[0].toUpperCase() + v.substr(1) )
                        .join(' '); 
  // Fetch                     
  const fetchResponse = await fetch('http://localhost:3001/users/register', {
      method: 'POST',
      body: JSON.stringify({name: username, email: data.email, password: data.password }),
      headers:{'Content-Type': 'application/json'},
    })
    .then(response => response.json())
    .then(response => {return response;})
  return fetchResponse;
}

async function ValidateData (setValidatedMessage, data, e, setInitialized) {  
    const user = await fetchDataLogin(data);
    if(user.message === "There was a problem trying to register the user"){
      if(user.error.message.includes("email")){
        setValidatedMessage("Introduzca un email válido");
      }
      else if(user.error.message.includes("password")){
        setValidatedMessage("La contraseña debe contener al menos 8 caracteres");
      }
    }
    else{setValidatedMessage(user.message);}
    
    if(user.message === "Usuario creado correctamente"){
      setTimeout(() => {
        e.target.reset(); 
        setValidatedMessage("");
        setInitialized(true);
        }, 2000);
    }
  }
  export default ValidateData;