import React from 'react';
import PrintFormInput from './printFormInput';

function PrintCalculateType(props){
    return <div>
            {props.calculateType === "Palets" ? (
                <div className="row d-flex justify-content-around">
                    <div className="col-md-5">
                        <PrintFormInput supplier={props.supplier} label="Cantidad mínima de palets" name="minPalets" 
                        type="number" width={"25vw"} register={props.register}/>
                    </div>
                    <div className="col-md-5">
                        <PrintFormInput supplier={props.supplier} label="Cantidad máxima de palets" name="maxPalets" 
                        type="number" width={"25vw"} register={props.register}/>
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
                    <PrintFormInput supplier={props.supplier} label="Franco mínimo" name="money" 
                    type="number" width={"25vw"} register={props.register}/>
                </div>
              ): (
                <div></div>
              )}
            </div>
}
export default PrintCalculateType;