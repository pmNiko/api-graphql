import mongoose from "mongoose";

// como es una funcción asincrona vamos a utilizar async await
export async function connect() {
  try {
    // Indicamos la conección a la BD con el nombre de identificación
    await mongoose.connect("mongodb://localhost/mongodbgraphql", {
      // config para evitar un error por consola
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(">>> DB is connected");
  } catch (e) {
    console.log("Something goes wrong!");
    console.log(e);
  }
}
