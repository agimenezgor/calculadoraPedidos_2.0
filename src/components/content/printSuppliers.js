import React, { useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import sample_BBDD from '../../bbdd_suppliers.json';
import { Redirect } from "react-router-dom";
import Cookies from 'universal-cookie';
import fetchData from './suppliers/fetchData';
import swal from 'sweetalert';

function PrintSuppliers() {
    const cookies = new Cookies();
    let userInitialized = false;
    let disabledButtons = true;
    const [bbdd, setBbdd] = useState([]); 
    
    useEffect(() => {
      const bbdd_aux = async () => {
        if(userInitialized){
          const data = await fetchData();
          setBbdd(data)
          return data;
        }
        setBbdd(sample_BBDD)
      }
      bbdd_aux()
    }, [userInitialized])

    if(cookies.get('name') !== undefined){
      userInitialized = true;
      disabledButtons = false;
    }
    
    let [supplier, setSupplier] = useState(""); 
    let [newSupplierRedirect, setNewSupplierRedirect] = useState(false); 
    let [modifyRedirect, setModifyRedirect] = useState(false); 
    let [removeRedirect, setRemoveRedirect] = useState(false);
    let [referencesRedirect, setReferencesRedirect] = useState(false);  
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
                setSupplier(parseInt(event.currentTarget.children[1].innerText));
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
            <h2 className="d-flex justify-content-center">Lista de proveedores</h2>
            {userInitialized !== true ? (
            ShowAlert()
            ):(<span></span>)} 
          </Card.Header>
          <Card.Body>
            {bbdd.length === 0 ? (
                <h4 className="d-flex align-items-center justify-content-center text-danger">No hay proveedores guardados</h4>
            ): (
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
                      <th>Referencias</th>
                      <th>Modificar datos</th>
                      <th>Borrar</th>
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
                          <td>
                            <button className="btn btn-info" onClick={() => setReferencesRedirect(true)}>Referencias</button>
                          </td>
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
             {referencesRedirect === true ? (<Redirect to={"/referencias/:"+ supplier}/>):(<span></span>)} 
             {modifyRedirect === true ? (<Redirect to={"/modificar_proveedor/:" + supplier}/>):(<span></span>)} 
             {removeRedirect === true ? (<Redirect to={"/eliminar_proveedor/:"+ supplier}/>):(<span></span>)} 
             {newSupplierRedirect === true ? (<Redirect to={"/nuevo_proveedor"}/>):(<span></span>)} 
             <div className="d-flex justify-content-center">
               <button className="btn btn-outline-info" onClick={() => setNewSupplierRedirect(true)}>Nuevo proveedor</button>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
  
  export default PrintSuppliers;