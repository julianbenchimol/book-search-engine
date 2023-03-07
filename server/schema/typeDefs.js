const {gql} = require("apollo-server-express")

const typeDefs = gql `
    type User {
        _id: ID
        username: String
        email: String
        bookCount: String
        savedBooks: [Book]
    }

    type Book {
        _id: ID
        bookId: String
        author: String
        description: String
        title: String
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }

    input BookInput{
        bookId: String
        author: String
        description: String
        title: String
        image: String
        link: String
    }

    input Query {
        me: User
    }

    type Mutation{
        login(email: String!, password: String!): Auth
        saveBook(input: BookInput): User
        removeBook(bookId: String!): User
    }
`

module.exports = typeDefs;