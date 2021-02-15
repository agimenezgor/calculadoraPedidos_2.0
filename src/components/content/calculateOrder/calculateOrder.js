import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import CoverPage from './coverPage';
import ShowSuppliers from './showSuppliers';
import ShowReferences from './showreference';
import Palets from './palets';
import Order from './order';

function CalculateOrder() {
  const cookies = new Cookies();
  let userInitialized = false;

  if(cookies.get('name') !== undefined){
    userInitialized = true;
  }
  const [showed, setShowed] = useState(0);
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
            <ShowSuppliers supplier={supplier} setSupplier={setSupplier} showed={showed} setShowed={setShowed}/>
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
            <Order references={references} palets={palets} showed={showed} setShowed={setShowed}/>
          )
        default:
          return(
            <CoverPage showed={showed} setShowed={setShowed}/>
          )
      }
    }
    return (
      <div>
        {userInitialized === true ? (
          Show()
        ): (<span>Saltar alerta de inicio de sesión</span>)}
        
      </div>
    );
  }
  
  export default CalculateOrder;