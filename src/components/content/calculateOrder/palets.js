import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import swal from 'sweetalert';

function Palets(props) {
  const [palets, setPalets] = useState([]);
  const [missingReferences, setMissingReferences] = useState(false);

  async function handleChange (e) {
    let paletsArray = palets;
    paletsArray[e.target.id] = e.target.value;
    setPalets(paletsArray)
  }

  function finish(){
    if(palets.length === props.references.length && !palets.includes("") && !palets.includes(undefined)){
      props.setPalets(palets);
      props.setShowed(props.showed + 1);
    }
    else{
      setMissingReferences(true)
    }
  }
  function paletsAlert(params) {
    swal({
      title: "Atención!",
      text: "Debes de rellenar los datos de todas las referencias antes de continuar!!",
      icon: "warning",
      button: {
          text: "Aceptar",
      }
      })
      .then(() => setMissingReferences(false))
  }
  return (
        <div className="pt-5 pb-5 container text-info">
          <Card>
            <Card.Header className="d-flex justify-content-center">
              <h2><strong>Introduce la cantidad de palets que tienes en stock</strong></h2>
            </Card.Header>
            <Card.Body>
              <Table striped responsive bordered hover>
                  <thead>
                    <th style={{minWidth:"15vw"}}>Nombre</th>
                    <th style={{minWidth:"10vw"}}>Número</th>
                    <th>Palets</th>
                  </thead>
                  <tbody>
                    {props.references.map(function(obj, index) {
                      return(
                        <tr key={index} id={index} className={obj.bg}>
                          <td>{obj.name}</td>
                          <td>{obj.number}</td>
                          <td><input id={index} onChange={handleChange} required name="stock" className="form-control" type="number"/></td>
                        </tr>
                      ) 
                    })}
                  </tbody>
                </Table>
                <div className="d-flex justify-content-center p-4">
                  <button onClick={finish} className="btn btn-outline-secondary">Hecho!!</button>
                </div>
                {missingReferences === true ? (
                  paletsAlert()
                ): (<span></span>)}
            </Card.Body>
          </Card>
        </div>
      );
  }
  
  export default Palets;