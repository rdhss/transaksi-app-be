const { where } = require('sequelize');
const db = require('../models')

const Barang = db.barang

function generateUniqueCode(codeLength) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < codeLength; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
}

const addBarang = async (req, res) => {
    console.log(req.body);
    let info = {
        kode : generateUniqueCode(4),
        nama : req?.body?.nama,
        harga : req?.body?.harga
    }

    const barang = await Barang.create(info)
    res.status(200).send(info)
}

const listBarang = async (req, res) => {
    const barang = await Barang.findAll()
    res.status(200).send(barang)
}

const updateBarang = async (req, res) => {
    let info = {
        nama : req?.body?.nama,
        harga : req?.body?.harga
    }
    const barang = await Barang.update(
        info,
        {
            where : {
                id : req.params.id
            }
        }
    )
    res.status(200).json({message : 'barang berhasil di update'})
}

const deleteBarang = async (req, res) => {
    const barang = await Barang.destroy({
        where: {
            id : req.params.id
        }
    })
    res.status(200).json({message : 'barang berhasil dihapus'})
}


module.exports = {
    addBarang,
    listBarang,
    deleteBarang,
    updateBarang
}