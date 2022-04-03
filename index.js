const express = require('express')
const productosRouter = require('./productos')
const router = express.Router();

router.get('/hola', (req, res) => {
    res.json({
        msg: "ROUTER PRINCIPAL"
    })
})

router.use('/productos', productosRouter);

module.exports = router;

