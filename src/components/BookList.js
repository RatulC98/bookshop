import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

export default function BookList() {
  const { loading, error, data } = useQuery(getBooksQuery);
  const [bookId, setBookId] = useState(undefined);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>
  return (
    <div>
      <ul id="book-list">
        { data.books.map((book) => (<li key={book.id} onClick={(e)=>(setBookId(book.id))} >{book.name}</li>)) }
      </ul>
      <BookDetails bookId={bookId}/>
      {/* {console.log(bookId)} */}
    </div>
  );
}
