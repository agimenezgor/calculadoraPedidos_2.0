import React, { useState, useEffect} from 'react';
import Cookies from 'universal-cookie';
import sample_BBDD from '../../bbdd_suppliers.json';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

function PrintReferences(props) {
    // Primero comprobamos hay un usuario inicializado mediante las cookies.
        // Si no lo está, pintamos las referencias de muestra.
        // Si lo está, hacemos la llamada a la API.
    const number = props.number - 1111;
    const cookies = new Cookies();
    let userInitialized = false;
    let disabledButtons = true;
    const [bbdd, setBbdd] = useState([]); 

    useEffect(() => {
        const bbdd_aux = async () => {
          /* if(userInitialized){
            const data = await fetchData();
            setBbdd(data)
            return data;
          } */
          setBbdd(sample_BBDD[number].references)
        }
        bbdd_aux()
      }, [userInitialized, number])

    if(cookies.get('name') !== undefined){
        userInitialized = true;
        disabledButtons = false;
    }
    return (
        <div className="ml-5 mr-5 pt-4 pb-5 text-info">
        <Card>
          <Card.Header>
            <h2 className="d-flex justify-content-center">Lista de referencias</h2>
            {userInitialized !== true ? (
            <div className="d-flex justify-content-around">
              <h4 className="text-danger">Esta es una tabla de referencias de muestra!!</h4>
              <h4 className="text-success">Para ver tus referencias inicia sesión</h4>
              </div>
            ):(<span></span>)} 
          </Card.Header>
          <Card.Body>
            {bbdd.length === 0 ? (
                <h4 className="d-flex align-items-center justify-content-center text-danger">No hay referencias guardadas</h4>
            ): (
              <Table striped responsive bordered hover>
                <thead>
                  <tr>
                      <th>Nombre</th>
                      <th>Número</th>
                      <th>Condicionante</th>
                      <th>Facing</th>
                      <th>Ventas mensuales</th>
                      <th>Modificar datos</th>
                      <th>Borrar</th>
                  </tr>
                </thead>
                <tbody>
                  {bbdd.map(function(obj, index) {
                    return(
                      <tr key={index} id={index}>
                          <td>{obj.name}</td>
                          <td>{obj.number}</td>
                          <td>{obj.conditioning}</td>
                          <td>{obj.facing}</td>
                          <td>{obj.sales}</td>
                          <td>
                            <button className="btn btn-warning" onClick={() => console.log("Modificar datos")} disabled={disabledButtons}>
                                      Modificar</button>
                          </td>{}
                          <td>
                            <button className="btn btn-danger" onClick={() => console.log("Borrar referencia")} disabled={disabledButtons}>
                                      Borrar</button>
                          </td>
                        </tr>
                      
                    ) 
                  })}
                </tbody>
                
              </Table>
            )}
             <div className="d-flex justify-content-center">
               <button className="btn btn-outline-info" onClick={() => console.log("Guardar")}>Nueva referencia</button>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
  
  export default PrintReferences;