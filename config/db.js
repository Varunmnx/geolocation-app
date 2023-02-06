const Mongoose = require("mongoose")

module.exports =connector =()=> Mongoose.connect(process.env.DB_URL,{
     useNewUrlParser :true,
     useUnifiedTopology :true,
}).then(()=>console.log(" connected successfully !")).catch((error)=>{
    console.log(`An error occured ${error.message}`)
    console.log(`exitings server !`)
    process.exit(1)
})