import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Redirect, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import PrintFormInput from '../modifySupplier/printFormInput';
import ValidateData from './validateData';
import FetchData from './fetchData';
import PrintValidatedMessage from './printValidateMessage';

function ModifyReference() {
    const { register, handleSubmit} = useForm();
    const [initialized, setInitialized] = useState(false);
    const [validatedMessage, setValidatedMessage] = useState("");
    const [supplier] = useState(parseInt(useParams().supplier.substring(1)));
    const [number] = useState(parseInt(useParams().number.substring(1)));
    const [reference, setReference] = useState("");

    useEffect(() => {
      const reference= async () => {
        const data = await FetchData(supplier, number);
          setReference(data);
          return data;
      }
      reference()
    }, [supplier, number])
    
    return (
      <div className="bg-info pt-4">
        <Card className="container" text="info" style={{borderRadius: "1em", minHeight:"60vh", minWidth:"40vw"}}>
          <Card.Header>
            <h2 className="d-flex justify-content-center p-4">Introduce los datos que deseas modificar y pulsa en guardar</h2>
          </Card.Header>
          <Card.Body className="d-flex justify-content-center">

          <form onSubmit={handleSubmit(async function onSubmit (data, e) {await ValidateData(setValidatedMessage, data, e, setInitialized, number, supplier)})}>
              <PrintFormInput reference={reference} label="Introduce el nombre de la referencia" name="name" 
                type="String" width={"45vw"} register={register}/>

              <div className="row d-flex justify-content-around">
                  <div className="col-md-6">
                      <PrintFormInput reference={reference} label="Número de identificación" name="number" 
                        type="number" width={"25vw"} register={register}/>
                  </div>
                  <div className="col-md-6">
                      <PrintFormInput reference={reference} label="Condicionante" name="conditioning" 
                        type="number" width={"25vw"} register={register}/>
                  </div>   
              </div>

              <div className="row d-flex justify-content-around">
                  <div className="col-md-6">
                      <PrintFormInput reference={reference} label="Cantidad que te cabe en stock" name="facing" 
                        type="number" width={"45vw"} register={register}/>
                  </div>
                  <div className="col-md-6">
                      <PrintFormInput reference={reference} label="Ventas mensuales" name="sales" 
                        type="number" width={"15vw"} register={register}/>
                  </div>   
              </div>
              
              <div className="d-flex justify-content-center">
                <button className="btn btn-outline-info mt-5">Guardar</button>
              </div>
            </form>
            {initialized === true ? (<Redirect to="/referencias"/>): (<span></span>)}
          </Card.Body>
          <PrintValidatedMessage message={validatedMessage} supplier={supplier}/>
        </Card>
      </div>
    );
  }
  
  export default ModifyReference;