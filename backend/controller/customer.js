const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');


// ****** CREATE ******

/*

adds customer to database
format of req.body should meet the schema
eg.     { customerId : 2413 , name : "Nehal" , age : 42, phoneNo : 5241, rating : 5 }

*/
module.exports.addCustomer = (req , res) =>{

    query = req.body;

    console.log("[QUERY RECIEVED IS]" , query);

    if ( !query ){
        res.send({ status : "error" , data : [] });
    }

    Customer.create( query , (err , doc)=>{
     
        if (err){
            res.send({ status : "error" , data : err });
        }
        else{
            res.send( { status : "success" , data : doc } );
        }
        
    })

}


// ****** READ ******

/*

read one customer data( by Customer Id )

*/

module.exports.getCustomer = ( req , res ) =>{

    let customerId = req.params.customerId;

    Customer.findOne( { customerId : customerId } , (err , doc) =>{

        if (err){
            res.send({ status : "error" , data : err });
        }
        else{
            res.send( { status : "success" , data : doc } );
        }

    } )

}

/*

Sends array of all customers

*/

module.exports.getAllCustomer = ( req , res ) =>{

    Customer.find({} , (err , doc)=>{

        if (err){
            res.send({ status : "error" , data : err });
        }
        else{
            res.send( { status : "success" , data : doc } );
        }

    });

}

// ****** UPDATE ******

module.exports.updateCustomer = ( req , res ) =>{

    let customerId = req.params.customerId;
    let query = req.body;

    Customer.updateOne( {customerId : customerId} , query , (err , doc) =>{

        if (err){
            res.send({ status : "error" , data : err });
        }
        else{
            res.send( { status : "success" , data : doc } );
        }

    });


}


// ****** DELETE ******

/*
deletes all customers
*/

module.exports.deleteAllCustomer = ( req , res ) =>{

    Customer.deleteMany({} , (err , doc)=>{

        if (err){
            res.send({ status : "error" , data : err });
        }
        else{
            res.send( { status : "success" , data : doc } );
        }

    });

}


/*

Delete customer by customerId

*/

module.exports.deleteCustomer = ( req , res )=>{

    let customerId = req.params.customerId;

    Customer.deleteOne({ customerId : customerId }, (err , doc)=>{

        if (err){
            res.send({ status : "error" , data : err });
        }
        else{
            res.send( { status : "success" , data : doc } );
        }

    });

}


