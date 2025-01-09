import * as React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider,createHttpLink } from '@apollo/client';
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
  link: authLink.concat(httpLink),
});

function App() {
  

  return (
    <ApolloProvider client={client}>
      <Outlet />
    </ApolloProvider>
  )
};

export default App;
