const { ApolloServer, gql } = require('apollo-server');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

const { languages, continents, countries } = require('./data');

const typeDefs = gql`
    type Country {
        id: ID!
        name: String!
        code: String!
    }

    type Language {
        id: ID!
        name: String!
        code: String!
    }

    type Continent {
        id: ID!
        name: String!
        code: String!
    }

    type Query {
        countries: [Country!]
        country(code: String!): Country!

        languages: [Language!]
        language(code: String!): Language!

        continents: [Continent!]
        continent(code: String!): Continent!
    }
`;

const resolvers = {
    Query: {
        countries: () => countries,
        country: (parent, args) => countries.find(country => country.code === args.code),

        languages: () => languages,
        language: (parent, args) => languages.find(language => language.code === args.code),

        continents: () => continents,
        continent: (parent, args) => continents.find(continent => continent.code === args.code),
    },
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