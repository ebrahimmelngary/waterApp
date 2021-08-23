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

//==>=>=>===>=>=>=>==>=>=>=>>==>=>=>=> Mutations ==>=>=>=>==>=>=>=>==>=>=>=>==>=>=>=>
//==>=>=>=>==>=>=>=>Register==>=>=>=>==>=>=>=>

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
//==>=>=>=>==>=>=>=>Define Login mutation==>=>=>=>==>=>=>=>

export const loginRequest = gql`
  mutation login($email: String!, $password: String!) {
    login(loginInput: {email: $email, password: $password})
  }
`;

//==>=>=>=>==>=>=>=>CREATE ADDRESS==>=>=>=>==>=>=>=>
export const CREATE_ADDRESS = gql`
  mutation {
    createAddress(
      createAddressInput: {
        apartNumber: "27"
        floor: 2
        building: "33"
        street: "Elmokhles shapana"
        city: "Test"
        country: "Big Country"
        mobile: "+201000000203"
      }
    ) {
      id
    }
  }
`;
//==>=>=>=>==>=>=>=>Create Order==>=>=>=>==>=>=>=>

export const CREATE_ORDER = gql`
  mutation createOrder(
    $amount: Float!
    $paymentMethod: String!
    $companyId: String!
    $userAddress: String!
  ) {
    createOrder(
      createOrderInput: {
        waterAmount: $amount
        paymentMethod: $paymentMethod
        company: $companyId
        address: $userAddress
      }
    ) {
      id
    }
  }
`;

//==>=>=>=>==>=>=>=> Create Favorite ==>=>=>=>==>=>=>=>

export const ADD_TO_FAVORITE = gql`
  mutation creteFavorite($companyId: String!) {
    createFavorite(createFavoriteInput: {company: $companyId}) {
      customer {
        id
      }
      company {
        id
        email
        name
      }
    }
  }
`;

//==>=>=>=>==>=>=>=> remove from Favorite ==>=>=>=>==>=>=>=>
export const REMOVE_FAV = gql`
  mutation remove($companyId: String!) {
    removeFavorite(id: $companyId)
  }
`;

//==>=>=>=>==>=>==>=>=>=>==>=>=>=>=>=> Queries ==>=>=>=>==>=>=>=>==>=>=>=>==>=>=>=>==>=>=>=>==>=>=>=>
//==>=>=>=>==>=>=>=> getProfile==>=>=>=>==>=>=>=>
export const getProfile = gql`
  {
    me {
      email
      name
    }
  }
`;

//==>=>=>=>==>=>=>=>Home Get Companies==>=>=>=>==>=>=>=>

export const GET_COMPANIES = gql`
  {
    companies {
      id
      name
      role
      isFavorite
      profilePicture
      rating
    }
  }
`;

//==>=>=>=>==>=>=>=> Get Company ByID ==>=>=>=>==>=>=>=>
export const GET_COMPANY = gql`
  query Company($id: String!) {
    company(id: $id) {
      id
      name
      role
      isFavorite
      profilePicture
      rating
    }
  }
`;

//==>=>=>=>==>=>=>=> isFavorite Request ==>=>=>=>==>=>=>=>

export const GET_ISFAVORITE = gql`
  query Favorite($companyId: String!) {
    isFavorite(id: $companyId)
  }
`;
//==>=>=>=>==>=>=>=> Get Favorite Request ==>=>=>=>==>=>=>=>

export const GET_FAVORITE = gql`
  {
    favorites {
      id
      email
      name
      role
      profilePicture
      rating
    }
  }
`;
//==>=>=>=>==>=>=>=>Get Order Status==>=>=>=>==>=>=>=>

export const GET_ORDER_STATUS = gql`
  {
    order(id: "61096d00c994600015e2de6d") {
      status
      waterAmount
      shippingCost
      total
      paymentMethod
      estimatedDeliveryDate
    }
  }
`;
//=>=>==>=>=>=>==>=>=>=>Get orders==>=>=>=>==>=>=>
export const GET_ORDERS = gql`
  {
    orders(pagination: {page: 1, perPage: 20}) {
      id
      status
      company {
        name
        id
        profilePicture
      }

      total

      estimatedDeliveryDate
    }
  }
`;
//=>=>==>=>=>=>==>=>=>=>Get Company Reviews==>=>=>=>==>=>=>
export const Get_CompanyReviews = gql`
  query companyReviews($id: String!) {
    companyReviews(id: $id, pagination: {perPage: 20, page: 1}) {
      id
      message
      customer {
        id
        name
      }
    }
  }
`;
