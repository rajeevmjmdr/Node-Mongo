const express = require('express');
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
// const auth = (req,res,next)=>{
//     //console.log(req.query)
//     if(req.body.password==123){
//         next(); 
//     }else{
//         res.sendStatus(401);
//     }

// }

// API - using Middle ware
// server.get('/',auth,(req,res)=>{
//     res.json({type:"GET"})
// })

// Router Applying
const productRouter = require('./router/Product')
const userRouter = require('./router/User')
server.use('/',productRouter.router)
server.use('/',userRouter.router)
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