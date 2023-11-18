const { MongoClient } = require('mongodb');
const Promise = require("bluebird")

module.exports = (()=>{
    'use strict';

    class MongoDb{
        constructor(){
            const fileConfig = require('./configdb');
            this.config = fileConfig;
            this.urlMongo = 'mongodb://localhost:27017';
            
        }
        async connect(){
            try {
                let client = new MongoClient(this.urlMongo,(err, db) => {
                    if(err)
                    {
                    console.log(err)
                    return err;
                    }
                    console.log('database Connected')
                    return db;
                  });
                let conexion = await client.connect();
                let db = conexion.db(this.config.db.namedb);
                return db;
            } catch (error) {
                console.log(error);
                return error;
            }
        }
        async destroy(db){
            try {
                await db.s.client.close();
                return true;
            } catch (error) {
                if(error.message.includes("undefined") || error.message.includes("reading 'close'")){
                    await db.client.close();
                    return true;
                }
                else {
                    console.log(error)
                }
                return error;
            }

        }

        async createClient(){
            return await this.connect();
        }
        async releaseClient(db){
            return await this.destroy(db);
        }

        async releasePool(db){
            try {
                await this.releaseClient(db)
                return db;
            } catch (error) {
                return error;
            }
        }

        async getPool(){
            try {
                let db = await this.createClient();
                return db;
            } catch (error) {
                return error;
            }
        }

    }
    return new MongoDb();

})();