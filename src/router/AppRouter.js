import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "../components/Header";
import AddOrder from "../components/AddOrder";
import OrderList from "../components/OrderList";
import useLocalStorage from "../hooks/useLocalStorage";
import EditOrder from "../components/EditOrder";
import OrderContext from "../context/OrderContext";
import Login from "../Login/Login";
const AppRouter = () => {
  const [books, setBooks] = useLocalStorage("books", []);
  const [login, setLogin] = useState(false);
  return (
    <BrowserRouter>
      <div>
        <Header login={login} setLogin={setLogin} />
        <div className="main-content">
          <OrderContext.Provider value={{ books, setBooks }}>
            <Switch>
              <Route path="/" exact={true}>
                <Login login={login} setLogin={setLogin} />
              </Route>
              <Route component={OrderList} path="/home" exact={true} />
              <Route component={AddOrder} path="/add" />
              <Route component={EditOrder} path="/edit/:id" />
              <Route component={() => <Redirect to="/" />} />
            </Switch>
          </OrderContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
