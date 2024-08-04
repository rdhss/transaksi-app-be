const { where } = require('sequelize');
const db = require('../models')

const SalesDetail = db.sales_detail

const addSalesDetail = async (req, res) => {
    let info = {
        sales_id : req?.body?.sales_id,
        barang_id : req?.body?.barang_id,
        harga_bandrol : req?.body?.harga_bandrol,
        qty : req?.body?.qty,
        diskon_pct : req?.body?.diskon_pct,
        diskon_nilai : req?.body?.diskon_nilai,
        harga_diskon : req?.body?.harga_diskon,
        total : req?.body?.total
    }

    const salesdetail = await SalesDetail.create(info)
    res.status(200).send(info)
}

const listSalesDetail = async (req, res) => {
    const salesdetail = await SalesDetail.findAll()
    res.status(200).send(salesdetail)
}

const listSalesDetailbyId = async (req, res) => {
    const salesdetail = await SalesDetail.findAll({
        where: {
          sales_id: req.params.id,
        },
      })
    res.status(200).send(salesdetail)
}

const updateSalesDetail = async (req, res) => {
    let info = {
        id : req?.body?.id,
        harga_bandrol : req?.body?.harga_bandrol,
        qty : req?.body?.qty,
        diskon_pct : req?.body?.diskon_pct,
        diskon_nilai : req?.body?.diskon_nilai,
        harga_diskon : req?.body?.harga_diskon,
        total : req?.body?.total
    }
    const salesdetail = await SalesDetail.update(
        info,
        {
            where : {
                sales_id : req.params.id,
                id : req?.body?.id
            }
        }
    )
    res.status(200).json({message : 'Sales berhasil di update'})
}

const deleteSalesDetail = async (req, res) => {
    const salesdetail = await SalesDetail.destroy({
        where: {
            sales_id : req.params.salesId,
            id : req.params.id
        }
    })
    res.status(200).json({message : 'Sales berhasil dihapus'})
}


module.exports = {
    addSalesDetail,
    listSalesDetail,
    deleteSalesDetail,
    updateSalesDetail,
    listSalesDetailbyId
}