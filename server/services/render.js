
const axios=require("axios");


exports.homeRoute=(req,res)=>{
    axios.get("http://localhost:3000/api/users")
        .then(resp=>{
            res.render('index',{users:resp.data})

        })
        .catch(err=>{
            res.send(err)
        })
}

exports.addUser=(req,res)=>{
    res.render("add_user")
}

exports.updateUser=(req,res)=>{
    axios.get("http://localhost:3000/api/users",{params:{id:req.query.id}})
        .then(function(resp){
            res.render("update_user",{user:resp.data})
        })
        .catch(err=>{
            res.send(err)
        })
}