const Stocks = require("../models/stocks.model")

module.exports = {
    
    // Read All
    findAll: (req, res) => {
        Stocks.find()
            .then( all => res.json(all) )
            .catch( err => res.json({message: "Error!", error: err}))
    },

    // Read One
    findOne: (req, res) => {
        Stocks.findById(req.params.id)
            .then(stock => res.json(stock))
            .catch(err => res.json({message: "Error!", error: err}))
    },

    // Create One
    create: (req, res) => {
        Stocks.create(req.body)
            .then(newstock => res.json(newstock))
            .catch(err => res.status(400).json({message: "Error!", error: err}))
    },

    // Update
    update: (req, res) => {
        Stocks.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
            .then(updatedstock => res.json(updatedstock))
            .catch(err => res.status(400).json({message: "Error!", error: err}))
    },

    // Delete
    delete: (req, res) => {
        Stocks.findByIdAndDelete(req.params.id)
            .then( result => res.json({result: result}))
            .catch( err => res.json({message: "Error!", error: err}))
    }
}