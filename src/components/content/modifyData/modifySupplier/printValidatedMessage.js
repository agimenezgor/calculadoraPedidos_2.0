import React from 'react';
import swal from 'sweetalert';

function PrintValidatedMessage(message){
    const validatedMessage = message.message;
    function successAlert(){
      swal({
        title: "Modificado",
        text: "Proveedor modificado correctamente",
        icon: "success",
        timer: 2000,
        button: {
          text: "Aceptar",
        }
      })
    }
    function dangerAlert(){
      swal({
        title: "Error",
        text: "No podemos actualizar el proveedor. Inténtalo más tarde",
        icon: "error",
        button: "Aceptar",
        timer: 2000
      })
    }
    return <div>
            {validatedMessage === "" ? (
                <span></span>)
              : validatedMessage === "Proveedor modificado correctamente" ? (
                successAlert()
              ): (dangerAlert())}
            </div>
}
export default PrintValidatedMessage;