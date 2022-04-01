import React, { useContext } from "react";
import OrderForm from "./OrderForm";
import OrderContext from "../context/OrderContext";

const AddOrder = ({ history }) => {
  const { books, setBooks } = useContext(OrderContext);

  const handleOnSubmit = (book) => {
    setBooks([book, ...books]);
    history.push("/home");
  };

  return (
    <React.Fragment>
      <OrderForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddOrder;
