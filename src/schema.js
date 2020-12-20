/*
    En una arquitectura rest este archivo sería 
    la configuración de rutas
*/

// importamos este modulo para crear un esquema nuevo
// que une nuestros resolvers con nuestros typeDefs
import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

const typeDefs = `
  type Query {
    hello: String
    greet(name: String!): String
    tasks: [Task]
    Users: [User]
  }

  type Task {
    _id: ID
    title: String!
    description: String!
    number: Int
  }

  type User{
    _id: ID
    name: String!
    lastname: String!
    age: Int!
  }

  type Mutation {
    createTask(input: TaskInput): Task
    createUser(input: UserInput): User
  }

  input TaskInput {
    title: String!
    description: String!
    number: Int
  }

  input UserInput {
    name: String!
    lastname: String!
    age: Int!
  }
`;

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
