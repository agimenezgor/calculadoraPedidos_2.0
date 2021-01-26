import React from 'react';
import Video from '../img/video.mp4';
import Typing from 'react-typing-animation';

function Typed (){
  return(
    <div>
        <Typing><h1 className="d-flex justify-content-center align-items-end" style={{minHeight:"30vh" }}>
          <strong>Bienvenido a la calculadora de pedidos</strong>
        </h1>
        
        </Typing>

        <div>
          <h2 className="text-light d-flex justify-content-center align-items-center" style={{minHeight:"30vh" }}>
            <Typing startDelay="3000"><h2>Regístrate y mejora la gestión de tus proveedores de forma sencilla</h2></Typing> 
          </h2>
        </div>
    </div>
        
  )
}

function Content() {
  <link rel="stylesheet" href="https://video-react.github.io/assets/video-react.css"/>
    return (
      <div style={{maxHeight:"85vh"}}>
        <video  autoPlay="autoplay" loop="loop" muted width="100%"
          style={{ objectFit:"cover", position:"fixed",width:"100", height:"85vh"}}>
            
            <source src={Video} type="video/mp4"></source>
        </video>
        <div style={{backgroundImage:"linear-gradient(to bottom, rgba(192,192,192,0.5), rgba(0,0,255,0.4))",
           position:"relative",width:"100", height:"85vh"}}>
          <Typed></Typed>
        </div>
      </div>
    );
  }
  
  export default Content;