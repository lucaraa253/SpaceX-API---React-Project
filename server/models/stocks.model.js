const mongoose = require("mongoose")

const StockSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [3, "{PATH} must be at least {VALUE} chars long"]
    },
    img: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [3, "{PATH} must be at least {VALUE} chars long"]
    },
    chests: {
        type: Number,
        required: [true, "{PATH} must be present"],
    },
    phrase: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [3, "{PATH} must be at least {VALUE} chars long"]
    },
    position: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [3, "{PATH} must be at least {VALUE} chars long"]
    },
    peg: {
    },
    eye: {
    },
    hook: {
    },
    
}, {timestamps: true})

const Stock = mongoose.model("author", StockSchema);
module.exports = Stock;