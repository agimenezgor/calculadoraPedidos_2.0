import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Redirect, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import fetchData from "./fetchData";
import ValidateData from './validateData';
import PrintValidatedMessage from './printValidatedMessage';
import PrintCalculateType from './printCalculateType';
import PrintFormInput from './printFormInput';

function ModifySupplier() {

    const { register, handleSubmit} = useForm();
    const [calculateType, setCalculateType] = useState("");
    const [initialized, setInitialized] = useState(false);
    const [validatedMessage, setValidatedMessage] = useState("");
    const [number] = useState(parseInt(useParams().number.substring(1)));
    const [supplier, setSupplier] = useState("");
    useEffect(() => {
      const supplier= async () => {
        const data = await fetchData(number);
          setSupplier(data);
          setCalculateType(data.calculateType);
          return data;
      }
      supplier()
    }, [number])
    function selected(e) {setCalculateType(e.target.value)}

    return (
      <div className="bg-info pt-4">
        <Card className="container" text="info" style={{borderRadius: "1em", minHeight:"60vh", minWidth:"40vw"}}>
          <Card.Header>
            <h2 className="d-flex justify-content-center p-4">Introduce los datos que deseas modificar y pulsa en guardar</h2>
          </Card.Header>
          <Card.Body className="d-flex justify-content-center">

          <form onSubmit={handleSubmit(async function onSubmit (data, e) {await ValidateData(setValidatedMessage, data, e, setInitialized, number)})}>
              <PrintFormInput supplier={supplier} label="Introduce el nombre del proveedor" name="name" 
                type="String" width={"45vw"} register={register}/>

              <div className="row d-flex justify-content-around">
                  <div className="col-md-5">
                      <PrintFormInput supplier={supplier} label="Número de identificación" name="number" 
                        type="number" width={"15vw"} register={register}/>
                  </div>
                  <div className="col-md-5">
                      <PrintFormInput supplier={supplier} label="Días que tardan en servir" name="days" 
                        type="number" width={"15vw"} register={register}/>
                  </div>   
              </div>
              
              <label className="d-flex justify-content-center mt-4">Tipo de cálculo</label>
              <div className="d-flex justify-content-center mt-4">
                  <select className="form-select" name="calculateType"  ref={register()} defaultValue={supplier.calculateType}>
                      <option selected={supplier.calculateType === "Palets" ?(true):(false)} 
                      onClick={selected} value="Palets">Por número de palets</option>
                      <option selected={supplier.calculateType === "Kilos" ?(true):(false)} 
                      onClick={selected} value="Kilos">Por cantidad en kilos</option>
                      <option selected={supplier.calculateType === "Franco" ?(true):(false)} 
                      onClick={selected} value="Franco">Por franco (€)</option>
                  </select>
              </div>

              <PrintCalculateType calculateType={calculateType} supplier={supplier} register={register}/>
              
              <div className="d-flex justify-content-center">
                <button className="btn btn-outline-info mt-5">Guardar</button>
              </div>
            </form>
            {initialized === true ? (<Redirect to="/proveedores"/>): (<span></span>)}
          </Card.Body>
          <PrintValidatedMessage message={validatedMessage}/>
        </Card>
      </div>
    );
  }
  
  export default ModifySupplier;