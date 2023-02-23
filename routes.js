let express = require("express");
const { xlsxController } = require("./Controller/xlsxController");

var router = express.Router();

router.post("/xlsx", xlsxController);


module.exports = router;
