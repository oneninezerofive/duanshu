const {
    conn,
    findDocuments,
    insertDocuments,
    updateDocument,
    ObjectId
} = require('./db');

(async() => {
   const data = await updateDocument('usertb',{ _id : ObjectId("5ce8ab1fccc4902618842f7a")},{
       account : 'jinyu'
   });
   console.log(data);
})();
