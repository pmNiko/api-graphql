import mongoose from "mongoose";
// con esta linea quitamos el error de
/*  DeprecationWarning: collection.findAndModify is deprecated. 
    Use findOneAndUpdate, findOneAndReplace or 
    findOneAndDelete instead?*/
mongoose.set("useFindAndModify", false);

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
