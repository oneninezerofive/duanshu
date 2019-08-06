const {
    conn,
    findDocuments,
    insertDocuments,
    updateDocument,
    removeDocument,
    ObjectId
} = require('./db');

(async()=>{
    const data = await removeDocument('usertb',{
        _id : ObjectId("5ce8aa8bbe46131258a985d7")
    });
    console.log(data);
})();