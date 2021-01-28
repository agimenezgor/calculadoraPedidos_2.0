import React from 'react';
import SignUp from './signUp/signUp';
import SignIn from './signIn/signIn';
import PageTitle from './pageTitle/pageTitle';
import ModifyData from './modifyData/modifyData';
import CalculateOrder from './calculateOrder/calculateOrder';
import NewSupplier from './newSupplier/newSupplier';
import Suppliers from './suppliers/suppliers';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

function Header() {
    const cookies = new Cookies();
    let userInitialized = false;

    if(cookies.get('name') !== undefined){
      userInitialized = true;
    }

    return (
      <div className="app-header container-fluid">
          <div className="m-0 row d-flex align-items-center w-100">
            
            <div className="col-md-4"><Link to="/"><PageTitle/></Link></div>

            <div className="col-md-5 d-flex justify-content-between">
              <Link to="/calculadora"><CalculateOrder/></Link>
              <Link to="/nuevo_proveedor"><NewSupplier/></Link>
              <div><ModifyData/></div>
              <Link to="/proveedores"><Suppliers/></Link>
            </div>

            {userInitialized === true ? (
              <h3 className="col-md-3 d-flex d-flex justify-content-center text-info">Bienvenido {cookies.get('name')}!</h3>
            ): (
                <div className="col-md-3 d-flex justify-content-end">
                  <Link to="/registro"><SignUp/></Link>
                  <Link to="/inicio_sesion"><SignIn/></Link>
                </div>  
            )} 
          </div>
        </div>
    );
  }
  
  export default Header;