import React from 'react';
import swal from 'sweetalert';

function PrintValidatedMessage(message){
    const validatedMessage = message.message;
    function successAlert() {
      swal({
        title: "Guardado",
        text: "Proveedor guardado correctamente",
        icon: "success",
        button: {
            text: "Aceptar",
        }
        })
    }
    function dangerNumber() {
      swal({
        title: "Error",
        text: "El número de proveedor ya existe en la base de datos",
        icon: "error",
        button: {
            text: "Aceptar",
        }
        })
    }
    function dangerServer() {
      swal({
        title: "Error",
        text: "Imposible conectar con el servidor. Inténtelo de nuevo más tarde",
        icon: "error",
        button: {
            text: "Aceptar",
        }
        })
    }
    return <div>
            {validatedMessage === "" ? (
                <span></span>)
              : validatedMessage === "Proveedor guardado correctamente" ? (
                successAlert()
              ): validatedMessage ==="El número de proveedor ya existe en la base de datos" ? (
                dangerNumber()
              ): validatedMessage ==="Imposible conectar con el servidor. Inténtelo de nuevo más tarde" ? (
                dangerServer()
              ): (<span></span>)}
            </div>
}
export default PrintValidatedMessage;