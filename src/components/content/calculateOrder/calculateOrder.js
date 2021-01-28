import React from 'react';
import Cookies from 'universal-cookie';

function CalculateOrder() {
    const cookies = new Cookies();
    let userInitialized = false;

    if(cookies.get('name') !== undefined){
      userInitialized = true;
    }
    return (
      <div>
        {userInitialized === true ? (
          <h3>nombre de usuario: {cookies.get('name')}</h3>
        ): (<span>This is the calculate order page</span>)}
        
      </div>
    );
  }
  
  export default CalculateOrder;