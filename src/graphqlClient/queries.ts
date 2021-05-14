import { gql } from 'graphql-request'

export const getUserPosts = gql`
{
    posts {
        id
        title
        createdAt
    }
}
`

export const getLoggedInUser = gql`
{
    me {
        name
        email
    }
}
`