const express = require('express')
const mongoose = require('mongoose');
const product = require('./model/product.model.js')
const productRoutes = require('./routes/product_routes.js')

const app = express()

// middle ware
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use('/api/products',productRoutes)



app.listen(3000,()=>{
    console.log("Server is runinig")
})

app.get("/" , (req,res) =>{
    res.send("Hello for node api server")
});

mongoose.connect("mongodb+srv://hamayunsaeed48:VZo5aQOxFGRJYOKG@backenddb.bl8rhlw.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDb")
.then(() =>{
    console.log("connected to the database")
})
.catch(()=>{
    console.log("connection is failed")
})