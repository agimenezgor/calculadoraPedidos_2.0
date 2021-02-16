import React from 'react';
import Card from 'react-bootstrap/Card';
import Cookies from 'universal-cookie';

function CoverPage(props) {
    const cookies = new Cookies();
    let userInitialized = false;

    if(cookies.get('name') !== undefined){
      userInitialized = true;
    }
    return (
      <div className="pt-5">
        <Card className="container" text="secondary" style={{borderRadius: "1em", minHeight:"60vh", minWidth:"40vw"}}>
          <Card.Header className="d-flex justify-content-center">
            <h2><strong>Calculadora de pedidos</strong></h2>
          </Card.Header>
          <Card.Body>
            <h3 className="p-3">Para calcular el pedido que debes de realizar, tendrás que seguir los siguientes pasos:</h3>
            <h4 className="p-3">1 - En primer lugar, elige el proveedor que deseas calcular.</h4>
            <h4 className="p-3">2 - Después, tendrás que revisar que las ventas de las referencias son correctas.</h4>
            <h4 className="p-3">3 - A continuación, tendrás que insertar la cantidad (en palets) de unidades que tienes en stock de cada referencia.</h4>
            <h4 className="p-3">4 - Finalmente, te aparecerá la lista de referencias que tendrás que pedir.</h4>
            <div className="d-flex justify-content-center p-4">
              <button className="btn btn-outline-secondary" onClick={() => 
                {if(userInitialized){
                  props.setShowed(props.showed + 1)
                }
                else{
                  window.location.href="http://localhost:3000/inicio_sesion";
                }
                }}>
                  Empezar!!
              </button>
            </div>
          </Card.Body>
        </Card>
      </div>
      
    );
  }
  
  export default CoverPage;