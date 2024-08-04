module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define("m_customer", {
        id : {
            type : DataTypes.INTEGER,
            allowNull : false,
            primaryKey: true,
            autoIncrement: true
        },
        kode: {
            type: DataTypes.STRING
        },
        name : {
            type : DataTypes.STRING
        },
        telp : {
            type : DataTypes.STRING
        }
    },{
        freezeTableName: true,
        timestamps: false
    })


    return Customer
}