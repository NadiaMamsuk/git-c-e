//Requiero paquetes y genero las variables(espress,path):
const express = require ('express');
const path = require ('path');
const app = express ();
const publicPath = path.resolve ('./public');
console.log (publicPath);

//Requiero el/los archivo/s de rutas que se usarán para dirigir las paticiones:
const mainRoutes = require("./src/routes/main.js");
app.use(express.static (publicPath));

// Establezco Engine de Vistas
app.set('view engine', 'ejs');
app.set('views' , './src/views/')

//Indico para cada petición, el archivo de rutas que lo manejará:
app.use("/", mainRoutes);
app.use("/login", mainRoutes);
app.use("/register", mainRoutes);
app.use("/productCart", mainRoutes);
app.use("/productDetail", mainRoutes);
app.use("/newProduct", mainRoutes);


//levanto server express en puerto 8000
app.listen (8000, () => {
    console.log ('Servidor corriendo en puerto 8000');
})