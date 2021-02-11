import React from 'react';

function PrintFormInput(props){
    function setName(){
      switch(props.name){
        case "name":
          return props.supplier.name;
        case "number":
          return props.supplier.number;
        case "days":
          return props.supplier.days;
        case "minPalets":
          return props.supplier.minPalets;
        case "maxPalets":
          return props.supplier.maxPalets;
        default:
          return props.supplier.money;
      }
    }
    return <div>
                <label className="d-flex justify-content-center mt-4">{props.label}</label>

                <div className="d-flex justify-content-center mt-4">

                  <input name={props.name} type={props.type} className="form-control"style={{maxWidth:`${props.width}`}} 
                  placeholder={setName() === undefined ? ("valor actual: no guardado") : ("")} 
                  ref={props.register({req: true})} defaultValue={setName()}/>

                </div>
            </div>
}
export default PrintFormInput;