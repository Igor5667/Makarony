const express = require("express")
const exHb = require("express-handlebars")
const app = express()

app.engine("handlebars", exHb.engine({defaultLayout: "main"}))
app.set("view engine", "handlebars")
app.use(express.static('public'))

app.get("/", (req, res)=>{
    res.render("home", {title: "Strona glowna"})
})
app.get("/types", (req, res)=>{
    res.render("types", {title: "Types"})
})
app.get("/cart", (req, res)=>{
    res.render("cart", {title: "Cart"})
})
app.get("/help", (req, res)=>{
    res.render("help", {title: "Help"})
})
app.get("/about", (req, res)=>{
    res.render("about", {title: "About"})
})
app.get("/Contact", (req, res)=>{
    res.render("Contact", {title: "Contact"})
})


const port = process.env.PORT || 8080
app.listen(8080, ()=>{console.log("startujemy to gówno")})