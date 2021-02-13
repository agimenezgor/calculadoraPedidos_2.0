import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import swal from 'sweetalert';

function PrintValidatedMessage(props) {
    let initMessage = false;
    if(props.message !== ""){
        initMessage = true;
    }
    const [redirecting, setRedirecting] = useState(false);

    const showAlert = () => {
        if(props.message === "Referencia actualizada correctamente"){
            swal({
              title: "Referencia actualizada",
              text: "Operación realizada con éxito",
              icon: "success",
              timer: 2000,
              button: {
                text: "Aceptar",
              }
            })
            .then(() => {setRedirecting(true)})
        }
        else{
            swal({
                title: "Error",
                text: "No podemos actualizar la referencia. Inténtalo más tarde",
                icon: "error",
                button: "Aceptar",
                timer: 2000
              })
              .then(() => {setRedirecting(true)})
        }
    }
    return (
      <div>
        {redirecting === false && initMessage === true ? showAlert(): (<span></span>)}
        {redirecting === true ? (<Redirect to={"/referencias/:" + props.supplier}/>): (<span></span>)}
      </div>
    );
  }
  
  export default PrintValidatedMessage;