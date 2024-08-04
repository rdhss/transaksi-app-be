const { where } = require('sequelize');
const db = require('../models')

const Sales = db.sales
const Customer = db.customer
const detailSales =db.sales_detail
function generateTransactionNumber() {
    const firstPart = Math.floor(Math.random() * 900000) + 100000;
    const secondPart = Math.floor(Math.random() * 9000) + 1000;
    const transactionNumber = `${firstPart}-${secondPart}`;
    return transactionNumber;
}

const addSales = async (req, res) => {
    const customer = await Customer.findAll({
        raw: true,
        where : {
            id : req?.body?.cust_id
        }
    })


    if (customer) {
        console.log(customer);
        let info = {
            kode : req?.body?.kode,
            tgl : req?.body?.tgl,
            cust_id : req?.body?.cust_id,
            cust_name : customer[0].name,
            jumlah_barang : req?.body?.jumlah_barang,
            subtotal : req?.body?.subtotal,
            diskon : req?.body?.diskon,
            ongkir : req?.body?.ongkir,
            total_bayar : req?.body?.total_bayar
        }
        const sales = await Sales.create(info)
        res.status(200).send(sales)
        
    } else {
        res.status(500).json({message : 'customer not found'})
    }

}

const listSales = async (req, res) => {
    const sales = await Sales.findAll()
    res.status(200).send(sales)
}

const listSalesbyId = async (req, res) => {
    const sales = await Sales.findAll({
        where: {
          id: req.params.id,
        },
      })
    res.status(200).send(sales)
}

const updateSales = async (req, res) => {

    let info = {
        tgl : req?.body?.tgl,
        cust_id : req?.body?.cust_id,
        subtotal : req?.body?.subtotal,
        jumlah_barang : req?.body?.jumlah_barang,
        diskon : req?.body?.diskon,
        ongkir : req?.body?.ongkir,
        total_bayar : req?.body?.total_bayar
    }

    const sales = await Sales.update(
        info,
        {
            where : {
                id : req.params.id
            }
        }
    )

    const results = await Sales.findAll({
        where: {
          id: req.params.id,
        },
      })

    res.status(200).send(results)
}

const deleteSales = async (req, res) => {
    const sales = await Sales.destroy({
        where: {
            id : req.params.id
        }
    })

    const detail_Sales = await detailSales.destroy({
        where : {
            sales_id : req.params.id
        }
    })
    res.status(200).json({message : 'Sales berhasil dihapus'})
}


module.exports = {
    addSales,
    listSales,
    deleteSales,
    updateSales,
    listSalesbyId
}