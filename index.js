const express = require('express')
const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Api is running");
})

app.post('/',(req,res)=>{
    let result=0;
    if(req.body.operation=="+"){
        result=parseInt(req.body.num1)+parseInt(req.body.num2);
    }else if(req.body.operation=="-"){
        result=parseInt(req.body.num1)-parseInt(req.body.num2);
    }else{
        result=parseInt(req.body.num1)*parseInt(req.body.num2);
    }
    res.status(201).send(JSON.stringify({
        result:result
    }));
})

app.listen(process.env.port || 3000, ()=>{console.log("server is running")})