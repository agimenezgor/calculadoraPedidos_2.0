import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import fetchData from '../suppliers/fetchData';

function ShowSuppliers(props) {
  const [bbdd, setBbdd] = useState([]); 
  const [showAlert, setShowAlert] = useState(false); 
  useEffect(() => {
    const bbdd_aux = async () => {
      const data = await fetchData();
      setBbdd(data);
    }
    bbdd_aux()
  }, []);
  
  function supplierSelected(event){
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
              props.setSupplier(parseInt(event.currentTarget.children[1].innerText));
          }
      }
  }
  return (
    <div className="ml-5 mr-5 pt-4 pb-5 text-info">
      <Card>
        <Card.Header>
          <h2 className="d-flex justify-content-center">Lista de proveedores</h2>
          
        </Card.Header>
        <Card.Body>
          {bbdd.length === 0 ? (
              <h4 className="d-flex align-items-center justify-content-center text-danger">No hay proveedores guardados</h4>
          ): (
          <div>
            <h4 className="d-flex align-items-center justify-content-center mb-3">Elige el proveedor que deseas calcular</h4>
            <Table striped responsive bordered hover>
              <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Número</th>
                    <th>Días en servir</th>
                    <th>Tipo de cálculo</th>
                    <th>Palets mínimos</th>
                    <th>Palets máximos</th>
                    <th>Kilos mínimos</th>
                    <th>Kilos máximos</th>
                    <th>Franco</th>
                </tr>
              </thead>
              <tbody>
                {bbdd.map(function(obj, index) {
                  return(
                    <tr key={index} id={index} onClick={supplierSelected}>
                        <td>{obj.name}</td>
                        <td>{obj.number}</td>
                        <td>{obj.days}</td>
                        <td>{obj.calculateType}</td>
                        <td>{obj.minPalets}</td>
                        <td>{obj.maxPalets}</td>
                        <td>{obj.minKilos}</td>
                        <td>{obj.maxKilos}</td>
                        <td>{obj.money}</td>
                      </tr> 
                  ) 
                })}
              </tbody>
            </Table>
          </div>
          )}
            <div className="d-flex justify-content-center p-4">
              <button onClick={() => {
                if(props.supplier){
                  setShowAlert(false);
                  props.setShowed(props.showed + 1)
                }else{
                  setShowAlert(true);
                }
              }} className="btn btn-outline-secondary">Lo tengo!!</button>
            </div>
          {showAlert === true ? (
          <div className="d-flex justify-content-center text-danger">
            <h4>Atención!! Elige un proveedor antes de continuar</h4>
          </div>):(<span></span>)}
        </Card.Body>
      </Card>
    </div>
  )
}
  
  export default ShowSuppliers;



    