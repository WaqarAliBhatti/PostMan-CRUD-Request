const express=require('express');
require("../src/db/conn");
const MensRanking=require('../src/models/mens')
const PORT=process.env.PORT || 3000;

const app=express()

app.use(express.json());
 
//Handling Post Request
app.post('/mens',async (req,res)=>{
    try{
        const addingMensRecords=new MensRanking(req.body)
        console.log(req.body);
        const insertMens= await addingMensRecords.save();
        res.status(201).send(insertMens);
    }
    catch(e){
        res.status(400).send(e);
    }
})
//Handling Get request 
app.get('/mens',async (req,res)=>{
    try{
        const getMens=await MensRanking.find({});
        res.status(201).send(getMens);
    }
    catch(e){
        res.status(400).send(e);
    }
})

//Get request for Individual Document
app.get('/mens/:ranking',async (req,res)=>{
    try{
        const ranking=req.params.ranking;
        const getMen=await MensRanking.find({ranking});
        res.status(201).send(getMen);
    }
    catch(e){
        res.status(400).send(e);
    }
})

app.patch('/mens/:id',async (req,res)=>{
    try{
        const _id=req.params.id;
        const getMen=await MensRanking.findByIdAndUpdate(_id,req.body,{new:true});
        res.status(201).send(getMen);
    }
    catch(e){
        res.status(400).send(e);
    }
})


app.listen(PORT,(req,res)=>{
    console.log('Server is running on port '+ PORT);
})