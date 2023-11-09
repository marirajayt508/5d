const router = require("express").Router()
const moment = require("../controller/momentController")
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
const upload = multer({ storage: storage })

router.route("/addmoment")
.post(upload.single('image'),moment.addmoments);

router.route("/getmoment")
.post(moment.getmoment);

router.route("/allmoments")
.get(moment.getallmoments);

router.route("/")
.get(moment.index);
//Export Module
module.exports = router;