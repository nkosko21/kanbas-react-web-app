import mongoose from "mongoose";
import schema from "./schema.js";

const model = mongoose.model("UserModel", schema); // create mongoose model from the schema

export default model;