const bcrypt = require('bcrypt');
const { User, validateUser } = require('../models/users');
const express = require('express');
const router = express.Router();

// Liste des utilisateurs
router.get('/', async (req, res) => {
    let users = await User.find();

    res.status(200).send({
        status: 200,
        success: true,
        result: users
    });
});

// Ajout d'utilisateur
router.post('/', async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) {
        return res.status(400).send({
            status: 400,
            success: false,
            result: error.details[0].message
        });
    }

    let username = req.body.username;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let MaoDiaPasy= req.body.password;
    let salt = await bcrypt.genSalt(10);
    let password = await bcrypt.hash(MaoDiaPasy, salt);

    let duplicates = await User.findOne({
        username: username
    });

    if (duplicates) {
        return res.status(400).send({
            status: 400,
            success: false,
            result: 'Ce nom d\'utilisateur est déjà utilisé.'
        });
    } else {
        let user = new User({
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName
        });
        await user.save();

        res.status(200).send({
            status: 200,
            success: true,
            result: user
        });
    }
});

module.exports = router;
