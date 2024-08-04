const { sales } = require(".")

module.exports = (sequelize, DataTypes) => {
    const Sales = sequelize.define("t_sales", {
        id : {
            type : DataTypes.INTEGER,
            allowNull : false,
            primaryKey: true,
            autoIncrement: true
        },
        kode: {
            type: DataTypes.STRING
        },
        tgl : {
            type : DataTypes.DATE
        },
        cust_id : {
            type : DataTypes.INTEGER
        },
        cust_name : {
            type : DataTypes.STRING
        },
        jumlah_barang : {
            type : DataTypes.INTEGER
        },
        subtotal : {
            type : DataTypes.DECIMAL
        },
        diskon : {
            type : DataTypes.DECIMAL
        },
        ongkir : {
            type : DataTypes.DECIMAL
        },
        total_bayar : {
            type : DataTypes.DECIMAL
        }
    },{
        freezeTableName: true,
        timestamps: false
    })

    return Sales
}