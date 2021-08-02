import React, {useEffect} from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {gql} from '@apollo/client';

import {useSelector} from 'react-redux';

// Initialize Apollo Client

const GraphProvider = ({children}: any) => {
  const token = useSelector(state => state?.user.token);
  useEffect(() => {
    return token;
  }, [token]);

  const client = new ApolloClient({
    uri: 'https://water-app543.herokuapp.com/graphql',
    cache: new InMemoryCache(),
    headers: {
      Authorization: token ? `bearer ${token}` : '',
    },
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
export default GraphProvider;
//getProfile
export const getProfile = gql`
  {
    me {
      email
      name
    }
  }
`;
//Register

export const registerRequest = gql`
  mutation register(
    $email: String!
    $password: String!
    $name: String
    $role: String
  ) {
    register(
      registerInput: {
        email: $email
        password: $password
        name: $name
        role: $role
      }
    ) {
      email
      role
      name
    }
  }
`;
//Define Login mutation

export const loginRequest = gql`
  mutation login($email: String!, $password: String!) {
    login(loginInput: {email: $email, password: $password})
  }
`;
// Home Get Companies

export const getCompanies = gql`
  {
    companies(filter: {role: "driver"}) {
      id
      name
      role
      image: profilePicture
    }
  }
`;
