const express = require('express');
const router = express.Router();

// Route pour tester si ça marche ou pas
router.get('/', (req, res) => {
    res.status(200).send({
        status: 200,
        success: true,
        result: 'Yeah, It works!'
    });
});

module.exports = router;
