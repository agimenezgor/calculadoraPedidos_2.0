import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useForm } from "react-hook-form";
import PrintValidatedMessage from "./printValidateMessage";
import ValidateData from "./validateData";
import { Redirect, useParams } from "react-router-dom";
import Cookies from 'universal-cookie';
import swal from 'sweetalert';

function NewReference() {
  const supplier = useParams().number.substring(1);
  const { register, handleSubmit, errors } = useForm();
  const [validatedMessage, setValidatedMessage] = useState("");
  const [initialized, setInitialized] = useState(false);

  async function onSubmit (data, e) {
    await ValidateData(setValidatedMessage, data, e, setInitialized, supplier);
  }
  
  const cookies = new Cookies();
  if(cookies.get('name') === undefined){
    setTimeout(() => {
      swal({
        title: "Inicia sesión",
        text: "Recuerda! Debes iniciar sesión para empezar",
        icon: "warning",
        button: {
            text: "Aceptar",
        }
        })
        .then(() => window.location.href="http://localhost:3000/inicio_sesion")
    }, 1500);
    /* setTimeout(() => {
      alert("Inicia sesión para guardar una nueva referencia");
      window.location.href="http://localhost:3000/inicio_sesion";
    }, 1000); */
  }


  return (
      <div className="bg-info pt-4">
        <Card className="container" text="info" style={{borderRadius: "1em", minHeight:"60vh", minWidth:"40vw"}}>
          <Card.Header>
            <h2 className="d-flex justify-content-center p-4">Introduce los datos de la nueva referencia</h2>
          </Card.Header>
          <Card.Body className="d-flex justify-content-center">

          <form onSubmit={handleSubmit(onSubmit)}>
              <label className="d-flex justify-content-center mt-4">Introduce el nombre de la referencia</label>
              <div className="d-flex justify-content-center mt-4">
                  <input
                      name="name"
                      className="form-control"
                      style={{minWidth:"45vw"}}
                      ref={
                        register({
                          required: {
                            value: true,
                            message: "Introduce un nombre de referencia válido"
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
                                    message: "Introduce un número de referencia válido"
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
                      <label className="d-flex justify-content-center mt-4">Condicionante</label>
                      <div className="d-flex justify-content-center mt-4">
                          <input
                              name="conditioning"
                              type="number"
                              className="form-control"
                              style={{maxWidth:"15vw"}}
                              ref={
                                register({
                                  required: {
                                    value: true,
                                    message: "Introduce un condicionante correcto"
                                  }
                                })
                              }
                            />
                      </div>
                      <span className="text-danger text-small d-block mb-2 d-flex justify-content-center">
                          {errors?.conditioning?.message}
                      </span> 
                  </div> 
                  <div className="col-md-5">
                      <label className="d-flex justify-content-center mt-4">Facing</label>
                      <div className="d-flex justify-content-center mt-4">
                          <input
                              name="facing"
                              type="number"
                              className="form-control"
                              style={{maxWidth:"15vw"}}
                              ref={
                                register({
                                  required: {
                                    value: true,
                                    message: "Introduce un facing correcto"
                                  }
                                })
                              }
                            />
                      </div>
                      <span className="text-danger text-small d-block mb-2 d-flex justify-content-center">
                          {errors?.facing?.message}
                      </span> 
                  </div> 
                  <div className="col-md-5">
                      <label className="d-flex justify-content-center mt-4">Ventas mensuales</label>
                      <div className="d-flex justify-content-center mt-4">
                          <input
                              name="sales"
                              type="number"
                              className="form-control"
                              style={{maxWidth:"15vw"}}
                              ref={
                                register({
                                  required: {
                                    value: true,
                                    message: "Introduce un número de ventas correcto"
                                  }
                                })
                              }
                            />
                      </div>
                      <span className="text-danger text-small d-block mb-2 d-flex justify-content-center">
                          {errors?.sales?.message}
                      </span> 
                  </div>    
                   
              </div>
              
              <div className="d-flex justify-content-center">
                <button className="btn btn-outline-info mt-5">Guardar</button>
              </div>
            </form>
            {initialized === true ? (
              <Redirect to={"/referencias/:" + supplier}/>
            ): (<span></span>)}
          </Card.Body>
          <PrintValidatedMessage message={validatedMessage}/>
        </Card>
      </div>
    );
  }
  
  export default NewReference;