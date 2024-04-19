const express=require('express');
const app=express();

require('dotenv').config();

const PORT=process.env.PORT || 4000;

app.get('/home', (req, res)=>{
    res.status(200).json({
        success:"true",
        message:"Hello ji",
    })
})

app.listen(PORT, ()=>{
    console.log(`App started at port ${PORT}`);
})

