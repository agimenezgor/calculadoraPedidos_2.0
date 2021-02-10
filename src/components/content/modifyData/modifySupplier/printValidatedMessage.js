import React from 'react';
import Alert from 'react-bootstrap/Alert'

function PrintValidatedMessage(message){
    const validatedMessage = message.message;
    return <div>
            {validatedMessage === "" ? (
                <span></span>)
              : validatedMessage === "Proveedor modificado correctamente" ? (
                <Alert variant="success" className="d-flex justify-content-center">
                  Proveedor modificado correctamente!
                </Alert>
              ): (<span></span>)}
            </div>
}
export default PrintValidatedMessage;