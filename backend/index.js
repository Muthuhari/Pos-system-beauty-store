import express from "express";
import mongoose from "mongoose";
import Student from "./models/student.js";
import studentsRouter from "./routes/studentsRouter.js";
import usersRouter from "./routes/usersRouter.js";
import jwt from "jsonwebtoken";
const app =express()
app.use(express.json());

app.use(
    (req,res,next)=>{

        let token = req.header("Authorization")

        if(token != null){
            token = token.replace("Bearer ","")
             //console.log("Received token:", token); // Print the token
            jwt.verify(token,"jwt-secret",
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
        next()// aapu token eka hari nm yanna oni thanata pass karanawa
    }
)

const connectionString = "mongodb+srv://admin:1234@cluster0.xrmsned.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(connectionString).then(
  ()=>{
    console.log("Database connected")
  }
).catch(
  ()=>{
    console.log("Database connection failed") 
  }
)
app.use("/students",  studentsRouter);
app.use("/users",  usersRouter );

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
  console.log("Server is started")
})