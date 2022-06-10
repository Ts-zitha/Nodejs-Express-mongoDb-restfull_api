const Product = require('../models/product.model');


exports.getProduts = async (req, res)=>{
    try{
        const products = await Product.find();
        res.json(products);
    }catch(error){
        res.status(500).send({msg:error});
    }
}
exports.createProduct = async (req, res)=>{
    const product = new Product(req.body);
    try{
        const saveProduct = await product.save();
        res.status(201).json(saveProduct);
    }catch(error){
        res.status(408).json({msg:error.message});
    }
}