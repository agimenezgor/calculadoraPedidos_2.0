import React from 'react';

function ValidateData (setValidatedMessage) {
    /* const data = await fetch('http://localhost:3001/users/login', {
      method: 'post',
      body: JSON.stringify({email: payload.email, password: payload.password})
    })
    const us = await data.json()
    setValidatedMessage(us.message); */
    setValidatedMessage("Sesión iniciada correctamente");
    /* if(us.message === "Sesión iniciada correctamente"){
        //props.setUser(us.user);
        //console.log(us.user)
        
    } */
  }
  export default ValidateData;