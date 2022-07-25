const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;    

const { Customer } = require('../models/customer');


router.get('/api/customer', (req, res) => {
    Customer.find({}, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});



router.get('/api/customer/:id', (req, res) => {
    Customer.findById(req.params.id, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
           console.log(err);
        }
    });
});




router.post('/api/customer/add', (req, res) => {
    const cst = new Customer({
        name: req.body.name,
        email: req.body.email,
        Age: req.body.Age
    });
    cst.save((err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'Customer Added Successfully', addCustomer: data})
        } else {
           console.log(err);
        }
    });
});



// Update Employee

router.put('/api/customer/update/:id', (req, res) => {


    const cst = {
        name: req.body.name,
        email: req.body.email,
        Age: req.body.Age
    };
    Customer.findByIdAndUpdate(req.params.id, { $set: cst }, { new: true }, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'Customer Updated Successfully', updateCustomer: data})
        } else {
            console.log(err);
        }
    });
});



router.delete('/api/customer/:id', (req, res) => {

    Customer.findByIdAndRemove(req.params.id, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'Customer deleted', deletecustomer: data})
        } else {
            console.log(err);
        }
    });
});


module.exports = router;
