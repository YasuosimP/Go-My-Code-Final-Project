const mongoose=require('mongoose')
const config=require ('config')
//const URI="mongodb+srv://hamza:53865586@cluster0.dxxor.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const dbConnect=()=>{
   mongoose.connect(config.get('DB_CONNECTION.URI'),(err)=>{
    err ? console.log(err): console.log('database is connected') 
})}
module.exports=dbConnect