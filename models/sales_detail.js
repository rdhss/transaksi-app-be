const { sales_detail } = require(".")

module.exports = (sequelize, DataTypes) => {
    const Sales_detail = sequelize.define("t_sales_det", {
        sales_id : {
            type : DataTypes.INTEGER,
        },
        barang_id : {
            type : DataTypes.STRING,
        },
        harga_bandrol: {
            type: DataTypes.DECIMAL
        },
        qty : {
            type : DataTypes.INTEGER
        },
        diskon_pct : {
            type : DataTypes.DECIMAL
        },
        diskon_nilai : {
            type : DataTypes.DECIMAL
        },
        harga_diskon : {
            type : DataTypes.DECIMAL
        },
        total : {
            type : DataTypes.DECIMAL
        }
    },{
        freezeTableName: true,
        timestamps: false
    })

    return Sales_detail
}