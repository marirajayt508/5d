const codes = require("../utils/resonsecode")
const asyncErrorHandler = require("../utils/asyncErrorHandler")
const productModal = require("../modal/productModal")
const path = require('path')
const userIndex = path.join(__dirname,"..","public")

//ADD MOMENT
exports.adduser = asyncErrorHandler(async (_request,_response,next)=>{
let body = _request.body;
let firstname = body.firstname.toLowerCase();
let lastname = body.lastname.toLowerCase();
let phonenumber = body.phone;
let city = body.city.toLowerCase();
let password = body.password.toLowerCase();
let email = body.email.toLowerCase();

if(!(firstname && lastname && password && email)) 
{
    next(err)
}
  let data = {
    "_id" : firstname[0]+lastname[1]+city[0],
    "firstname" : firstname,
    "lastname" : lastname,
    "email" : email,
    "password" : password,
    "phone" : phonenumber,
    "city" : city
  }
await productModal.insertMany(data)
let serviceResponse = {
    "message" : `USER SUCESSFULLY ADDED !`,
};
    _response.status(codes.success)
    .json(serviceResponse);
})



// exports.test = (_request,_responce)=>{
//   let body = _request.body
//   console.log(body)
//  _responce.send(_request.body.user)
// }