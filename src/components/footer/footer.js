import React from 'react';
import { FaLinkedin, FaGithubSquare} from 'react-icons/fa';

function Footer() {
    return (
      <div className="container d-flex justify-content-around align-items-center">
          <a href="https://github.com/agimenezgor" target="_blank" rel="noreferrer">
              <FaGithubSquare cursor="pointer" className="text-warning" size="2em"/>
          </a>
          <h4 className="pt-2 text-secondary d-flex justify-content-center">
              Copyright © 2021 Álvaro Giménez - Design: Álvaro Giménez 
          </h4>
          <a href="https://www.linkedin.com/in/alvaro-gimenez-gorris/" target="_blank" rel="noreferrer">
              <FaLinkedin cursor="pointer" className="text-warning" size="2em"/>
          </a>
          
      </div>
      
    );
  }
  
  export default Footer;