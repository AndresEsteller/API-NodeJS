import mysql from 'mysql2/promise';
import config from "../config";

const dbConfig = {
    user: config.dbUser,
    password: config.dbPassword,
    server: config.dbServer,
    database: config.dbDataBase
}

export async function connectionDB() {
    try{
        const connection = await mysql.createConnection(dbConfig);
        return connection;
    }catch(error){
        console.log(error);
    }
};
