const express = require("express");
const app= express();
const PORT = 8080;

const userData = [
    {username:"james", age: 20 , email:"james@gmail.com"},
    {username:"kevin", age: 20 , email:"kevin@gmail.com"},
    {username:"aiwin", age: 20 , email:"aiwin@gmail.com"},
    {username:"savio", age: 20 , email:"savio@gmail.com"},
]

app.get("/",(req,res)=>{
    res.send("This is the backend")
})

app.get("/user",(req,res)=>{
    const {email} = req.query;
    if(!email){
        return res.status(400).json({message:"email is required"})
    }
    if(!(email.includes(".")&& email.includes("@"))){
        return res.status(400).json({message: "incorrect email format"})
    }
    const user =userData.find(user => user.email === email)
    if(!user){
        return res.status(404).json({message: "user not found"})
    }
    return res.status(200).json({message: "user found", user})
})



app.listen(PORT,()=>{
    console.log("The server is running on http://localhost:8080")
})