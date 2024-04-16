import express from "express"
import mongoose from "mongoose";
import Hello from "./Hello.js"
import Lab5 from "./Lab5.js"
import cors from "cors";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import UserRoutes from './Users/routes.js';

mongoose.connect("mongodb://127.0.0.1:27017/kanbas"); // connects to the kanbas database

// const express = require('express') // equivalent to import
const app = express() // creates an express instance
app.use(cors());
app.use(express.json());
UserRoutes(app);
Hello(app)
CourseRoutes(app);
ModuleRoutes(app);

Lab5(app)

app.listen(process.env.PORT || 4000); // listening on localhost:4000