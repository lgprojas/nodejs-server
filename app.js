const express = require("express");

const app = express();

app.get('/', (req, res) =>{
    res.send("Hola Luis!!")
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Servidor iniciado en el puerto " + port);
})