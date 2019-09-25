var mongoose = require('mongoose');
var Schema = mongoose.Schema


var tripSchema = new Schema({
    
    name : {
        type : String,
        default : "That Goa Plan"
    } ,
    location : {
        type : String,
        required : true
    } ,
    startDate : {
        type : Date,
        default : Date.now()
    } ,
    endDate : {
        type : Date,
        default : Date.now()
    } ,
    buddies : [ { type : String } ],
    bills : [{type : Schema.Types.ObjectId, ref: 'Bill'}]

});




module.exports = mongoose.model('Trip' , tripSchema);