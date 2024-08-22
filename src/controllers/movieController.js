const { Movies } = require("../../db/models");

module.exports = {
	movieList: async (req, res) => {
		const { limit, page } = req.query;
		try {
			const movies = await Movies.findAndCountAll({
				offset: !page || !limit ? null : 0 + (page - 1) * limit,
				limit: !limit ? null : limit,
			});
			return res.send({ movies, page, limit });
		} catch (error) {
			console.log(error);
			res.status(500).json({ message: error.message });
		}
	},
	movieDetail: async (req, res) => {
		const { id } = req.params;
		try {
			const movie = await Movies.findByPk(Number(id));
			if (!movie) {
				return res
					.status(404)
					.json({ error: "Not found", message: "Data not found" });
			}
			return res.send(movie);
		} catch (error) {
			console.log(error);
			res.status(500).json({ message: error.message });
		}
	},
};
