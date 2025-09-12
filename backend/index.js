import express from "express";
import mongoose from "mongoose";
import Student from "./models/student.js";
import studentsRouter from "./routes/studentsRouter.js";
import usersRouter from "./routes/usersRouter.js";
import jwt from "jsonwebtoken";
import productRouter from "./routes/productRouter.js";
import cors from "cors";
import dotenv from "dotenv";
import orderRouter from "./routes/orderRoute.js";

dotenv.config();

const app = express()
app.use(cors())

app.use(express.json())

app.use(
    (req,res,next)=>{

        let token = req.header("Authorization")

        if(token != null){
            token = token.replace("Bearer ","")
            jwt.verify(token, process.env.JWT_SECRET,
                (err, decoded)=>{
                    if(decoded == null){
                        res.json({
                            message: "Invalid token please login again"
                        })
                        return
                    }else{
                        req.user = decoded
                    }
                }
            )

        }
        next()
    }
)

const connectionString = process.env.MONGO_URI


mongoose.connect(connectionString).then(
    ()=>{
        console.log("Database connected Successfully")
    }
).catch(
    ()=>{
        console.log("Database connection failed")
    }
)

app.use("/api/students",  studentsRouter);
app.use("/api/users",  usersRouter );
app.use("/api/products",  productRouter);
app.use("/api/orders", orderRouter)

//app.get("/",
//  (req, res)=>{
//    //read and get all students
//    Student.find().then(
//      (students)=>{
//        res.json(students)
//      }
//    ).catch(
//      ()=>{
//        res.json(
//          {
//            message: "Failed to get students"
//          }
//        )
//      }
//    )
//  }
//)


//app.post("/",
//  (req, res)=>{
//    //Student kiyanne modal eke nama
//    const student = new Student(
//      {
//        name : req.body.name,
//        age : req.body.age,
//        city : req.body.city,
//      }
      
//    )
//    student.save().then(
//      ()=>(
//        res.json(
//          {
//            message: "Student created successfully"
//          }
//        )
//      )
//    ).catch(
//      ()=>{
//        res.json(
//          {
//            message: "Failed to created successfully"
//          }
//        )
//      }
//    )
//  }
//)

//function success(){
//  console.log("Server is started")
//}

app.listen(5000, () =>{
  console.log("Server is running on 5000 port")
})