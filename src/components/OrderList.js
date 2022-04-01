import React, { useContext } from "react";
import _ from "lodash";
import Order from "./Order";
import OrderContext from "../context/OrderContext";

const BooksList = () => {
  const { books, setBooks } = useContext(OrderContext);

  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <React.Fragment>
      <div className="book-list">
        {!_.isEmpty(books) ? (
          books.map((book) => (
            <Order
              key={book.id}
              {...book}
              handleRemoveBook={handleRemoveBook}
            />
          ))
        ) : (
          <p className="message">No Order available. Please add some Order.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default BooksList;
