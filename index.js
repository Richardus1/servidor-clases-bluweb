const express = require ("express");
const { create } = require('express-handlebars');

//prueba de base de datos alterna
/* const mostrar = require("./controllers/mostrar");
require("dotenv").config();
require("./database/db");
require("./models/persona"); */

const app = express();


const hbs =create({
    extname: ".hbs",
    partialsDir: ["views/components"]
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');



app.use(express.static(__dirname + "/public"));
app.use("/", require("./routes/home"));
app.use("/auth", require("./routes/auth"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log("Servidor levantado en el puerto: " + PORT)
})

