import React from 'react';
import swal from 'sweetalert';

function PrintValidatedMessage(message){
    const validatedMessage = message.message;
    function successAlert() {
        swal({
          title: "Conectado",
          text: "Sesión iniciada correctamente",
          icon: "success",
          button: {
              text: "Aceptar",
          }
          })
      }
      function warningPassword() {
        swal({
          title: "Atención!",
          text: "La contraseña es incorrecta",
          icon: "warning",
          button: {
              text: "Aceptar",
          }
          })
      }
      function errorUser() {
        swal({
          title: "Error",
          text: "El usuario no existe en la base de datos",
          icon: "error",
          button: {
              text: "Aceptar",
          }
          })
      }
    return <div>
            {validatedMessage === "" ? (
                <span></span>)
              : validatedMessage === "Sesión iniciada correctamente" ? (
                    successAlert())
              : validatedMessage === "La contraseña es incorrecta" ? (
                    warningPassword()
              ): validatedMessage === "El usuario no existe en la base de datos" ?(
                  errorUser()
              ): (<span></span>)}
            </div>
}
export default PrintValidatedMessage;