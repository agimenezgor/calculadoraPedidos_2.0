import React from 'react';
import { Dropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ModifyData() {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="outline-info" size="lg" id="dropdown-basic">Modificar datos</Dropdown.Toggle>

        <Dropdown.Menu>
            <Link to="/modificar_proveedor/:number"><Dropdown.Item as="button">Modificar proveedor</Dropdown.Item></Link>
            <Link to="/modificar_referencia"><Dropdown.Item as="button">Modificar referencia</Dropdown.Item></Link>
            <Link to="/referencias/:number"><Dropdown.Item as="button">Referencias</Dropdown.Item></Link>
            <Link to="/eliminar_proveedor/:number"><Dropdown.Item as="button">Eliminar proveedor</Dropdown.Item></Link>
            <Link to="/eliminar_referencia"><Dropdown.Item as="button">Eliminar referencia</Dropdown.Item></Link>
        </Dropdown.Menu>
    </Dropdown>
    );
  }
  
  export default ModifyData;