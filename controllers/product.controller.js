const product = require("../model/product.model");

const getProducts = async (req,res)=>{   // USE GET METHOD TU READ DATA 
    try {
        const Product = await product.find({})
        res.status(200).json(Product)
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
};


const getProduct = async (req,res)=>{// read data by id
    try {
        const {id} = req.params
        const Product = await product.findById(id)
        res.status(200).json(Product)
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
};

const createProduct = async (req,res)=>{    // use to create api 
 
    try {
       const Product = await product.create(req.body)
       res.status(200).json(Product)
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
};

const updateProduct = async (req,res)=>{  // update api by id
    try {
        const {id} = req.params
        const Product = await product.findByIdAndUpdate(id,req.body,{
            new:true
        })

        if(!Product){
            return res.status(404).json({message:"Product not found"})
        }

        return res.status(200).json(Product)


        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
};

const deleteProduct = async (req,res)=>{
    try {
        const {id} = req.params
        const Product = await product.findByIdAndDelete(id)

        if(!Product){
            return res.status(404).json({message:"your product no exist"})
        }

        res.status(200).json({message:"your product is deleted successfully"})
    
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
};

module.exports={
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}
