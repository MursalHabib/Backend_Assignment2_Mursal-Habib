const router = require("express").Router();
const fs = require("fs");

router.use(require("./movies.route"));
router.use(require("./auth.route"));
module.exports = router;
