module.exports = (sequelize, DataTypes) => {
    const Barang = sequelize.define('m_barang', {
        id : {
            type : DataTypes.INTEGER,
            allowNull : false,
            primaryKey: true,
            autoIncrement: true,
        },
        kode: {
            type: DataTypes.STRING
        },
        nama : {
            type : DataTypes.STRING
        },
        harga : {
            type : DataTypes.DECIMAL
        }
    },{
        freezeTableName: true,
        timestamps: false
    })


    return Barang
}