import { Schema, model } from "mongoose";

// Definición del schema del user
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: String,
  age: Number,
});

// Definimos y exportamos el modelo basado en el schema
export default model("User", userSchema);

// A través de este modelo haremos el ABM
