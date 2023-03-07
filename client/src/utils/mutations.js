import {gql} from '@apollo/client'

export const LOGIN = gql `
    mutation LoginUser($email: String!, $password: String!){
        login(email: $email, password: $password){
            token
            user{
                _id
                username
                email
                bookCount
                savedBooks{
                    bookId
                    title
                    description
                    author
                    link
                    image
                }
            }
        }
    }
`

export const ADD_USER = gql `
    mutation addUser($username: String!, $email: String!, $password: String!){
        addUser(username: $username, email: $email, password: $password){
            token
            user{
                _id
                username
            }
        }
    }
`

export const SAVE_BOOK = gql `
    mutation saveBook($input: bookInput!){
        saveBook(input: $input){
            _id
            username
            email
            savedBooks{
                bookId
                title
                description
                author
                link
                image
            }
        }
    }

`