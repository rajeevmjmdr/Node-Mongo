const express = require('express');
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
const products = data.products;
const server = express();
// Server now read body - body parser
server.use(express.json());

//server.use(express.static('public'));
//MiddleWare - Application level
// server.use((req,res,next)=>{
//     console.log(req.ip +" - "+req.url+ " - "+ req.get('User-Agent'));
//     next();
// })

//Using Third-party Middleware -Morgan
const morgan = require('morgan');
server.use(morgan('common'));
//MiddleWare - Router level
const auth = (req,res,next)=>{
    //console.log(req.query)
    if(req.body.password==123){
        next(); 
    }else{
        res.sendStatus(401);
    }

}

// API - using Middle ware
// server.get('/',auth,(req,res)=>{
//     res.json({type:"GET"})
// })

// POST - CREATE -/products
server.post('/products',(req,res)=>{
    console.log(req.body);
    products.push(req.body);
    res.json(products)
})

// GET -READ - /products 
server.get('/products',(req,res)=>{
    res.json(products);
})
server.get('/products/:id',(req,res)=>{
    //console.log( req.params.id)
    const id = req.params.id
   const product= products.find(p=>p.id==id);
    res.json(product);
})

//UPDATE
server.put('/products/:id',(req,res)=>{
    const id = req.params.id;
    const index = products.findIndex(p=>p.id==id);
    products.splice(index,1,{...req.body,id:id})
    res.sendStatus(201).json();
})

// PATCH
server.patch('/products/:id',(req,res)=>{
    const id = req.params.id;
    const index = products.findIndex(p=>p.id==id);
    const product = products[index];
    products.splice(index,1,{...product,...req.body})
    res.sendStatus(201).json();
})

// DELETE
server.delete('/products/:id',(req,res)=>{
    const id = req.params.id;
    const index = products.findIndex(p=>p.id==id);
    const product = products[index];
    products.splice(index,1);
    res.json(product);
})
// server.post('/',auth,(req,res)=>{
//     res.json({type:"POST"})
// })
// // API
// server.get('/',(req,res)=>{
//     res.json({type:"GET"})
// })
// server.post('/',(req,res)=>{
//     res.json({type:"POST"})
// })
// server.put('/',(req,res)=>{
//     res.json({type:"PUT"})
// })
// server.patch('/',(req,res)=>{
//     res.json({type:"PATCH"})
// })
// server.delete('/',(req,res)=>{
//     res.json({type:"DELETE"})
// })
// server.get('/',(req,res)=>{
//     //res.send('hello world');
//         //res.json(products);
//     //res.sendStatus(400);
// })
server.listen(8080,()=>{
    console.log("Server Started and listening on port 8080");
})