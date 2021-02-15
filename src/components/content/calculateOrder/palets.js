import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import fetchData from '../references/fetchData';
import Alert from 'react-bootstrap/Alert'

function Palets(props) {
  const [bbdd, setBbdd] = useState([]);
  const [palets, setPalets] = useState([]);
  const [missingReferences, setMissingReferences] = useState(false);
  useEffect(() => {
    const bbdd_aux = async () => {
      const data = await fetchData(props.supplier);
      setBbdd(data);
    }
    bbdd_aux()
  }, [props.supplier]);

  async function handleChange (e) {
    let paletsArray = palets;
    paletsArray[e.target.id] = e.target.value;
    setPalets(paletsArray)
  }

  function finish(){
    if(palets.length === bbdd.length && !palets.includes("")){
      // setReferences (para poder calcular el pedido en order.js)
      props.setShowed(props.showed + 1);
    }
    else{
      setMissingReferences(true)
    }
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
                    {bbdd.map(function(obj, index) {
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
                  <Alert variant="warning" className="d-flex justify-content-center">
                    Debes de rellenar los datos de todas las referencias antes de continuar!!
                  </Alert>
                ): (<span></span>)}
            </Card.Body>
          </Card>
        </div>
      );
  }
  
  export default Palets;