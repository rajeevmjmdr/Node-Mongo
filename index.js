require("dotenv").config();
const express = require("express");
const server = express();
const mongoose = require("mongoose");

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.DB_CONNECTION);
  console.log("Database Connected");
}

// Server now read body - body parser
server.use(express.json());
server.use(express.static(process.env.PUBLIC_DIR));
//MiddleWare - Application level
// server.use((req,res,next)=>{
//     console.log(req.ip +" - "+req.url+ " - "+ req.get('User-Agent'));
//     next();
// })

//Using Third-party Middleware -Morgan
const morgan = require("morgan");
server.use(morgan("common"));
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
const productRouter = require("./router/Product");
const userRouter = require("./router/User");
server.use("/", productRouter.router);
server.use("/", userRouter.router);

// server.post('/',auth,(req,res)=>{
//     res.json({type:"POST"})
// })

server.listen(process.env.SERVER_PORT, () => {
  console.log(
    "Server Started and listening on port:" + process.env.SERVER_PORT
  );
});
