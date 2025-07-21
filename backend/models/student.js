

import mongoose from "mongoose";

//student kenekge data save wena structure eka 
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  city: String 
})

//student collection ekai BE ekai connect karanne me modal eka
// ("Student", studentSchema) 1. collection eke name , 2.Schema name eka
const Student = mongoose.model("Student", studentSchema)

export default Student