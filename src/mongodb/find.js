const {
    conn,
    findDocuments,
    ObjectId
} = require('./db');
(async() =>{
    const data =await findDocuments('usertb',{
        _id: ObjectId("5ce8b392ef7aca2a40d39734")
    });
    console.log(data[0].account);
})();