import React from "react";
import { getBookDetailsQuery } from "../queries/queries";
import { useQuery } from "@apollo/client";

export default function BookDetails(props) {
  const { loading, error, data } = useQuery(getBookDetailsQuery, {
    variables: { id: props.bookId }
  });

  if(loading){
    return <div>loading... </div>
  }
  else if(data.book != null){
    const {book} = data;
    return (
        <div>
            <h1>Book Details</h1>
            <h3>{book.name}</h3>
            <p>Genre: {book.genre}</p>
            <p>Author Name: {book.author.name}</p>
            <p>Author Age: {book.author.age}</p>
            <p>All Books By this Author:</p>
            <ul>
                {book.author.books.map((book) => (<li key={book.id}>{book.name}</li>))}
            </ul>

        </div>
    )
  }

}
