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
    res.render("types", {
        title: "Types",
        types: [
            "Spaghetti",
            "Penne",
            "Fusilli",
            "Farfalle",
            "Linguine",
            "Rigatoni",
            "Fettuccine",
            "Macaroni",
            "Orzo",
            "Lasagne",
            "Ravioli",
            "Tagliatelle",
            "Pappardelle",
            "Capellini",
            "Gnocchi",
            "Ziti",
            "Conchiglie",
            "Cannelloni",
            "Tortellini",
            "Orecchiette",
            "Vermicelli",
            "Bucatini",
            "Strozzapreti",
            "Campanelle",
            "Mafalda"
        ]
    })
})
app.get("/cart", (req, res)=>{
    res.render("cart", {title: "Cart"})
})
app.get("/help", (req, res)=>{
    res.render("help", {title: "Help"})
})
app.get("/images", (req, res)=>{
    res.render("images", {
        title: "Images",
        images: [
            "pasta1.jpg",
            "pasta2.jpg",
            "pasta3.jpg",
            "pasta4.jpg",
            "pasta5.jpg"
          ]
    })
})
app.get("/Contact", (req, res)=>{
    res.render("Contact", {title: "Contact"})
})


const port = process.env.PORT || 8080
app.listen(8080, ()=>{console.log("startujemy to gówno")})