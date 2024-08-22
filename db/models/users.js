"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Users extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Users.init(
		{
			name: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			username: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			email: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			password: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			role: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			address: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			phone_number: {
				allowNull: false,
				type: DataTypes.STRING,
			},
		},
		{
			sequelize,
			modelName: "Users",
			tableName: "users",
			underscored: true,
		}
	);
	return Users;
};
