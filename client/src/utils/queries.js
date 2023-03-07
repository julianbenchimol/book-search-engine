import {gql} from '@apollo/client'

export const GET_USER = gql `
    {
        user{
            _id
            username
            email
            bookCount
            savedBooks{
                bookId
                author
                image
                description
                title
                link
            }
        }
    }

`