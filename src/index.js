import React from "react";
import ReactDom from "react-dom";

function First() {
  return (
    <div>
      <Booksaved />
      <Booksaved />
      <Booksaved />
      <Booksaved />
    </div>
  );
}

function Bookdetails() {
  return (
    <div>
      <p>Hira No Khajano</p>
      <p>Author : I K Vijliwala</p>
    </div>
  );
}

function BookPrice() {
  return <p style={{ display: "inline" }}>50000</p>;
}

function Booksaved() {
  return (
    <div>
      <Bookdetails />
      <BookPrice />
    </div>
  );
}

ReactDom.render(<First />, document.getElementById("root"));
