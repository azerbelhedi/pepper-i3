import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation CreateUser($email: String!, $password: String!) {
    creatUser(
      userInput: { email: $email, password: $password, userKind: "student" }
    ) {
      _id
      email
    }
  }
`;
