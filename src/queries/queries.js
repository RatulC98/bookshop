import { gql } from "@apollo/client";

const getAuthorsQuery = gql`
  {
    authors {
      id
      name
    }
  }
`;

const addBookQuery = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      id
      name
    }
  }
`;

const getBooksQuery = gql`
  {
    books {
      id
      name
      genre
    }
  }
`;

const getBookDetailsQuery = gql`
  query GetBook($id: String){
    book(id: $id) {
      name
      genre
      author {
        id
        name
        age
        books {
          id
          name
          genre
        }
      }
    }
  }
`


export {addBookQuery, getAuthorsQuery, getBooksQuery, getBookDetailsQuery};