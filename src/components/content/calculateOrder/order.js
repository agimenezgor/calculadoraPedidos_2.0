import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import fetchOrderData from './fetchOrderData';

function Order(props) {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    const bbdd_aux = async () => {
      const data = await fetchOrderData(props.palets, props.supplier);
      setOrder(data.orderArray);
    }
    bbdd_aux()
  }, [props]);
    return (
      <div className="pt-5 pb-5 container text-info">
        <Card>
            <Card.Header className="d-flex justify-content-center">
            <h2>Este es el pedido que tendrás que realizar:</h2>
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-around">
                <h4>Proveedor: {props.supplierName}</h4>
                <h4>Número de proveedor: {props.supplier}</h4>
              </div>
            <Table striped responsive bordered hover>
                <thead>
                  <th>Nombre</th>
                  <th>Número</th>
                  <th>Palets a pedir</th>
                  <th>Cantidad a pedir</th>
                </thead>
                <tbody>
                  {order.map(function(obj, index) {
                    return(
                      <tr key={index} id={index} className={obj.bg}>
                        <td>{obj.name}</td>
                        <td>{obj.number}</td>
                        <td>{obj.palets}</td>
                        <td>{obj.palets * obj.conditioning}</td>
                      </tr>
                    ) 
                  })}
                </tbody>
              </Table>
              <div className="d-flex justify-content-center p-4">
                  <button onClick={() => props.setShowed(props.showed + 1)} className="btn btn-outline-secondary">Perfecto!!</button>
              </div>
            </Card.Body>
          </Card>
      </div>
    );
  }
  
  export default Order;