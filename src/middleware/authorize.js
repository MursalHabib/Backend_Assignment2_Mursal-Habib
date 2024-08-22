const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function (req, res, next) {
	const accessToken = req.header("accessToken");

	if (!accessToken) {
		return res
			.status(403)
			.json({
				error: "Unauthorized",
				message: "Please provide valid token",
			});
	}

	try {
		const verify = jwt.verify(accessToken, process.env.JWT_SECRET);
		req.user = verify.user;
		next();
	} catch (err) {
		res.status(401).json({
			error: "Unauthorized",
			message: "Please provide valid token",
		});
	}
};
