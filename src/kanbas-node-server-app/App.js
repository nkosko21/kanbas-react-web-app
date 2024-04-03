import express from "express"
import Hello from "./Hello.js"
import Lab5 from "./Lab5.js"
// const express = require('express') // equivalent to import
const app = express() // creates an express instance
Hello(app)
Lab5(app)
app.listen(4000) // listening on localhost:4000