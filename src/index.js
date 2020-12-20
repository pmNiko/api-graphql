// Para utilizar express lo importamos
// cambiamos -> const express = require("express");
import express from "express";
// Importamos el middleware de graphql
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";
// importamos la función connect
import { connect } from "./database";

// Instaciamos express y lo contenemos en app
const app = express();
connect();

// Creamos un mensaje de bienvenida
app.get("/", (req, res) => {
  res.json({
    message: "Hello world!",
  });
});

/* Para ejecutar la herramienta de graph
   esta conlleva dos parametros graphiql: true, schema: schema,
*/
app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: schema,
    // la prop context ó ctx sirve para pasar props entre resolvers
    context: {
      messageId: "Test",
    },
  })
);

// Indicamos a nuestro servidor el port
app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));
// ahora podemos ejecutar node src/index.js
