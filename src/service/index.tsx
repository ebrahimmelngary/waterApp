import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {gql} from '@apollo/client';

// Initialize Apollo Client
export const client = new ApolloClient({
  uri: 'https://water-app543.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

const GraphProvider = ({children}: any) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
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
interface registerParam {
  email: string;
  name?: string;
  password: string;
  role?: string;
}

export const registerRequest = ({
  email,
  password,
  name,
  role,
}: registerParam) => gql`


  mutation{
    register(registerInput: {
    email: ${email}
    password: ${password}
    name: ${name}
    role: ${role}
    }){
      email
      name
      }
    }

`;
//Define Login mutation
// interface loginParam {
//   email: string;
//   password: string;
// }
export const loginRequest = gql`
  mutation login($email: String!, $password: String!) {
    login(loginInput: {email: $email, password: $password})
  }
`;
// Home Get Companies

export const getCompanies = gql`
  {
    companies {
      id
      name
      role
      image: profilePicture
    }
  }
`;
