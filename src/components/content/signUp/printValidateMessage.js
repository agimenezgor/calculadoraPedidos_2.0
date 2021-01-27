import React from 'react';

function PrintValidatedMessage(message){
    const validatedMessage = message.message;
    return <div>
            {validatedMessage === "Usuario registrado correctamente" ? (
                <div className="bg-success text-white d-flex justify-content-center mt-4 p-4">
                <h4>{validatedMessage}</h4>
            </div>)
              : (<span></span>)}
            </div>
}
export default PrintValidatedMessage;