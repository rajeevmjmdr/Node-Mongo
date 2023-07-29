const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
const products = data.products;

exports.createProduct = (req,res)=>{
    console.log(req.body);
    products.push(req.body);
    res.json(products)
}

exports.getAllProducts = (req,res)=>{
    res.json(products);
}

exports.getProduct = (req,res)=>{
    //console.log( req.params.id)
    const id = req.params.id
   const product= products.find(p=>p.id==id);
    res.json(product);
}

exports.replaceProduct = (req,res)=>{
    const id = req.params.id;
    const index = products.findIndex(p=>p.id==id);
    products.splice(index,1,{...req.body,id:id})
    res.sendStatus(201).json();
}

exports.updateProduct = (req,res)=>{
    const id = req.params.id;
    const index = products.findIndex(p=>p.id==id);
    const product = products[index];
    products.splice(index,1,{...product,...req.body})
    res.sendStatus(201).json();
}

exports.deleteProduct = (req,res)=>{
    const id = req.params.id;
    const index = products.findIndex(p=>p.id==id);
    const product = products[index];
    products.splice(index,1);
    res.json(product);
}
