const { ApolloServer, gql } = require('apollo-server');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

const { languages, continents, countries } = require('./data');

const typeDefs = gql`
    # type Author {
    #     id: ID!
    #     name: String!
    #     surname: String
    #     age: Int
    #     books(filter: String): [Book!] # if the book exists it cannot be null
    # }

    type Country {
        id: ID!
        name: String!
        code: String!
    }

    type Language {
        id: ID!
        name: String!
    }

    type Continent {
        id: ID!
        name: String!
        code: String!
    }

    # type Book {
    #     id: ID!
    #     title: String!
    #     author: Author
    #     author_id: ID!
    #     score: Float
    #     isPublished: Boolean
    # }

    type Query {
        # books: [Book!] # an array can be empty, but the object inside cannot be null
        # book(id: ID!): Book!

        countries: [Country!]
        

        languages: [Language!]


        continents: [Continent!]

        # authors: [Author!]
        # author(id: ID!): Author!
    }
`;

const resolvers = {
    Query: {
        // books: () => books,

        // book: (parent, args) => books.find(book => book.id === args.id),

        countries: () => countries,
        // country: (parent, args) => countries.find(country => country.code === args.code),

        languages: () => languages,

        continents: () => continents,

        // authors: () => authors,

        // author: (parent, args) => authors.find(author => author.id === args.id),  
    },

    // Book: {
    //     author: (parent) => authors.find((author) => author.id ===  parent.author_id),
    // },

    // Author: {
    //     books: (parent, args) => {
    //     let filtered = books.filter((book) => book.author_id === parent.id)

    //     if(args.filter) {
    //         filtered = filtered.filter((book) => book.title.toLowerCase().startsWith(args.filter))
    //     }
        
    //     return filtered
    // }
    // }
};

const server = new ApolloServer({ 
    typeDefs, 
    resolvers, 
    plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground({
      // options
    })
  ]
});

server.listen().then(({ url }) => {
    console.log(`Apollo server is up at ${url}`);
});