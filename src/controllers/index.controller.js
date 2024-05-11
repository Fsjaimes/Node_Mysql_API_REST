import {pool} from "../db.js"

export const ping = async (req, res) =>{
    const [result] = await pool.query('SELECT 1 + 1 AS resultado');   //Esto retorna un objeto bastante grande, por eso utilizamos un arreglo [] donde lo qye está dentro es es AS "result" y nos retorna solo el "result" del objeto y no todo el objeto en si
    res.json(result)
}   