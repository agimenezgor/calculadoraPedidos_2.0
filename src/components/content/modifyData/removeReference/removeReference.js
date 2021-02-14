import React, { useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import FetchDeleteData from './fetchDeleteData';

function RemoveReference() {
    const [redirecting, setRedirecting] = useState(false);
    const supplier = useParams().supplier.substring(1);
    const number = useParams().number.substring(1);
    async function apiResponse (supplier, number) {
      const response = await FetchDeleteData(supplier, number);
      if(response.message === "Referencia borrada correctamente"){
        return true;
      }
      return false;
    }
    function showAlert () {
     swal({
        title: "Borrar referencia",
        text: `Estás seguro de que deseas borrar la referencia número ${number}?`,
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
          if(apiResponse(supplier, number)){
            swal({
              title: "Borrado",
              text: "Referencia borrada correctamente",
              icon: "success",
              button: "Aceptar",
              timer: 1500
            })
            .then(() => {setRedirecting(true)})
          }
          else{
            swal({
              title: "Error",
              text: "No podemos borrar la referencia. Inténtalo más tarde",
              icon: "error",
              button: "Aceptar",
              timer: 1500
            })
            .then(() => {setRedirecting(true)})
          }
        }
          
      })
    }
    return (
      <div>
        {redirecting === false ? showAlert() :(<span></span>)}
        {redirecting === true ? (<Redirect to={"/referencias/:" + supplier}/>): (<span></span>)}
      </div>
    );
  }
  
  export default RemoveReference;