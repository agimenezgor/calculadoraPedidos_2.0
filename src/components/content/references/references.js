import React from 'react';
import PrintReferences from '../printReferences';
import { useParams } from 'react-router-dom';
function References() {
    let number = parseInt(useParams().number.substring(1)); 
    return (
      <div>
        <PrintReferences number={number}/>
      </div>
    );
  }
  
  export default References;