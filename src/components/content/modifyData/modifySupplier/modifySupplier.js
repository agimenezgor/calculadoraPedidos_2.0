import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Redirect, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import fetchData from "./fetchData";

function ModifySupplier() {

    const { register, handleSubmit} = useForm();
    const [calculateType, setCalculateType] = useState("");
    const [initialized, setInitialized] = useState(false);
    const [validatedMessage, setValidatedMessage] = useState("");

    let number = parseInt(useParams().number.substring(1));
    const [supplier, setSupplier] = useState("");
    useEffect(() => {
      const supplier= async () => {
        // llamar a la api
        const data = await fetchData(number);
          setSupplier(data)
          return data;
      }
      supplier()
    }, [])
    
    async function onSubmit (data, e) {
      console.log("supplier: ", supplier)
      console.log("data", data)
      /* await ValidateData(setValidatedMessage, data, e, setInitialized); */
    }

    function selected(e) {
      setCalculateType(e.target.value)
    }

    return (
      <div className="bg-info pt-4">
        <Card className="container" text="info" style={{borderRadius: "1em", minHeight:"60vh", minWidth:"40vw"}}>
          <Card.Header>
            <h2 className="d-flex justify-content-center p-4">Introduce los datos que deseas modificar y pulsa en guardar</h2>
          </Card.Header>
          <Card.Body className="d-flex justify-content-center">

          <form onSubmit={handleSubmit(onSubmit)}>
              <label className="d-flex justify-content-center mt-4">Introduce el nombre del proveedor</label>
              <div className="d-flex justify-content-center mt-4">
                  <input name="name" className="form-control" style={{minWidth:"45vw"}} ref={register()} 
                  placeholder={"valor actual: " + supplier.name}/>
              </div>

              <div className="row d-flex justify-content-around">
                  <div className="col-md-5">
                      <label className="d-flex justify-content-center mt-4">Número de identificación</label>
                      <div className="d-flex justify-content-center mt-4">
                          <input name="number" type="number" className="form-control" style={{maxWidth:"15vw"}} ref={register()} 
                          placeholder={"valor actual: " + supplier.number}/>
                      </div>
                  </div>
                  <div className="col-md-5">
                      <label className="d-flex justify-content-center mt-4">Días que tardan en servir</label>
                      <div className="d-flex justify-content-center mt-4">
                          <input name="days" type="number" className="form-control" style={{maxWidth:"15vw"}} ref={register()}
                          placeholder={"valor actual: " + supplier.days}/>
                      </div>
                  </div>   
              </div>
              
              <label className="d-flex justify-content-center mt-4">Tipo de cálculo</label>
              <div className="d-flex justify-content-center mt-4">
                  <select className="form-select" name="calculateType"  ref={register()}>
                      <option defaultValue disabled>Elige un tipo de cálculo</option>
                      <option onClick={selected} value="Palets">Por número de palets</option>
                      <option onClick={selected} value="Kilos">Por cantidad en kilos</option>
                      <option onClick={selected} value="Franco">Por franco (€)</option>
                  </select>
              </div>

              {calculateType === "Palets" ? (
                <div className="row d-flex justify-content-around">
                    <div className="col-md-5">
                        <label className="d-flex justify-content-center mt-4">Cantidad mínima de palets</label>
                        <div className="d-flex justify-content-center mt-4">
                          <input name="minPalets" type="number" className="form-control"style={{maxWidth:"25vw"}} ref={register()}
                          placeholder={supplier.minPalets !== undefined ? ("valor actual: " + supplier.minPalets) : ("valor actual: no guardado")}/>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <label className="d-flex justify-content-center mt-4">Cantidad máxima de palets</label>
                        <div className="d-flex justify-content-center mt-4">
                          <input name="maxPalets" type="number" className="form-control" style={{maxWidth:"25vw"}} ref={register()}
                          placeholder={supplier.maxPalets !== undefined ? ("valor actual: " + supplier.maxPalets) : ("valor actual: no guardado")}/>
                        </div>
                    </div>
                </div>
                
              ): calculateType === "Kilos" ? (
                  <div className="row d-flex justify-content-around">
                    <div className="col-md-5">
                        <label className="d-flex justify-content-center mt-4">Cantidad mínima de kilos</label>
                        <div className="d-flex justify-content-center mt-4">
                          <input name="minKilos" type="number" className="form-control" style={{maxWidth:"25vw"}} ref={register()}
                          placeholder={supplier.minKilos !== undefined ? ("valor actual: " + supplier.minKilos) : ("valor actual: no guardado")}/>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <label className="d-flex justify-content-center mt-4">Cantidad máxima de kilos</label>
                        <div className="d-flex justify-content-center mt-4">
                          <input name="maxKilos" type="number" className="form-control" style={{maxWidth:"25vw"}} ref={register()}
                          placeholder={supplier.maxKilos !== undefined ? ("valor actual: " + supplier.maxKilos) : ("valor actual: no guardado")}/>
                        </div>
                    </div>
                </div>

              ): calculateType === "Franco" ? (
                <div>
                  <label className="d-flex justify-content-center mt-4">Franco mínimo</label>
                    <div className="d-flex justify-content-center mt-4">
                      <input name="money" type="number" className="form-control" style={{maxWidth:"25vw"}} ref={register()}
                      placeholder={supplier.money !== undefined ? ("valor actual: " + supplier.money) : ("valor actual: no guardado")}/>
                    </div>
                </div>
              ): (
                <div></div>
              )}
              <div className="d-flex justify-content-center">
                <button className="btn btn-outline-info mt-5">Guardar</button>
              </div>
            </form>
            {initialized === true ? (
              <Redirect to="/proveedores"/>
            ): (<span></span>)}
          </Card.Body>
          {/* <PrintValidatedMessage message={validatedMessage}/> */}
        </Card>
      </div>
    );
  }
  
  export default ModifySupplier;