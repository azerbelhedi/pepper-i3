import { useQuery, gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
    query Login($email : String!, $password : String!){
        login(email : $email, password : $password){
            userId
            token
            tokenExpiration
        }
    }
`