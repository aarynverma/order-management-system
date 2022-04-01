import React, { useContext } from "react";
import OrderForm from "./OrderForm";
import { useParams } from "react-router-dom";
import OrderContext from "../context/OrderContext";

const EditOrder = ({ history }) => {
  const { books, setBooks } = useContext(OrderContext);
  const { id } = useParams();
  const bookToEdit = books.find((book) => book.id === id);

  const handleOnSubmit = (book) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks([book, ...filteredBooks]);
    history.push("/home");
  };

  return (
    <div>
      <OrderForm book={bookToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditOrder;
