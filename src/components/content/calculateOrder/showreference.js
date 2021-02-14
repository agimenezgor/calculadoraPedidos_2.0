import React, { useState, useEffect }  from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import fetchData from '../references/fetchData';
import { useForm } from "react-hook-form";

function ShowReferences(props) {
  const { register, handleSubmit} = useForm();
  const [bbdd, setBbdd] = useState([]); 
  const [modifyReference, setModifyReference] = useState("");
  const [showInputs, setShowInputs] = useState(false); 
  useEffect(() => {
    const bbdd_aux = async () => {
      const data = await fetchData(props.supplier);
      setBbdd(data);
    }
    bbdd_aux()
  }, [props.supplier]);
  function selected(event){
    // Recorremos todos los nodos de la tabla
    for(let i = 0; i < event.currentTarget.offsetParent.children[1].children.length; i++){
        if(i.toString() !== event.currentTarget.id){
            // Borramos background 
            event.currentTarget.offsetParent.children[1].children[i].className = "";
        }
        else{
            // Cambiamos el background
            event.currentTarget.className = "bg-success text-white";
            // guardamos el número de proveedor
            setModifyReference(parseInt(event.currentTarget.children[1].innerText));
            setShowInputs(true)
        }
    }
  }
  async function onSubmit (data, e) {
    //llamada a la api para modificar
    console.log(data);
  }
  return (
        <div className="pt-5 pb-5 container text-info">
          <Card>
            <Card.Header className="d-flex justify-content-center">
              <h2><strong>Comprueba que las ventas y el facing sean correctos</strong></h2>
            </Card.Header>
            <Card.Body>
              <h4>Pulsa sobre la referencia para modificarla</h4>
              {bbdd.length === 0 ? (
                  <h4 className="d-flex align-items-center justify-content-center text-danger">No hay referencias guardadas</h4>
              ): (
              <div>
                <Table striped responsive bordered hover>
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Número</th>
                      <th>Condicionante</th>
                      <th>Facing máximo</th>
                      <th>Ventas</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bbdd.map(function(obj, index) {
                      return(
                        <tr key={index} id={index} onClick={selected}>
                            <td>{obj.name}</td>
                            <td>{obj.number}</td>
                            <td>{obj.conditioning}</td>
                            <td>{obj.facing}</td>
                            <td>{obj.sales}</td>
                          </tr> 
                      ) 
                    })}
                  </tbody>
                </Table>
              </div>
              )}
              {showInputs === true ?(
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row d-flex justify-content-around pt-4">
                  <div>
                    <label className="d-flex justify-content-center">Facing</label>
                    <input type="number" name="facing" className="form-control" style={{minWidth:"15vw"}} ref={register()}/>
                  </div>
                  <div>
                    <label className="d-flex justify-content-center">Ventas</label>
                    <input type="number" name="sales" className="form-control" style={{minWidth:"15vw"}} ref={register()}/>
                  </div>
                </div>
                <div className="d-flex justify-content-center p-4">
                <button className="btn btn-outline-info">Modificar</button>
              </div>
              </form>
              ):(<span></span>)}
              <div className=" d-flex justify-content-center p-4">
                <button onClick={() => props.setShowed(props.showed + 1)} className="btn btn-outline-secondary">Comprobado!!</button>
              </div>
            </Card.Body>
          </Card>
        </div>
      );
  }
  
  export default ShowReferences;