import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import swal from 'sweetalert';

function RemoveSupplier() {
  const [redirecting, setRedirecting] = useState(false);
    const showAlert = () => {
      swal({
        title: "Borrar proveedor",
        text: "Estás seguro de que deseas borrar el proveedor XXX??",
        icon: "warning",
        buttons: ["Cancelar", "Borrar"]
      })
      .then(response => {
        if(!response){
          swal({
            title: "Cancelado",
            text: "Operación cancelada correctamente",
            icon: "success",
            button: {
              text: "Aceptar",
            }
          })
          .then(() => {setRedirecting(true)})
        }
        else{
          swal({
            title: "Borrado",
            text: "Proveedor borrado correctamente",
            icon: "success",
            button: "Aceptar"
          })
          .then(() => {setRedirecting(true)})
        }
      })
    }
    return (
      <div>
        {redirecting === false ? showAlert(): (<span></span>)}
        {redirecting === true ? (<Redirect to="/proveedores"/>): (<span></span>)}
      </div>
    );
  }
  
  export default RemoveSupplier;