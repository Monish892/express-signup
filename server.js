const express=require('express')
const port=process.env.port || 3000
const app=express()
const mongoose=require('mongoose')
const userroutes=require('./routes/userroutes')


mongoose.connect('mongodb+srv://grmonishs65:2007@asap-project.izf50.mongodb.net/sdaad').then(()=>console.log('connected to mongodb')
).catch(err=>console.error('mongodb coonect err:',err))

app.use(express.json())

app.use('/api/users',userroutes)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
    
})