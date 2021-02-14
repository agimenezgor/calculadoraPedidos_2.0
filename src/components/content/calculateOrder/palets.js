import React from 'react';

function Palets(props) {
    return (
      <div>
        this is the palets page

        <div className="d-flex justify-content-center p-4">
            <button onClick={() => props.setShowed(props.showed + 1)} className="btn btn-outline-secondary">Hecho!!</button>
        </div>
      </div>
    );
  }
  
  export default Palets;