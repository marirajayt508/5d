const mongoose = require("mongoose");
const config = require('config'); 

//Verify Connection
const connection = mongoose.connection;

if(process.NODE_ENV == "dev")
{connection.on("connected",()=>{
console.log("MOENT MODAL CONNECTED")
  });

connection.on("error",()=>{
console.log("MOMENT MODAL CONNECTION ERROR")
});}

const momentSchema =  new mongoose.Schema({
"_id": {
  "type" : String,
},
"title": {
    "type" : String,
  },
  "command": {
    "type" : String,
  },
  "tag": {
    "type" : String,
  },
  "image": {
    "type" : String,
  },
  "time" : {
    type : String,
    default : new Date()
  },
});

const momentModal = mongoose.model(config.get("app.db.collections.momentDetails"),momentSchema);

module.exports = momentModal;