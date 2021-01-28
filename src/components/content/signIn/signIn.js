import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import PrintValidatedMessage from "./printValidatedMessage";
import ValidateData from "./validateData";

function SignIn(props) {
  const { register, handleSubmit, errors } = useForm();
  const [validatedMessage, setValidatedMessage] = useState("");
  const [initialized, setInitialized] = useState(false);

  async function onSubmit (data, e) {
    const setUser = props.setUser;
    await ValidateData(setUser, setInitialized, setValidatedMessage, data, e);
  }
  return (
    <div className="container text-info pt-5 d-flex justify-content-center">
      <Card className="mt-5" style={{minHeight:"50vh",minWidth:"40vw", maxWidth:"45vw"}}>
        <Card.Header>
          <h2 className="d-flex justify-content-center">Inicio de sesión</h2>
        </Card.Header>
        <Card.Body>
          <form onSubmit={handleSubmit(onSubmit)}> 
              <label className="d-flex justify-content-center mt-4">Introduce tu email</label>
              <div className="d-flex justify-content-center mt-4">
                  <input
                    name="email"
                    className="form-control"
                    style={{maxWidth:"25vw"}}
                    ref={
                      register({
                        required: {
                          value: true,
                          message: "Introduce un correo válido"
                        }
                      })
                    }
                  />
              </div>
              <span className="text-danger text-small d-block mb-2 d-flex justify-content-center">
                  {errors?.email?.message}
              </span>
              
              <label className="d-flex justify-content-center mt-4">Introduce tu contraseña</label>
              <div className="d-flex justify-content-center mt-4">
                  <input
                    type= "password"
                    name="password"
                    className="form-control"
                    style={{maxWidth:"25vw"}}
                    ref={
                      register({
                        required: {
                          value: true,
                          message: "Introduce una contraseña válida"
                        }
                      })
                    }
                  />
              </div>
              
              <span className="text-danger text-small d-block mb-2 d-flex justify-content-center">
                  {errors?.password?.message}
              </span>
              
              <div className="d-flex justify-content-center"><button className="btn btn-outline-info mt-5">Inicia sesión</button></div>
              
              <PrintValidatedMessage message={validatedMessage}/>
          
          </form>
          {initialized === true ? (
            <Redirect to="/calculadora"/>
          ): (<span></span>)}
        </Card.Body>
      </Card>
    </div>
  );
  }
  
  export default SignIn;