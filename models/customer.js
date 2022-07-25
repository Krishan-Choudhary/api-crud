let mongoose = require('mongoose');


const Customer = mongoose.model('Customer', {
    name: {
        type: String,
        required:true
    }, 
    email: {
        type:String,
        required:true
    },
    Age: {
        type:String,
        required:true
    }
});



module.exports = {Customer}