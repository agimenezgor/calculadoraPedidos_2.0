import React from 'react';
import { useParams } from 'react-router-dom';
function NewReference() {
  let number = parseInt(useParams().number.substring(1));  
  return (
      <div>
        this is the references page. Suppliers number: {number}
      </div>
    );
  }
  
  export default NewReference;