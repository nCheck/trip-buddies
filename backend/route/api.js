const express     =   require('express');
const router      =   express.Router();


const userCtrl = require('../controller/user');


router.route('/user')
    .get( userCtrl.getAllUser )
    .post( userCtrl.addUser )

router.route('/customer/:customerId')
    .get( userCtrl.getUser )
    .post( userCtrl.updateUser )

router.route('/customer/:customerId/delete')
    .get( userCtrl.deleteUser )


/*
To learn more about method chaining, refer:
https://medium.com/backticks-tildes/understanding-method-chaining-in-javascript-647a9004bd4f
*/

module.exports = router