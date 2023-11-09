const codes = require("../utils/resonsecode")
const asyncErrorHandler = require("../utils/asyncErrorHandler")
const momentModal = require("../modal/momentModal")
const path = require('path')
const userIndex = path.join(__dirname,"..","public")

//ADD MOMENT
exports.addmoments = asyncErrorHandler(async (_request,_response,next)=>{
let body = _request.body;
let file = _request.file;
let data = {
    "_id" : body.title.toLowerCase(),
    "title" : body.title.toLowerCase(),
    "tag" : body.tags,
    "command" : body.comment.toLowerCase(),
    "image" : file.path,
  }

if(!(data.title && data.command && data.tag && data.image )) 
{
    next(err)
}


await momentModal.insertMany(data)
let serviceResponse = {
    "message" : `MOMENT SUCESSFULLY ADDED !`,
};
    _response.status(codes.success)
    .json(serviceResponse);
})
    
//GET ALL MOMENTS
exports.getallmoments = asyncErrorHandler(async (_request,_response,next)=>{
    let data = await momentModal.find()
    const serviceResponse = {
        data
    }
    _response.status(codes.success)
    .json(serviceResponse);
})

//GET MOMENT
exports.getmoment = asyncErrorHandler(async (_request,_response,next)=>{
    let title = _request.body.title.toLowerCase();
    if(!(title)) 
{
    next(err)
}
let query = {
    _id : title
}
    let data = await momentModal.findById(query)
    const serviceResponse = {
        data
    }
    _response.status(codes.success)
    .json(serviceResponse);
})

exports.index = (_request,_responce)=>{
    _responce.sendFile(`${userIndex}/Moments.html`)
  }