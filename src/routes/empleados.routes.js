import {Router} from "express";
import {getEmpleados, postEmpleados, putEmpleados, deleteEmpleados, getEmpleadoId} from "../controllers/empleados.controller.js"

const router = Router();    //router es un equivalente a "app" en "app.js"

router.get('/empleados', getEmpleados)

router.get('/empleados/:id', getEmpleadoId)

router.post('/empleados', postEmpleados)

//Se utiliza patch cuando se va a actualizar de a un campo del body, se utiliza para dar más infomracion al cliente, pero perfectamente se puede utilizar put también con el IFNULL()
router.patch('/empleados/:id', putEmpleados)
//La ruta que se utiliza para actualizar todos los campos del objeto es put, sin embargo tambien se puede utilizar para actualizar de a uno con el IFNULL()
//router.put('/empleados/:id', putEmpleados)

router.delete('/empleados/:id', deleteEmpleados)

export default router;