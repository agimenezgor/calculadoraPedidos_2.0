import React from 'react';
import { Route, Switch} from "react-router-dom";
import Content from './components/content/content';
import CalculateOrder from './components/content/calculateOrder/calculateOrder';
import NewSupplier from './components/content/newSupplier/newSupplier';
import Suppliers from './components/content/suppliers/suppliers';
import SignUp from './components/content/signUp/signUp';
import SignIn from './components/content/signIn/signIn';
import ModifySupplier from './components/content/modifyData/modifySupplier/modifySupplier';
import ModifyReference from './components/content/modifyData/modifyReference/modifyReference';
import NewReference from './components/content/modifyData/newReference/newReference';
import RemoveSupplier from './components/content/modifyData/removeSupplier/removeSupplier';
import RemoveReference from './components/content/modifyData/removeReference/removeReference';
import References from './components/content/references/references';

function AppRouter(props){
    return (
        <Switch>
                <Route exact path="/"><Content/></Route>
                
                <Route path="/calculadora"><CalculateOrder/></Route>
                <Route path="/nuevo_proveedor"><NewSupplier /></Route>
                
                <Route path="/modificar_proveedor/:number"><ModifySupplier/></Route>
                <Route path="/modificar_referencia/:supplier/:number"><ModifyReference/></Route>
                <Route path="/nueva_referencia/:number"><NewReference/></Route>
                <Route path="/eliminar_proveedor/:number"><RemoveSupplier/></Route>
                <Route path="/eliminar_referencia/:supplier/:number"><RemoveReference/></Route>

                <Route path="/proveedores"><Suppliers/></Route>
                <Route path="/referencias/:number"><References/></Route>
                
                <Route path="/registro"><SignUp/></Route>
                <Route path="/inicio_sesion"><SignIn setUser = {props.setUser}/></Route>  
            </Switch>
    );
  }
  
  export default AppRouter;