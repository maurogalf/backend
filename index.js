const fs = require("fs");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    fs.readFile("./archivo.json", "utf-8", (err, data) => {
        if (err) {
            res.send("Error al leer el archivo");
            } else {
                res.send(data);
                }
            });
        });
            
app.get("/productoRandom", (req, res) => {
    fs.readFile("./archivo.json", "utf-8", (err, data) => {
        if (err) {
            res.send("Error al leer el archivo");
            } else {
                let array = JSON.parse(data);
                let random = array[Math.floor(Math.random() * array.length)];
                console.log(random);
                res.send(random);
                }
            });
        });


app.listen(8080, () => {
    console.log("Servidor iniciado");
})
