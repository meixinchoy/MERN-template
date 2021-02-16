require('dotenv').config()
const mongoose = require('mongoose')

exports.connectMDB= async ()=>{
    try{
        const conn = await mongoose.connect(process.env.URI,{
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log(`Database Connected: ${conn.connection.host}`)
    }catch(err){
        console.log(`Error: ${err.messsage}`)
        process.exit(1)
    }
}
