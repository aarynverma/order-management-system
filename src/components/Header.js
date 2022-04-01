import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
const Header = ({ login, setLogin }) => {
  const history = useHistory();
  return (
    <header>
      <h1>Order Management System</h1>
      {login && (
        <>
          <Button
            variant="outline-primary"
            className="logoutbtn"
            onClick={() => {
              history.push("/"), setLogin(false);
            }}
          >
            Logout
          </Button>
          <hr />
          <div className="links">
            <NavLink to="/home" className="link" activeClassName="active" exact>
              Order List
            </NavLink>
            <NavLink to="/add" className="link" activeClassName="active">
              Add Order
            </NavLink>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
