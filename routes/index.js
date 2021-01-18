const express = require('express');
const { check, validationResult } = require('express-validator');

const router = express.Router();

router.get('/', 
    [
        check('name')
            .isLength({ min: 1 })
            .withMessage('Please enter a name'),
        check('email')
            .isLength({ min: 1 })
            .withMessage('Please enter an email'),
    ], 
    (req, res) => {
        res.render('form', { title: 'KH 1.5 Synthesis Calculator' });
    }
);

router.post('/', (req, res) => {
    console.log(req.body);
    res.render('form', { title: 'KH 1.5 Synthesis Calculator' });
});

module.exports = router;