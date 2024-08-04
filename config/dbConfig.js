module.exports = {
    HOST : process.env.HOST,
    USER : process.env.USER,
    PASSWORD : process.env.PASSWORD,
    DB : process.env.DATABASE,
    dialect : 'mysql',


    pool : {
        max : 10,
        min : 0,
        acquire : 300000,
        ideal: 100000
    }
}