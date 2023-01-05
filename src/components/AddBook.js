import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { addBookQuery, getAuthorsQuery, getBooksQuery, getBookDetailsQuery } from "../queries/queries";

export default function AddBook() {
  const { loading, error, data } = useQuery(getAuthorsQuery);
  const [addBook, { mutationData, mutationLoading, mutationError }] =
    useMutation(addBookQuery);

  //const [book, setBook] = useState(undefined);
  const [name, setName] = useState(undefined);
  const [genre, setGenre] = useState(undefined);
  const [authorId, setAuthorId] = useState(undefined);

  function displayOption() {
    if (loading) {
      return <option disabled>loading authors...</option>;
    } else {
      return data.authors.map((author) => (
        <option key={author.id} value={author.id}>
          {author.name}
        </option>
      ));
    }
  }

  return (
    <form
      id="add-book"
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        addBook({
          variables: {
            name: name,
            genre: genre,
            authorId: authorId,
          },
          refetchQueries: [ { query: getBooksQuery } ],
        });
      }}
    >
      <div className="field">
        <label>Book Name: </label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="field">
        <label>Genre: </label>
        <input type="text" onChange={(e) => setGenre(e.target.value)} />
      </div>

      <div className="field">
        <label>Author: </label>
        <select name="" id="" onChange={(e) => setAuthorId(e.target.value)}>
          <option value="">Select Author</option>
          {displayOption()}
        </select>
      </div>

      <button>add</button>
    </form>
  );
}
