const { where } = require('sequelize');
const db = require('../models')

const Customer = db.customer

function generateUniqueCode(codeLength) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < codeLength; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
}

const addCustomer = async (req, res) => {
    let info = {
        kode: generateUniqueCode(4),
        name: req?.body?.name,
        telp: req?.body?.telp
    }

    const customer = await Customer.create(info)
    res.status(200).send(info)
}

const listCustomer = async (req, res) => {
    const customer = await Customer.findAll()
    res.status(200).send(customer)
}

const listCustomerById = async (req, res) => {
    const customer = await Customer.findAll({
        where: {
            id: req.params.id,
        },
    })
    res.status(200).send(customer)
}

const updateCustomer = async (req, res) => {
    let info = {
        name: req?.body?.name,
        telp: req?.body?.telp
    }
    const customer = await Customer.update(
        info,
        {
            where: {
                id: req.params.id
            }
        }
    )
    res.status(200).json({ message: 'Customer berhasil di update' })
}

const deleteCustomer = async (req, res) => {
    const customer = await Customer.destroy({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({ message: 'Customer berhasil dihapus' })
}


module.exports = {
    addCustomer,
    listCustomer,
    deleteCustomer,
    updateCustomer,
    listCustomerById
}