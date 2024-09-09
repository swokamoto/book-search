const typeDefs = `
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        books: [Book]!
    }

    type Book {
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]!
        user(userId: ID!): User
        me: User
    }

    input BookInput {
        authors: [String]
        description: String!
        title: String!
        bookId: String!
        image: String
        link: String
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        saveBook(input: BookInput!): User
        removeBook(bookId: String!): User
    }
`;

module.exports = typeDefs;