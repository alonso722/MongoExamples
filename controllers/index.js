const objectId = require('mongodb').ObjectId;

module.exports = (()=>{
    'use strict';

    class Forms{
        constructor(){}
        async insertData(collection){
            let parent = this;

            return new Promise( (resolve,reject)=>{
                try {
                    //let data = await db.collection().aggregate([
                    //    {
                    //        $match:{
                    //            
                    //        }
                    //    }
                    //])
                    resolve(true)
                } catch (error) {
                    reject(error)   
                }
            });


        }
    }
    return new Forms();
})();