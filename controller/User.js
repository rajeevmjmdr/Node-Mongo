const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
const users = data.users;

exports.createUser = (req,res)=>{
    console.log(req.body);
    users.push(req.body);
    res.json(users)
}

exports.getAllusers = (req,res)=>{
    res.json(users);
}

exports.getUser = (req,res)=>{
    //console.log( req.params.id)
    const id = req.params.id
   const User= users.find(p=>p.id==id);
    res.json(User);
}

exports.replaceUser = (req,res)=>{
    const id = req.params.id;
    const index = users.findIndex(p=>p.id==id);
    users.splice(index,1,{...req.body,id:id})
    res.sendStatus(201).json();
}

exports.updateUser = (req,res)=>{
    const id = req.params.id;
    const index = users.findIndex(p=>p.id==id);
    const User = users[index];
    users.splice(index,1,{...User,...req.body})
    res.sendStatus(201).json();
}

exports.deleteUser = (req,res)=>{
    const id = req.params.id;
    const index = users.findIndex(p=>p.id==id);
    const User = users[index];
    users.splice(index,1);
    res.json(User);
}
