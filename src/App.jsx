import * as React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Outlet } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('auth_token');
  return {
    ...headers,
    authorization: token ? `Bearer ${token}` : '',
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

function App() {
  

  return (
    <ApolloProvider>
      
    </ApolloProvider>
  )
}

export default App
