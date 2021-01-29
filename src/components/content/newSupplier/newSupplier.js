import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useForm } from "react-hook-form";
import PrintValidatedMessage from "./printValidateMessage";
import ValidateData from "./validateData";
import { Redirect } from "react-router-dom";

function NewSupplier(props) {

  const { register, handleSubmit, errors } = useForm();
  const [calculateType, setCalculateType] = useState(""); 
  const [validatedMessage, setValidatedMessage] = useState("");
  const [initialized, setInitialized] = useState(false);

  function selected(e) {
    setCalculateType(e.target.value)
  }

  async function onSubmit (data, e) {
    await ValidateData(setValidatedMessage, data, e, setInitialized);
  }

// style={{border: "1px solid #CCC", borderRadius: "1em", minHeight:"60vh", minWidth:"50vw"}}
  return (
      <div className="bg-info pt-4">
        <Card className="container" text="info" style={{borderRadius: "1em", minHeight:"60vh", minWidth:"40vw"}}>
          <Card.Header>
            <h2 className="d-flex justify-content-center p-4">Introduce los datos del nuevo proveedor</h2>
          </Card.Header>
          <Card.Body className="d-flex justify-content-center">

          <form onSubmit={handleSubmit(onSubmit)}>
              <label className="d-flex justify-content-center mt-4">Introduce el nombre del proveedor</label>
              <div className="d-flex justify-content-center mt-4">
                  <input
                      name="name"
                      className="form-control"
                      style={{minWidth:"45vw"}}
                      ref={
                        register({
                          required: {
                            value: true,
                            message: "Introduce un nombre de proveedor válido"
                          }
                        })
                      }


                    />
              </div>
              <span className="text-danger text-small d-block mb-2 d-flex justify-content-center">
                  {errors?.name?.message}
              </span>

              <div className="row d-flex justify-content-around">
                  <div className="col-md-5">
                      <label className="d-flex justify-content-center mt-4">Número de identificación</label>
                      <div className="d-flex justify-content-center mt-4">
                          <input
                              name="number"
                              type="number"
                              className="form-control"
                              style={{maxWidth:"15vw"}}
                              ref={
                                register({
                                  required: {
                                    value: true,
                                    message: "Introduce un número de proveedor válido"
                                  }
                                })
                              }
                            />
                      </div>
                      <span className="text-danger text-small d-block mb-2 d-flex justify-content-center">
                          {errors?.number?.message}
                      </span>
                  </div>
                  <div className="col-md-5">
                      <label className="d-flex justify-content-center mt-4">Días que tardan en servir</label>
                      <div className="d-flex justify-content-center mt-4">
                          <input
                              name="days"
                              type="number"
                              className="form-control"
                              style={{maxWidth:"15vw"}}
                              ref={
                                register({
                                  required: {
                                    value: true,
                                    message: "Introduce un número de días correcto"
                                  }
                                })
                              }
                            />
                      </div>
                      <span className="text-danger text-small d-block mb-2 d-flex justify-content-center">
                          {errors?.days?.message}
                      </span> 
                  </div>   
              </div>
              
              <label className="d-flex justify-content-center mt-4">Tipo de cálculo</label>
              <div className="d-flex justify-content-center mt-4">
                  <select className="form-select"
                          name="calculateType" 
                          required
                          ref={
                            register({
                              required: {
                                value: true,
                                message: "Elige un tipo de cálculo"
                              }
                            })
                          }
                  >
                      <option selected disabled>Elige un tipo de cálculo</option>
                      <option onClick={selected} value="Por número de palets">Por número de palets</option>
                      <option onClick={selected} value="Por cantidad en kilos">Por cantidad en kilos</option>
                      <option onClick={selected} value="Por franco (€)">Por franco (€)</option>
                  </select>
              </div>

              {calculateType === "Por número de palets" ? (
                <div className="row d-flex justify-content-around">
                    <div className="col-md-5">
                        <label className="d-flex justify-content-center mt-4">Cantidad mínima de palets</label>
                        <div className="d-flex justify-content-center mt-4">
                          <input
                              name="minPalets"
                              type="number"
                              className="form-control"
                              style={{maxWidth:"25vw"}}
                              ref={
                                register({
                                  required: {
                                    value: true,
                                    message: "Introduce una cantidad mínima de palets correcta"
                                  }
                                })
                              }
                            />
                        </div>
                        <span className="text-danger text-small d-block mb-2 d-flex justify-content-center">
                            {errors?.minPalets?.message}
                        </span> 
                    </div>
                    <div className="col-md-5">
                        <label className="d-flex justify-content-center mt-4">Cantidad máxima de palets</label>
                        <div className="d-flex justify-content-center mt-4">
                          <input
                              name="maxPalets"
                              type="number"
                              className="form-control"
                              style={{maxWidth:"25vw"}}
                              ref={
                                register({
                                  required: {
                                    value: true,
                                    message: "Introduce una cantidad máxima de palets correcta"
                                  }
                                })
                              }
                            />
                        </div>
                        <span className="text-danger text-small d-block mb-2 d-flex justify-content-center">
                            {errors?.maxPalets?.message}
                        </span>
                    </div>
                </div>
                
              ): calculateType === "Por cantidad en kilos" ? (
                  <div className="row d-flex justify-content-around">
                    <div className="col-md-5">
                        <label className="d-flex justify-content-center mt-4">Cantidad mínima de kilos</label>
                        <div className="d-flex justify-content-center mt-4">
                          <input
                              name="minKilos"
                              type="number"
                              className="form-control"
                              style={{maxWidth:"25vw"}}
                              ref={
                                register({
                                  required: {
                                    value: true,
                                    message: "Introduce una cantidad mínima de kilos correcta"
                                  }
                                })
                              }
                            />
                        </div>
                        <span className="text-danger text-small d-block mb-2 d-flex justify-content-center">
                            {errors?.minKilos?.message}
                        </span>
                    </div>
                    <div className="col-md-5">
                        <label className="d-flex justify-content-center mt-4">Cantidad máxima de kilos</label>
                        <div className="d-flex justify-content-center mt-4">
                          <input
                              name="maxKilos"
                              type="number"
                              className="form-control"
                              style={{maxWidth:"25vw"}}
                              ref={
                                register({
                                  required: {
                                    value: true,
                                    message: "Introduce una cantidad máxima de kilos correcta"
                                  }
                                })
                              }
                            />
                        </div>
                        <span className="text-danger text-small d-block mb-2 d-flex justify-content-center">
                            {errors?.maxKilos?.message}
                        </span>
                    </div>
                </div>

              ): calculateType === "Por franco (€)" ? (
                <div>
                  <label className="d-flex justify-content-center mt-4">Franco mínimo</label>
                    <div className="d-flex justify-content-center mt-4">
                      <input
                          name="money"
                          type="number"
                          className="form-control"
                          style={{maxWidth:"25vw"}}
                          ref={
                            register({
                              required: {
                                value: true,
                                message: "Introduce una cantidad (en euros) mínima correcta"
                              }
                            })
                          }
                        />
                    </div>
                    <span className="text-danger text-small d-block mb-2 d-flex justify-content-center">
                        {errors?.money?.message}
                    </span>
                </div>
              ): (
                <div></div>
              )}
              <div className="d-flex justify-content-center">
                <button className="btn btn-outline-info mt-5">Guardar</button>
              </div>
            </form>
            {initialized === true ? (
              <Redirect to="/nueva_referencia"/>
            ): (<span></span>)}
          </Card.Body>
          <PrintValidatedMessage message={validatedMessage}/>
        </Card>
      </div>
    );
  }
  
  export default NewSupplier;