const { param, body } = require('express-validator');
const { validator } = require('./validator');


const getUrlByName  = [
    param('nama').isLength({min: 8}),
    validator
]

const insertUrl =  [
    body('nama').isLength({min: 8}),
    body('jenis_kelamin').isIn(['L','P']),
    body('angkatan').notEmpty().isInt({ min:2018}),
    body('email').isEmail(),
    body('no_telp').isLength({min: 12}),
    body('deskripsi').notEmpty(),
    validator
]

const deleteUrl = [
    body('email').isEmail(),
    validator
]

const updateUrl = [
    body('email').isEmail().notEmpty().withMessage('email is required'),
    body('nama').isLength({min: 8}),
    body('jenis_kelamin').isIn(['L','P']),
    validator
]

const createMore = [
    body('*.nama').isLength({ min: 8 }),
    body('*.jenis_kelamin').isIn(['P', 'L']),
    body('*.angkatan').isInt({ min: 2018 }),
    body('*.email').isEmail(),
    body('*.telepon').isLength(12),
    body('*.deskripsi').notEmpty(),
    validator
]

module.exports = {
    getUrlByName,
    insertUrl,
    deleteUrl,
    updateUrl,
    createMore
}
