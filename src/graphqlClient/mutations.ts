import { gql } from 'graphql-request'

export const addPost = gql`
  mutation CreatePost($title: String!) {
    createPost(payload: { title: $title }) {
      title
      createdAt
    }
  }
`
export const updatePost = gql`
  mutation UpdatePost($id: Float!, $title: String!) {
    updatePost(payload: { id: $id, title: $title }) {
      title
    }
  }
`

export const authRegister = gql`
  mutation Register($email: String!, $name: String!, $password: String!) {
    register(payload: { email: $email, name: $name, password: $password }) {
      email
      name
    }
  }
`
export const authLogin = gql`
  mutation Login($email: String!, $password: String!) {
    login(payload: { email: $email, password: $password }) {
      email
      name
    }
  }
`

export const authLogut = gql`
  mutation Logout {
    logout
  }
`