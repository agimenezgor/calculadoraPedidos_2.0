import React, { useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import swal from 'sweetalert';

function RemoveSupplier() {
    const [redirecting, setRedirecting] = useState(false);
    const number = useParams().number.substring(1)
    const showAlert = () => {
      swal({
        title: "Borrar proveedor",
        text: `Estás seguro de que deseas borrar el proveedor número ${number}?`,
        icon: "warning",
        buttons: ["Cancelar", "Borrar"]
      })
      .then(response => {
        if(!response){
          swal({
            title: "Cancelado",
            text: "Operación cancelada",
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