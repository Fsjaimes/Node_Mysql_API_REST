import {config} from "dotenv"
//config() sirve para leer variables de entorno
config()

export const PORT = process.env.PORT || 3000 //Puerto del servidor

export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'bucaramanga'
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_DATABASE = process.env.DB_DATABASE || 'companydb'
export const DB_PORT = process.env.DB_PORT || 3306  //puerto de la base de datos

//process.env.PORT forma de utilizar variables de entorno