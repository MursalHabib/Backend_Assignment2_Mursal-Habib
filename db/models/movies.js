"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Movies extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Movies.init(
		{
			title: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			synopsis: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			trailer_url: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			img_url: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			rating: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			status: {
				type: DataTypes.STRING,
			},
		},
		{
			sequelize,
			modelName: "Movies",
			tableName: "movies",
			underscored: true,
		}
	);
	return Movies;
};
