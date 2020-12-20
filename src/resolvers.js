/*
    En una arquitectura rest este archivo seria 
    el controlador del servidor 
*/

// Importamos el array de tareas desde sample
import { tasks } from "./sample";

import User from "./models/User";

export const resolvers = {
  // Definimos la resolución de las Query
  Query: {
    hello: () => {
      return "Hello World with GraphQL";
    },
    // destructuro de args su prop name
    greet(root, { name }, ctx) {
      console.log(ctx);
      return `Hello ${name}`;
    },
    tasks() {
      return tasks;
    },
    async Users() {
      return await User.find();
    },
  },

  // Definimos la resolución de las Mutation
  Mutation: {
    createTask(_, { input }) {
      input._id = tasks.length;
      tasks.push(input);
      return input;
    },
    // Esta función es de tipo asincrona ya que se conecta a la BD
    async createUser(_, { input }) {
      let newUser = new User(input);
      // console.log(newUser);
      await newUser.save();
      return newUser;
    },
    // Esta función eliminará un User mediante un ID como param
    async deleteUser(_, { _id }) {
      return await User.findByIdAndDelete(_id);
    },
    // Esta función actualiza un User mediante un ID como param
    async updateUser(_, { _id, input }) {
      return await User.findByIdAndUpdate(_id, input, { new: true });
    },
  },
};
