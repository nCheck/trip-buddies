var mongoose = require('mongoose');
var Schema = mongoose.Schema


var tripSchema = new Schema({
    
    reason : {
        type : String,
        default : "Petrol"
    } ,
    cost : {
        type : Number,
        required : true
    } ,
    buddies : [ { type : String } ]
});




module.exports = mongoose.model('Trip' , tripSchema);