var url="mongodb://127.0.0.1:27017"
var mongoClient=require("mongodb").MongoClient
function ConnectDB(callback){
    mongoClient.connect(url,(err,db)=>{
        var dbName=db.db("adminuser")
        if(err){
            callback(err,null) 
        }
        callback(err,db,dbName)
    })
}
exports.add=function(collectionName,json,callback){
    ConnectDB(function(err,mongo,dbName){
        dbName.collection(collectionName).insert(json,function(err,result){
            if(err){
                callback(err,null)
            }
            callback(err,result)
            mongo.close()
        })
    })
}
exports.find=function(collectionName,json,callback){
    ConnectDB(function(err,mongo,dbName){
        dbName.collection(collectionName).find(json).toArray(function(err,result){
            if(err){
                callback(err,null)
            }
            callback(err,result)
            mongo.close()
        })  
    })
}