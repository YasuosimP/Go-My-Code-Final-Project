const express=require('express')
const dbConnect=require('./helpers/dbConnect')
const cors=require ('cors')
const config=require('config')
const app=express()
const port=5000 ||  config.get('SERVER_CONFIG.PORT')
dbConnect()
app.use(cors())
app.use(express.json())
app.use('/api/users',require('./routes/userRoute'))
app.listen(port,(err)=>{
    err ?console.log(err) : console.log('server is running ')
})