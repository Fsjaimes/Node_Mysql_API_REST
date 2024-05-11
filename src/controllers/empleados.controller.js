import {pool} from "../db.js"

//Traer Empleados
export const getEmpleados = async (req, res) =>{
    try{
        //throw new Error('Error Inesperado') //De esta forma se cre un error
        const [empleados] = await pool.query("SELECT * FROM empleado");
        res.json(empleados)
    }
    catch (error){
        return res.status(500).json({
            message: "Algo salió mal :( ..."
        })
    }
}

// export function PostEmpleados2(req, res) {   //También podemos pasar funciones
//     res.send('Creando Empleados...')
// }

//Traer Empleado por id
export const getEmpleadoId = async (req, res) =>{
    try{
        // console.log(req.params.id)   req.params sirve para traer lo que el cliente puso en la url
    const [rows] = await pool.query('SELECT * FROM empleado WHERE id = ?', [req.params.id]) //Dentro de [] se pone el valor que va ir en el "?"
    
    if(rows.length <= 0){
        return res.status(404).json({
            message: "El empleado no encontrado"
        })}
    
    res.status(200).json(rows[0]);
    }catch (error){
        return res.status(500).json({
            message: "Algo salió mal :( ..."
        })
    }
}

//Crear un empleado
export const postEmpleados = async (req, res) => {
    try{
        //console.log(req.body)    //Vemos lo enviado en el body por el cliente   
    const {name, salary} = req.body     //lo enviado por el cliente en el req.body lo pasamos a una constante, cuidemos que debe ser igual a los campos que están en la base de datos
    const [filas] = await pool.query("INSERT INTO empleado (name, salary) VALUES (?, ?)", [name, salary])
    res.send({
        id: filas.insertId, 
        name,
        salary,
    })
    }catch (error){
        return res.status(500).json({
            message: "Algo salió mal :( ..."
        })
    }
}

//Actualizar empleado
export const putEmpleados = async (req, res) => {
    try{
        const {id} = req.params //Extraemos el id de req.params enviado por el cliente, esto es equivalente a "const id = req.params.id"
    const {name, salary} = req.body  //Extraemos el name, salary de req.params enviado por el cliente 
    
    //IFNULL sirve para que en el caso de no enviar el valor en el body deje el que estaba, recordemos que si no lo ponemos y no enviamos el valor en el body actualiza dejando un null
    const [result] = await pool.query('UPDATE empleado SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?' , [name, salary, id]);

    if(result.affectedRows === 0){
        return res.status(404).json({
            message: "Empleado no encontrado..."
        })
    }

    const [rows] = await pool.query('SELECT * FROM empleado WHERE id = ?', [id])
    res.json(rows[0])
    }catch (error){
        return res.status(500).json({
            message: "Algo salió mal :( ..."
        })
    }
}

//Eliminar empleado
export const deleteEmpleados = async (req, res) => {
    try{
        const [result] = await pool.query('DELETE FROM empleado WHERE id = ?', [req.params.id]);
    
    if(result.affectedRows <= 0){
        res.status(404).json({
            message: "Empleado NO ha sido eliminado..."
        })
    }
    res.status(200).send('El empleado ha sido eliminado...')
    }catch (error){
        return res.status(500).json({
            message: "Algo salió mal :( ..."
        })
    }
}