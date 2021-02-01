import React from 'react';
import { useParams } from 'react-router-dom';

function ModifySupplier() {
    let number = parseInt(useParams().number.substring(1));
    return (
      <div>
        this is the ModifySupplier page. Number of supplier: {number} 
      </div>
    );
  }
  
  export default ModifySupplier;