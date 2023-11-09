const mongoose = require("mongoose");
const config = require('config'); 

//Verify Connection
const connection = mongoose.connection;

if(process.NODE_ENV == "dev")
{connection.on("connected",()=>{
console.log("PRODUCT MODAL CONNECTED")
  });

connection.on("error",()=>{
console.log("PRODUCT MODAL CONNECTION ERROR")
});}

const productSchema =  new mongoose.Schema({
"_id": {
  "type" : String,
},
"firstname": {
    "type" : String,
  },
  "lastname": {
    "type" : String,
  },
  "email": {
    "type" : String,
  },
  "city": {
    "type" : String,
  },
  "password": {
    "type" : String,
  },
  "phone":{
    "type" : Number,
  },
});

const blogModal = mongoose.model(config.get("app.db.collections.productDetails"),productSchema);

module.exports = blogModal;