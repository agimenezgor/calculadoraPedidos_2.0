import React, { useState, useEffect} from 'react';
import Cookies from 'universal-cookie';
import sample_BBDD from '../../bbdd_suppliers.json';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { Redirect } from "react-router-dom";
import FetchData from './references/fetchData';
import swal from 'sweetalert';

function PrintReferences(props) {
    const cookies = new Cookies();
    let userInitialized = false;
    let disabledButtons = true;
    const [bbdd, setBbdd] = useState([]); 

    useEffect(() => {
        const bbdd_aux = async () => {
          if(userInitialized){
            const data = await FetchData(props.number);
            setBbdd(data)
            return data;
          }
          const number = props.number - 1111;
          setBbdd(sample_BBDD[number].references)
        }
        bbdd_aux()
      }, [userInitialized, props.number])

    if(cookies.get('name') !== undefined){
        userInitialized = true;
        disabledButtons = false;
    }

    let [reference, setReference] = useState(""); 
    let [newReferenceRedirect, setNewReferenceRedirect] = useState(false); 
    let [modifyRedirect, setModifyRedirect] = useState(false); 
    let [removeRedirect, setRemoveRedirect] = useState(false);

    function referenceSelected(event){
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
                setReference(parseInt(event.currentTarget.children[1].innerText));
            }
        }
    }
    function ShowAlert() {
      setTimeout(() => {
        swal({
          title: "Inicia sesión",
          text: "Recuerda! Debes iniciar sesión para empezar",
          icon: "warning",
          button: {
              text: "Aceptar",
          }
          })
      }, 1500);
    }
    return (
        <div className="ml-5 mr-5 pt-4 pb-5 text-info">
        <Card>
          <Card.Header>
            <h2 className="d-flex justify-content-center">Lista de referencias</h2>
            {userInitialized !== true ? (
            ShowAlert()
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
                      <tr key={index} id={index} onClick={referenceSelected}>
                          <td>{obj.name}</td>
                          <td>{obj.number}</td>
                          <td>{obj.conditioning}</td>
                          <td>{obj.facing}</td>
                          <td>{obj.sales}</td>
                          <td>
                            <button className="btn btn-warning" onClick={() => setModifyRedirect(true)} disabled={disabledButtons}>
                                      Modificar</button>
                          </td>{}
                          <td>
                            <button className="btn btn-danger" onClick={() => setRemoveRedirect(true)} disabled={disabledButtons}>
                                      Borrar</button>
                          </td>
                        </tr>
                      
                    ) 
                  })}
                </tbody>
                
              </Table>
            )}
             {modifyRedirect === true ? (<Redirect to={"/modificar_referencia/:" + props.number + "/:" + reference}/>):(<span></span>)} 
             {removeRedirect === true ? (<Redirect to={"/eliminar_referencia/:" + props.number + "/:" + reference}/>):(<span></span>)} 
             {newReferenceRedirect === true ? (<Redirect to={"/nueva_referencia/:" + props.number}/>):(<span></span>)}

             <div className="d-flex justify-content-center">
               <button className="btn btn-outline-info" onClick={() => setNewReferenceRedirect(true)}>Nueva referencia</button>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
  
  export default PrintReferences;