import express from "express";
import routerEmpleados from "./routes/empleados.routes.js";  //Al exportar default le podemos dar el nombre que queramos en el import
import routerIndex from "./routes/index.routes.js"; //Osea podemos ponerle routerEmpleados y seguirá igual

import {PORT} from "./config.js";

const app = express();  

app.use(express.json());    //Le decimos al backend que vamos a interpretar objetos json es para que no nos den undefined

app.use(routerIndex);
app.use('/api', routerEmpleados);

//Middleware, en el caso de no coincidir con alguna ruta
app.use((req, res, nexy) =>{
    res.status(404).json({
        message: "La ruta no existe"
    })
})

app.listen(PORT)
console.log(`Escuchando en el puerto`, PORT)

// import {} cuando exportamos de esta manera: "export const pool = ..."
// import pool cuando exportamos con default 