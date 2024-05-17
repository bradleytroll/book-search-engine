import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

// Create an HTTP link to your GraphQL server
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Set up middleware to include the auth token in requests
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Create Apollo client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<SearchBooks />} />
            <Route exact path='/saved' element={<SavedBooks />} />
            <Route path='*' element={<h1 className='display-2'>Wrong page!</h1>} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
