const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017").then(()=>{
    console.log("db connected")
}).catch((err)=>{
    console.log("error in connecting DB"+err)
})
