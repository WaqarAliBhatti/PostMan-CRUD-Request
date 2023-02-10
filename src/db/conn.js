const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/wakkarDB").then(()=>{
    console.log('Connection Succeeded');
}).catch((e)=>{
    console.log('Connection Failed\n'+e);
})
