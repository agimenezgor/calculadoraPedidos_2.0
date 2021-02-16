import React from 'react';
import swal from 'sweetalert';

function PrintValidatedMessage(message){
    const validatedMessage = message.message;
    function successAlert() {
        swal({
            title: "Guardado",
            text: "Usuario creado correctamente",
            icon: "success",
            button: {
                text: "Aceptar",
            }
            })
        }
        function warningEmail() {
        swal({
            title: "Atención!",
            text: "Introduzca un email válido",
            icon: "warning",
            button: {
                text: "Aceptar",
            }
            })
        }
        function warningUser() {
        swal({
            title: "Atención!",
            text: "La contraseña debe contener al menos 8 caracteres",
            icon: "warning",
            button: {
                text: "Aceptar",
            }
            })
        }
        console.log(validatedMessage)
        return <div>
            {validatedMessage === "" ? (
                <span></span>)
              : validatedMessage === "Usuario creado correctamente" ? (
                    successAlert())
              : validatedMessage === "Introduzca un email válido" ? (
                    warningEmail()
              ): validatedMessage === "La contraseña debe contener al menos 8 caracteres" ?(
                    warningUser()
              ): (<span></span>)}
            </div>
}
export default PrintValidatedMessage;