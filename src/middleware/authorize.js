const jwt = require("jsonwebtoken");
require("dotenv").config();

//this middleware will on continue on if the token is inside the local storage

module.exports = function (req, res, next) {
	// Get token from header
	const accessToken = req.header("accessToken");

	// Check if not token
	if (!accessToken) {
		return res.status(403).json({ message: "Not Authorized" });
	}

	// Verify token
	try {
		//it is going to give use the user id (user:{id: user.id})
		const verify = jwt.verify(accessToken, process.env.JWT_SECRET);
		req.user = verify.user;
		next();
	} catch (err) {
		res.status(401).json({ message: "Invalid Token" });
	}
};
