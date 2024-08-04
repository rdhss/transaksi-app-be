module.exports = {
    HOST : "sql12.freesqldatabase.com",
    USER : "sql12723941",
    PASSWORD : "B25IgbXzcr",
    DB : "sql12723941",
    dialect : 'mysql',


    pool : {
        max : 10,
        min : 0,
        acquire : 300000,
        ideal: 100000
    }
}