import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://water-app543.herokuapp.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${null}`,
  },
});

const GraphProvider = ({children}: any) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
export default GraphProvider;
//Register

//Login
