const dbConfig = require('../config/dbConfig')

const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host : dbConfig.HOST,
        dialect : dbConfig.dialect,
        OperatorAliases : false,

        pool : {
            max : dbConfig.pool.max,
            min : dbConfig.pool.min,
            acquire : dbConfig.pool.acquire,
            ideal : dbConfig.pool.ideal,
        }
    }
)


sequelize.authenticate()
.then(() => {
    console.log('connected....');
})
.catch(err => {
    console.log('Error' + err);
})

const db = {}


db.Sequelize = Sequelize
db.sequelize = sequelize

db.sales_detail = require('./sales_detail')(sequelize, DataTypes)
db.sales = require('./sales')(sequelize, DataTypes)
db.customer = require('./customer')(sequelize, DataTypes)
db.barang = require('./barang')(sequelize, DataTypes)

db.sequelize.sync({force : false})
.then(() => {
    console.log('yes re-sync done');
})


module.exports = db

