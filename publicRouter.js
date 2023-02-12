/* const express = require('express')

const publicRouter = express.Router();

const log = (req,res,next)=>{
    console.log("logging something")
    next()
}

publicRouter.all("*",log)

publicRouter.get('/', (req,res)=>{
    res.send("Home")
})
publicRouter.get('/about', (req,res)=>{
    res.send("About")
})

module.exports=publicRouter */

/* const express = require('express')

const publicRouter = express.Router();

publicRouter.param('user',(req,res,next,id)=>{
    req.user = id === '1'? 'Admin' : 'Anonymous';
    next()
})

publicRouter.get('/about', (req,res)=>{
    res.send("About")
})

publicRouter.get('/:user', (req,res)=>{
    res.send(`Hello ${req.user}`)
})
module.exports=publicRouter */

/* const express = require('express')
const publicRouter = express.Router();
publicRouter.param((param,option)=>{
    return (req,res,next,val) =>{
        if(val===option){
            next()
        }else{
            res.sendStatus(403)
        }
    }
})

publicRouter.param('user','12')

publicRouter.get('/about', (req,res)=>{
    res.send("About")
})
publicRouter.get('/:user', (req,res)=>{
    res.send(`Hello Admin`)
})
module.exports=publicRouter */

const express = require('express')
const publicRouter = express.Router();

publicRouter
           .route('/user')
           .all((req,res,next)=>{
               console.log("logging ")
               next()
           })
           .get((req,res)=>{
               res.send("get")
           })
           .put((req,res)=>{
               res.send("put")
           })
           .post((req,res)=>{
               res.send("post")
           })
           .delete((req,res)=>{
               res.send("delete")
           })
module.exports=publicRouter