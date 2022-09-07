const express = require('express')
const cors = require('cors')
const app = express();
app.use(cors())
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

app.listen(process.env.PORT || 3000, ()=>{console.log("server is running")})
