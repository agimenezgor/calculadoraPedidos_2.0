function ValidateData (setValidatedMessage, data, e, setInitilized) {  
    console.log(data);
    setValidatedMessage("Proveedor registrado correctamente");
    setTimeout(() => {
      e.target.reset(); 
      setValidatedMessage("");
      setInitilized(true);
      }, 3000);
  }
  export default ValidateData;