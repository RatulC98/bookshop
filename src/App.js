import './App.css';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import { ApolloClient, ApolloProvider, InMemoryCache, gql } from '@apollo/client'


const client = new ApolloClient({
  // uri: 'http://localhost:4000/graphql',
  uri: 'https://bookstore-server.onrender.com/graphql',
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <div className='App-header'>
        <h1>Book List</h1>
        <BookList/>
        <h1>Add Books</h1>
        <AddBook/>
      </div>
    </ApolloProvider>
  );
}

export default App;
