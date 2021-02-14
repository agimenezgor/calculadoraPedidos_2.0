import React from 'react';

function Order(props) {
    return (
      <div>
        this is the order page

        <div className="d-flex justify-content-center p-4">
            <button onClick={() => props.setShowed(props.showed + 1)} className="btn btn-outline-secondary">Empezar!!</button>
        </div>
      </div>
    );
  }
  
  export default Order;