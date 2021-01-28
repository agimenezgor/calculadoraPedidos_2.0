import React from 'react';

function PrintValidatedMessage(message){
    const validatedMessage = message.message;
    return <div>
            {validatedMessage === "" ? (
                <span></span>)
              : validatedMessage === "Usuario creado correctamente" ? (
              <div className="bg-success text-white d-flex justify-content-center mt-4 p-4"><h4>{validatedMessage}</h4></div>)
              : validatedMessage === "Introduzca un email válido" ? (
                  <div className="bg-warning text-white d-flex justify-content-center mt-4 p-4"><h4>{validatedMessage}</h4></div>
              ): validatedMessage === "La contraseña debe contener al menos 8 caracteres" ?(
                  <div className="bg-danger text-white d-flex justify-content-center mt-4 p-4"><h4>{validatedMessage}</h4></div>
              ): (<span></span>)}
            </div>
}
export default PrintValidatedMessage;