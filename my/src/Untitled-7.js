const express=require("express")
const app=express()
const port=3000

app.get("/",(req,res)=>{
    res.sendFile("_dirname"+"/home.html")
})

app.get("/home",(req,res)=>{
    res.sendFile
})