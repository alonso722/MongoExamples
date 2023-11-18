const fs = require('fs');
const connection = require('./db');
const config = require('./configdb');
// Lee el contenido del archivo JSON de forma síncrona (ten cuidado con la ejecución síncrona en entornos de producción)
const contenidoJson = fs.readFileSync('./example.json', 'utf-8');
let dbConnection;
// Convierte el contenido JSON a un objeto JavaScript
const datos = JSON.parse(contenidoJson);

main();

async function main(){
    try {
        dbConnection = await connection.getPool();
        let data =await dbConnection.collection('Plantillas').aggregate([
            {
                $match:{

                }
            }
        ]).toArray();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
    finally{
        await connection.releasePool(dbConnection);
    }
}   