const express     =   require('express');
const router      =   express.Router();


const customerCtrl = require('../controller/customer');


router.route('/customer')
    .get( customerCtrl.getAllCustomer )
    .post( customerCtrl.addCustomer )

router.route('/customer/:customerId')
    .get( customerCtrl.getCustomer )
    .post( customerCtrl.updateCustomer )

router.route('/customer/:customerId/delete')
    .get( customerCtrl.deleteCustomer )


/*
To learn more about method chaining, refer:
https://medium.com/backticks-tildes/understanding-method-chaining-in-javascript-647a9004bd4f
*/

module.exports = router