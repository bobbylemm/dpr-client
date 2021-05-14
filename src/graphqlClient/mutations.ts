import { gql } from 'graphql-request'

export const addPost = gql`
  mutation CreatePost($payload: { $title: String! }) {
    createPost(payload: { title: $title, releaseDate: $releaseDate }) {
      title
    }
  }
`
export const updatePost = gql`
  mutation CreatePost($payload: { id: Int!, $title: String! }) {
    updatePost(payload: { id: $id, title: $title }) {
      title
    }
  }
`

export const authRegister = gql`
  mutation Register($payload: { $email: String!, $name: String!, $password: String! }) {
    register(payload: { email: $email, name: $name, password: $password }) {
      email
      name
    }
  }
`
export const authLogin = gql`
  mutation Login($payload: { $email: String!, $password: String! }) {
    register(payload: { email: $email, password: $password }) {
      email
      name
    }
  }
`