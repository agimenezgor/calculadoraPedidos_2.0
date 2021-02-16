import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import CoverPage from './coverPage';
import ShowSuppliers from './showSuppliers';
import ShowReferences from './showreference';
import Palets from './palets';
import Order from './order';
import swal from 'sweetalert';

function CalculateOrder() {
  const cookies = new Cookies();
  let userInitialized = false;

  if(cookies.get('name') !== undefined){
    userInitialized = true;
  }
  const [showed, setShowed] = useState(0);
  const [supplierName, setSupplierName] = useState("");
  const [supplier, setSupplier] = useState("");
  const [references, setReferences] = useState([]);
  const [palets, setPalets] = useState([]);
  function Show () {
    if(showed > 4) {
      setShowed(0);
    }
      switch(showed){
        case 1:
          return(
            <ShowSuppliers setSupplierName={setSupplierName} supplier={supplier} setSupplier={setSupplier} showed={showed} setShowed={setShowed}/>
          )
        case 2:
          return(
            <ShowReferences setReferences={setReferences} supplier={supplier} showed={showed} setShowed={setShowed}/>
          )
        case 3:
          return(
            <Palets references={references} setPalets={setPalets} supplier={supplier} showed={showed} setShowed={setShowed}/>
          )
        case 4:
          return(
            <Order supplierName={supplierName} supplier={supplier} references={references} palets={palets} showed={showed} setShowed={setShowed}/>
          )
        default:
          return(
            <CoverPage showed={showed} setShowed={setShowed}/>
          )
      }
    }

    function ShowAlert() {
      swal({
        title: "Inicia sesión",
        text: "Recuerda! Debes iniciar sesión para empezar",
        icon: "warning",
        button: {
            text: "Aceptar",
        }
        })
    }

    return (
      <div>
        {Show()}
        {userInitialized === false ? (
          ShowAlert()
        ): (<span></span>)}
        
      </div>
    );
  }
  
  export default CalculateOrder;