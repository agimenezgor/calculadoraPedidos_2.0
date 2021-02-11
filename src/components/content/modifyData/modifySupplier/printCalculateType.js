import React from 'react';


function PrintCalculateType(props){
    return <div>
            {props.calculateType === "Palets" ? (
                <div className="row d-flex justify-content-around">
                    <div className="col-md-5">
                        <label className="d-flex justify-content-center mt-4">Cantidad mínima de palets</label>
                        <div className="d-flex justify-content-center mt-4">
                          <input name="minPalets" type="number" className="form-control"style={{maxWidth:"25vw"}} 
                          placeholder={props.supplier.minPalets === undefined ? ("valor actual: no guardado") : ("")} ref={props.register() }
                          defaultValue={props.supplier.minPalets}/>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <label className="d-flex justify-content-center mt-4">Cantidad máxima de palets</label>
                        <div className="d-flex justify-content-center mt-4">
                          <input name="maxPalets" type="number" className="form-control" style={{maxWidth:"25vw"}} ref={props.register() }
                          placeholder={props.supplier.maxPalets === undefined ? ("valor actual: no guardado") : ("")}
                          defaultValue={props.supplier.maxPalets}/>
                        </div>
                    </div>
                </div>
                
              ): props.calculateType === "Kilos" ? (
                  <div className="row d-flex justify-content-around">
                    <div className="col-md-5">
                        <label className="d-flex justify-content-center mt-4">Cantidad mínima de kilos</label>
                        <div className="d-flex justify-content-center mt-4">
                          <input name="minKilos" type="number" className="form-control" style={{maxWidth:"25vw"}} ref={props.register()}
                          placeholder={props.supplier.minKilos === undefined ? ("valor actual: no guardado") : ("")}
                          defaultValue={props.supplier.minKilos}/>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <label className="d-flex justify-content-center mt-4">Cantidad máxima de kilos</label>
                        <div className="d-flex justify-content-center mt-4">
                          <input name="maxKilos" type="number" className="form-control" style={{maxWidth:"25vw"}} ref={props.register()}
                          placeholder={props.supplier.maxKilos === undefined ? ("valor actual: no guardado") : ("")}
                          defaultValue={props.supplier.maxKilos}/>
                        </div>
                    </div>
                </div>

              ): props.calculateType === "Franco" ? (
                <div>
                  <label className="d-flex justify-content-center mt-4">Franco mínimo</label>
                    <div className="d-flex justify-content-center mt-4">
                      <input name="money" type="number" className="form-control" style={{maxWidth:"25vw"}} ref={props.register()}
                      placeholder={props.supplier.money === undefined ? ("valor actual: no guardado") : ("")}
                      defaultValue={props.supplier.money}/>
                    </div>
                </div>
              ): (
                <div></div>
              )}
            </div>
}
export default PrintCalculateType;