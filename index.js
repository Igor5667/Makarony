const express = require("express")
const exHb = require("express-handlebars")
const app = express()

app.engine("handlebars", exHb.engine({defaultLayout: "main"}))
app.set("view engine", "handlebars")

app.get("/", (req, res)=>{
    res.render("home", {title: "Strona glowna"})
})
app.get("/huj", (req, res)=>{
    res.send("to jest huj")
})


const port = process.env.PORT || 8080
app.listen(8080, ()=>{console.log("startujemy to gówno")})