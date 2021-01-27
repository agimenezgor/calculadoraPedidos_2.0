import React from 'react';

function PrintValidatedMessage(message){
    const validatedMessage = message.message;
    return <div>
            {validatedMessage === "" ? (
                <span></span>)
              : validatedMessage === "Sesión iniciada correctamente" ? (
              <div className="bg-success text-white d-flex justify-content-center mt-4 p-4"><h4>{validatedMessage}</h4></div>)
              : validatedMessage === "La contraseña es incorrecta" ? (
                  <div className="bg-warning text-white d-flex justify-content-center mt-4 p-4"><h4>{validatedMessage}</h4></div>
              ): validatedMessage === "El usuario no existe en la base de datos" ?(
                  <div className="bg-danger text-white d-flex justify-content-center mt-4 p-4"><h4>{validatedMessage}</h4></div>
              ): (<span></span>)}
            </div>
}
export default PrintValidatedMessage;