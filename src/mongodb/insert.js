const {
    conn,
    findDocuments,
    insertDocuments,
    ObjectId
} = require('./db');

(async () => {
    const data1 = await insertDocuments('usertb', [{
        account: 'xiaobai',
        psw: '123456',
        phone: '12348594555'
    }]);
    console.log(data1.result);
})();