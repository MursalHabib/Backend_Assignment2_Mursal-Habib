const router = require("express").Router();
const { movieList, movieDetail } = require("../controllers/movieController");
const authorize = require("../middleware/authorize");

router.get("/movies", authorize, movieList);
router.get("/movies/:id", authorize, movieDetail);

module.exports = router;
