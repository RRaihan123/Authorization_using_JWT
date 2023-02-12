const handle = (req,res)=>{
    console.log(req.app.locals.title1)
    res.send("this is home with get")
 }

 module.exports=handle

 

