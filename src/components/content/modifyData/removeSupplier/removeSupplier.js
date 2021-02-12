import React, { useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import FetchDeleteData from './fetchDeleteData';

function RemoveSupplier() {
    const [redirecting, setRedirecting] = useState(false);
    const number = useParams().number.substring(1)
    async function apiResponse (number) {
      console.log(number)
      const response = await FetchDeleteData(number);
      if(response.message === "Proveedor borrado correctamente"){
        return true;
      }
      return false;
    }
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
          if(apiResponse(number)){
            console.log("borrado")
          }
          swal({
            title: "Borrado",
            text: "Proveedor borrado correctamente",
            icon: "success",
            button: "Aceptar",
            timer: 1500
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