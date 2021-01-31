import React from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import bbdd from '../../bbdd_suppliers.json';

function PrintSuppliers() {

    /* let [supplier, setSupplier] = useState("");  */
    function supplierSelected(event){
        console.log(event.currentTarget.childNodes)
        for(let i = 0; i < event.currentTarget.childNodes.length; i++){
            if(i.toString() !== event.currentTarget.id){
                event.currentTarget.childNodes[i].className = "";
            }
            else{
                event.currentTarget.className = "bg-warning";
            }
        }
    }

    return (
      <div className="ml-5 mr-5 pt-5 pb-5 text-info">
        <Card>
          <Card.Header>
            <h2 className="d-flex justify-content-center">Lista de proveedores</h2>
          </Card.Header>
          <Card.Body>
            {bbdd.length === 0 ? (
                <div>No hay proveedores guardados</div>
            ): (
              <Table striped responsive bordered hover>
                <thead>
                  <th>Nombre</th>
                  <th>Número</th>
                  <th>Días en servir</th>
                  <th>Tipo de cálculo</th>
                  <th>Palets mínimos</th>
                  <th>Palets máximos</th>
                  <th>Kilos mínimos</th>
                  <th>Kilos máximos</th>
                  <th>Franco</th>
                </thead>
                <tbody>
                  {bbdd.map(function(obj, index) {
                    return(
                      <tr key={index} id={index} onClick={supplierSelected}>
                        <td>{obj.name}</td>
                        <td>{obj.number}</td>
                        <td>{obj.days}</td>
                        <td>{obj.calculateType}</td>
                        <td>{obj.minPaletsType}</td>
                        <td>{obj.maxPaletsType}</td>
                        <td>{obj.minKilosType}</td>
                        <td>{obj.maxKilosType}</td>
                        <td>{obj.minMoney}</td>
                      </tr>
                    ) 
                  })}
                </tbody>
              </Table>
            )}
              
          </Card.Body>
        </Card>
      </div>
    );
  }
  
  export default PrintSuppliers;