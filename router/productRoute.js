const router = require("express").Router()
const product = require("../controller/productController")

router.route("/adduser")
.post(product.adduser);

// router.route("/texst")
// .post(product.test);
//Export Module
module.exports = router;