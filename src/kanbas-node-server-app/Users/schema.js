import mongoose from "mongoose";

const userSchema = new mongoose.Schema({ // create the schema
    username: { type: String, required: true, unique: true }, // string field that is required and unique
    password: { type: String, required: true },
    firstName: String, // string field with no additional configurations
    email: String,
    lastName: String,
    dob: Date, // date fields with no additional configurations
    role: {
      type: String, // string field
      enum: ["STUDENT", "FACULTY", "ADMIN", "USER"], // allowed values
      default: "USER",}, // default value
  },
  { collection: "users" }); // store data in 'users' collection
export default userSchema;
