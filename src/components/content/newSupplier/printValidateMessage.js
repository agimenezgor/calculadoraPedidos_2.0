import React from 'react';
import Alert from 'react-bootstrap/Alert'

function PrintValidatedMessage(message){
    const validatedMessage = message.message;
    return <div>
            {validatedMessage === "" ? (
                <span></span>)
              : validatedMessage === "Proveedor registrado correctamente" ? (
                <Alert variant="success" className="d-flex justify-content-center">
                  Proveedor registrado correctamente! Ahora introduce sus referencias
                </Alert>
              ): (<span></span>)}
            </div>
}
export default PrintValidatedMessage;