import React from 'react';
import Cookies from 'universal-cookie';

function PrintReferences(props) {
    // Primero comprobamos hay un usuario inicializado mediante las cookies.
        // Si no lo está, pintamos las referencias de muestra.
        // Si lo está, hacemos la llamada a la API.
    const cookies = new Cookies();
    let userInitialized = false;
    let disabledButtons = true;

    if(cookies.get('name') !== undefined){
        userInitialized = true;
        disabledButtons = false;
    }
    
    return (
      <div>
          {userInitialized === true ? (
          <div>
              Usuario inicializado
              </div>) 
          :(<div>
              No hay ningún usuario inicializado
            </div>)}
        Número de proveedor: {props.number}
      </div>
    );
  }
  
  export default PrintReferences;