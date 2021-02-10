import React from 'react';
import Alert from 'react-bootstrap/Alert'

function PrintValidatedMessage(message){
    const validatedMessage = message.message;
    return <div>
            {validatedMessage === "" ? (
                <span></span>)
              : validatedMessage === "Proveedor guardado correctamente" ? (
                <Alert variant="success" className="d-flex justify-content-center">
                  Proveedor registrado correctamente! Ahora introduce sus referencias
                </Alert>
              ): validatedMessage ==="El número de proveedor ya existe en la base de datos" ? (
                <Alert variant="danger" className="d-flex justify-content-center">
                  El número de proveedor ya existe en la base de datos
                </Alert>
              ): validatedMessage ==="Imposible conectar con el servidor. Inténtelo de nuevo más tarde" ? (
                <Alert variant="danger" className="d-flex justify-content-center">
                  Imposible conectar con el servidor. Inténtelo de nuevo más tarde
                </Alert>
              ): (<span></span>)}
            </div>
}
export default PrintValidatedMessage;