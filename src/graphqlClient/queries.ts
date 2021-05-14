import { gql } from 'graphql-request'

export const getUserPosts = gql`
{
    posts {
        id
        title
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