import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

// Initialize Apollo Client
export const client = new ApolloClient({
  uri: 'https://water-app543.herokuapp.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZmVmZTk1ZmFhMjk5MDAxNTMyNzg5MyIsImVtYWlsIjoibWdAZ21haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjI3NDI2MjY3fQ._WtxbTnaW1rVDRXG5aSLZY7n_nRw_W11efM6q6NwEZo'}`,
  },
});

const GraphProvider = ({children}: any) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
export default GraphProvider;
//Register

//Login
