const mongoose = require('mongoose')

const product_schema = mongoose.Schema({

    name: {
        type: String,
        require: [true, "please enter product name"]
    },

    quantity: {
        type: Number,
        require: true,
        default: 0
    },

    price: {
        type: Number,
        require: true,
        default: 0
    },

    image: {
        type: String,
        require: false
    }
},
    {
        Timestamp: true
    }
);

const Product = mongoose.model("Product",product_schema)
module.exports = Product;