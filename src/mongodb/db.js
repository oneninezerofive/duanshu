//引入mongodb的块
const {
    MongoClient,
    ObjectId
} = require('mongodb');
// 连接路径
const url = 'mongodb://localhost:27017';

// 数据库名
const dbName = 'users';

// 数据库连接
let conn = (col) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, {
            useNewUrlParser: true
        }, function (err, client) {
            const db = client.db(dbName);
            const collection = db.collection(col);
            if (err) {
                reject(err)
            } else {
                resolve({
                    collection,
                    client
                });
            }

        });
    })
}

//查找
const findDocuments = (col, params) => {
    return new Promise(async (resolve, reject) => {
        const {
            collection,
            client
        } = await conn(col);
        //查找功能
        collection.find({
            ...params
        }).toArray(function (err, docs) {
            if (err) {
                reject(err)
            } else {
                resolve(docs)
            }
        });
        // 关闭
        client.close();
    })
}

//插入

const insertDocuments = (col, params) => {
    return new Promise(async (resolve, reject) => {
        let {
            collection,
            client
        } = await conn(col);
        //插入功能
        collection.insertMany([...params], function (err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
        client.close();
    });

}

//修改
const updateDocument = (col, params1, params2) => {
    return new Promise(async (resolve, reject) => {
        const {
            collection,
            client
        } = await conn(col);
        //更新功能
        collection.updateOne({
            ...params1
        }, {
            $set: {
                ...params2
            }
        }, function (err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
        client.close();
    });
}

//删除
const removeDocument = (col, params) => {
    return new Promise(async(resolve, reject) => {
        const {
           collection,
           client
        } = await conn(col);
        //删除功能
        collection.deleteOne({
            ...params
        }, function (err, result) {
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        });
        client.close();
    });
}

//导出
module.exports = {
    conn,//连接
    findDocuments,//查找
    insertDocuments,//插入
    updateDocument,//更新
    removeDocument,//删除
    ObjectId//Id
}